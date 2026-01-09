import axios from 'axios'
import 'dotenv/config'
import { deleteStarlink_gen2_45, starlink_2m, starlink_gen2_45, deleteStarlink_2m } from './data.js';
import { sendTelegramMessage } from './telegram.js';

const API_CONFIG = {
    baseURL: 'https://api-seller.ozon.ru',
    headers: {
        'Client-Id': process.env.OZON_CLIENT_ID,
        'Api-Key': process.env.OZON_API_KEY,
        'Content-Type': 'application/json'
    }
};

async function updateExistingProduct(data = null, logName = "") {
    if (data === null) {
        throw new Error("Не передан объект для создания или обновления товара");
    }

    console.log(`--- Обновление товара: ${logName || "Без названия"} ---`);

    try {
        const response = await axios.post(
            `${API_CONFIG.baseURL}/v3/product/import`,
            data,
            { headers: API_CONFIG.headers }
        );

        console.log("✅ ЗАПРОС ПРИНЯТ!");
        console.log("Новый ID задачи (task_id):", response.data.result.task_id);

        return response.data; // опционально
    } catch (error) {
        console.error(`❌ ОШИБКА ОБНОВЛЕНИЯ (${logName}):`);

        if (error.response) {
            console.error(JSON.stringify(error.response.data, null, 2));
        } else {
            console.error(error.message);
        }

        throw error; // 🔴 прокидываем выше
    }
}


// 1020002097228000

async function updateStocks(warehouseId, offerId, count) {
    console.log(`--- Обновление остатков для товара ${offerId} ---`);

    const stockData = {
        "stocks": [
            {
                "offer_id": offerId,
                "warehouse_id": warehouseId, // ID склада из списка складов
                "stock": count // Количество товара в наличии
            }
        ]
    };

    const maxRetries = 3;
    const retryDelay = 10000; // 10 секунд

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await axios.post(`${API_CONFIG.baseURL}/v2/products/stocks`, stockData, {
                headers: API_CONFIG.headers
            });

            if (response.data.result[0].updated) {
                console.log(`✅ Успешно! Для товара "${offerId}" установлено количество: ${count}`);
                return; // Выходим из функции, если всё ок
            } else {
                console.warn(`⚠️ [Попытка ${attempt}/${maxRetries}] Озон принял запрос, но статус обновления: false`);
                const errors = response.data.result[0].errors || [];
                console.log('Ошибки:', errors);

                // Ошибка "тегов" (товар еще не прожеван Озоном)
                const isTagError = errors.some(e => e.code === 'PRODUCT_HAS_NOT_BEEN_TAGGED_YET');
                if (isTagError) {
                    console.log(`ℹ️ Товар еще не прошел внутреннюю обработку тегов (TAG_ERROR). Ждем...`);
                }
            }

        } catch (error) {
            console.error(`❌ [Попытка ${attempt}/${maxRetries}] Ошибка при обновлении остатков:`);
            if (error.response) {
                console.error(JSON.stringify(error.response.data, null, 2));
            } else {
                console.error(error.message);
            }
        }

        if (attempt < maxRetries) {
            console.log(`⏳ Ждем ${retryDelay / 1000} сек перед повтором обновления остатков...`);
            await new Promise(resolve => setTimeout(resolve, retryDelay));
        }
    }

    // Если прошли все попытки и не вышли
    throw new Error(`Не удалось обновить остатки после ${maxRetries} попыток.`);
}

// удаления товара

async function archiveProduct(productId) {
    console.log(`🚀 Начинаем процесс АРХИВАЦИИ для артикула: ${productId}`);
    try {
        const response = await axios.post(`${API_CONFIG.baseURL}/v1/product/archive`, {
            "product_id": [productId]
        }, { headers: API_CONFIG.headers });

        console.log('--- Ответ от сервера Ozon (Архивация) ---');
        console.log(JSON.stringify(response.data, null, 2));

        const result = response.data.result;
        if (result && result[0]) {
            if (result[0].status) {
                console.log(`✅ УСПЕХ: Товар ${productId} в архиве.`);
            } else {
                console.log(`❌ ОТКАЗ: Ozon не заархивировал товар.`);
                console.log('Причина:', result[0].errors);
            }
        }
    } catch (error) {
        console.error('🔥 КРИТИЧЕСКАЯ ОШИБКА АРХИВАЦИИ:');
        if (error.response) {
            console.error('Код:', error.response.status);
            console.error('Данные:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error(error.message);
        }
    }
}

async function waitForProductReady(offerId) {
    console.log(`⏳ Начало ожидания модерации для: ${offerId}`);
    const maxAttempts = 10; // 10 * 10 сек = 1 минута с задержкой
    const delay = 20000; // 20 секунд

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const response = await axios.post(
                `${API_CONFIG.baseURL}/v3/product/info/list`,
                { offer_id: [offerId] },
                { headers: API_CONFIG.headers }
            );

            const item = response.data.result?.items?.[0] || response.data.items?.[0];

            if (item) {
                const statusName = item.statuses?.status_name;
                const moderateStatus = item.statuses?.moderate_status;
                const state = item.statuses?.state;
                const isCreated = item.statuses?.is_created; // Проверим, есть ли такое поле
                const validationState = item.statuses?.validation_state;

                console.log(`   [Попытка ${attempt}/${maxAttempts}] Full Statuses: ${JSON.stringify(item.statuses)}`);
                console.log(`   [Попытка ${attempt}/${maxAttempts}] Статус: ${statusName}, Модерация: ${moderateStatus}, Создан: ${isCreated}`);

                // Критерий готовности: Товар создан (is_created: true) И прошел модерацию
                if (isCreated === true && moderateStatus === 'approved') {
                    console.log(`✅ Товар ${offerId} успешно создан и прошел модерацию!`);
                    return true;
                }

                if (moderateStatus === 'declined') {
                    console.error(`❌ Товар ${offerId} не прошел модерацию (declined)!`);
                    return false;
                }
            } else {
                console.log(`   [Попытка ${attempt}/${maxAttempts}] Товар пока не найден в API...`);
            }

        } catch (error) {
            console.warn(`   [Попытка ${attempt}/${maxAttempts}] Ошибка проверки статуса: ${error.message}`);
        }

        // Ждем перед следующей попыткой
        if (attempt < maxAttempts) {
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    console.error(`⏰ Время ожидания истекло для ${offerId}`);
    return false;
}


// start

const needSaleNames = [
    "Интернет кабель 45м для спутника V2(Gen2)",
    "Кабель питания для V5 Mini, 2 метра, темно-серый",
    "Интернет кабель 23м для спутника V2(Gen2)",
    "Кабель питания для V5 Mini, 20 метров, темно-серый, V5 Mini",
    "Кабель питания для V5 Mini, 5 метров, темно-серый",
    "Кабель питания для V5 Mini, 10 метров, темно-серый"
];

const deleteProduct = (offerId) => ({
    ["Интернет кабель 45м для спутника V2(Gen2)"]: { objValue: deleteStarlink_gen2_45(offerId) },
    ["Кабель питания для V5 Mini, 2 метра, темно-серый"]: { objValue: deleteStarlink_2m(offerId) },
    // "Интернет кабель 23м для спутника V2(Gen2)",
    // "Кабель питания для V5 Mini, 20 метров, темно-серый, V5 Mini",
    // "Кабель питания для V5 Mini, 5 метров, темно-серый",
    // "Кабель питания для V5 Mini, 10 метров, темно-серый"
})



const namesObj = {
    ["Интернет кабель 45м для спутника V2(Gen2)"]: { objValue: starlink_gen2_45(), stock: 12 },
    ["Кабель питания для V5 Mini, 2 метра, темно-серый"]: { objValue: starlink_2m(), stock: 30 },
    // "Интернет кабель 23м для спутника V2(Gen2)",
    // "Кабель питания для V5 Mini, 20 метров, темно-серый, V5 Mini",
    // "Кабель питания для V5 Mini, 5 метров, темно-серый",
    // "Кабель питания для V5 Mini, 10 метров, темно-серый"
};




async function fetchAndCheckAllProducts() {
    const errors = []; // Массив для сбора ошибок

    try {
        let allOfferIds = [];
        let lastId = "";
        let hasNext = true;

        while (hasNext) {
            const listRes = await axios.post(
                `${API_CONFIG.baseURL}/v3/product/list`,
                {
                    filter: { visibility: "ALL" },
                    last_id: lastId,
                    limit: 1000,
                },
                { headers: API_CONFIG.headers }
            );

            const result = listRes.data.result;
            const items = result.items || [];

            if (items.length > 0) {
                allOfferIds.push(...items.map((i) => i.offer_id));
                lastId = result.last_id;
            }
            if (items.length < 1000) hasNext = false;
        }

        console.log(`✅ Всего артикулов: ${allOfferIds.length}`);

        let allDetails = [];
        for (let i = 0; i < allOfferIds.length; i += 1000) {
            const chunk = allOfferIds.slice(i, i + 1000);
            const infoRes = await axios.post(
                `${API_CONFIG.baseURL}/v3/product/info/list`,
                { offer_id: chunk },
                { headers: API_CONFIG.headers }
            );

            const details = infoRes.data.result?.items || infoRes.data.items || [];
            allDetails.push(...details);
        }

        const startDate = new Date("2026-01-02T00:00:00Z");
        const now = new Date();

        // 2. Применяем фильтр к полученным данным
        const filteredProducts = allDetails.filter((p) => {
            const itemDate = new Date(p.created_at);
            // Проверяем, что дата товара больше или равна 2 января и меньше или равна "сейчас"
            return itemDate >= startDate && itemDate <= now;
        });

        // Сортировка: новые вверху
        filteredProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        console.log("\n" + "=".repeat(120));
        console.log(
            "№   | АРТИКУЛ        | ПРОДАЕТСЯ? | СОЗДАН             | МОДЕРАЦИЯ  | ПРИЧИНА (если не продается)"
        );
        console.log("-".repeat(120));

        filteredProducts.forEach((p, i) => {
            // 1. Извлекаем статус из объекта statuses
            const statusName = p.statuses?.status_name || "Неизвестно";
            // ... (rest of the loop)

            // 2. Проверяем модерацию
            const moderateStatus = p.statuses?.moderate_status || "Неизвестно";
            const isApproved = moderateStatus === "approved";

            // 3. Проверяем остатки (has_stock: true в вашем JSON)
            const hasStock = p.stocks?.has_stock === true;

            // 4. Проверяем видимость
            const isVisible = p.visible === true;

            let saleStatus = "🔴 НЕТ";
            let reason = "OK";

            // Условие продажи: статус "Продается" И наличие склада И модерация одобрена
            if (statusName === "Продается" && hasStock && isApproved) {
                saleStatus = "✅ ДА";
            } else {
                let reasons = [];
                if (statusName !== "Продается") reasons.push(`Статус: ${statusName}`);
                if (!hasStock) reasons.push("Нет склада");
                if (!isApproved) reasons.push(`Модерация: ${moderateStatus}`);
                if (!isVisible) reasons.push("Скрыт");
                reason = reasons.join(" | ");
            }

            const num = (i + 1).toString().padEnd(3);
            const offerId = (p.offer_id || "---").padEnd(14);
            const sale = saleStatus.padEnd(10);
            const date = new Date(p.created_at).toLocaleString("ru-RU").padEnd(18);
            const mod = moderateStatus.padEnd(10);

            console.log(
                `${num} | ${offerId} | ${sale} | ${date} | ${mod} | ${reason}`
            );
        });

        console.log("-".repeat(120));
        console.log(`🏁 Готово. Всего проверено: ${filteredProducts.length}`);


        const isSale = (p) => p.statuses?.status_name === "Продается" && p.stocks?.has_stock && p.statuses?.moderate_status === "approved"

        const tasks = [];

        for (const p of filteredProducts) {
            if (needSaleNames.includes(p.name) && !isSale(p)) {
                console.log(`\n🔄 Обработка товара: ${p.name}`);

                const nameConfig = namesObj[p.name];
                if (!nameConfig) {
                    console.warn(`⚠️ Warning: No config found for "${p.name}" in namesObj. Skipping.`);
                    continue;
                }

                let newProduct = nameConfig.objValue;
                let stock = nameConfig.stock;

                // Fix: newProduct is an object { items: [...] }, not an array
                if (!newProduct.items || !newProduct.items[0]) {
                    console.error(`❌ Error: Invalid product structure for "${p.name}".`);
                    errors.push(`❌ <b>${p.name}</b>: Invalid product structure (config error).`);
                    continue;
                }

                let newOfferId = newProduct.items[0].offer_id;

                const deleteProductObj = deleteProduct(p.offer_id);
                const deleteConfig = deleteProductObj[p.name];

                if (!deleteConfig) {
                    console.warn(`⚠️ Warning: No delete config found for "${p.name}". Skipping.`);
                    continue;
                }

                // Создаем промис для обработки одного товара
                const task = (async () => {
                    try {
                        // 1. Обновляем старую карточку
                        // changeAndArchiveOldProducts возвращает промис
                        await changeAndArchiveOldProducts(deleteConfig.objValue, p.id, `ARCHIVE PREP: ${p.name}`);

                        // 2. Создаем новую карточку
                        await updateExistingProduct(newProduct, `NEW CARD: ${p.name}`);

                        // 3. Ждем модерации
                        const isReady = await waitForProductReady(newOfferId);

                        if (isReady) {
                            console.log(`📦 Товар готов, обновляем стоки для ${p.name}...`);
                            await updateStocks(1020002097228000, newOfferId, stock);
                        } else {
                            throw new Error("Не прошел модерацию или таймаут");
                        }
                    } catch (err) {
                        const errMsg = `❌ <b>${p.name}</b>: ${err.message}`;
                        console.error(errMsg);
                        errors.push(errMsg);
                    }
                })();

                tasks.push(task);
            }
        }

        if (tasks.length > 0) {
            console.log(`\n⏳ Ожидаем завершения ${tasks.length} задач...`);
            await Promise.allSettled(tasks);
            console.log("✅ Все задачи завершены.");
        } else {
            console.log("\n✅ Нет активных задач для выполнения.");
        }

    } catch (error) {
        console.error("❌ Глобальная ошибка:", error.response?.data || error.message);
        errors.push(`🔥 <b>CRITICAL ERROR:</b> ${error.message}`);
    } finally {
        if (errors.length > 0) {
            console.log(`\n⚠️ Есть ошибки (${errors.length}). Отправляем отчет в Telegram...`);
            const report = `🚨 <b>Отчет о сбоях Ozon:</b>\n\n${errors.join('\n')}`;
            await sendTelegramMessage(report);
        } else {
            console.log('___________________________________');
            console.log('\n✨ Работа завершена без ошибок.');
            await sendTelegramMessage("✅ Скрипт Ozon успешно завершил работу. Ошибок нет.");
        }
        process.exit();
    }
}

// Принудительно завершить процесс через 5 минут, если он сам не успел
setTimeout(async () => {
    const msg = "⏳ Тайм-аут: Скрипт работал слишком долго (5 мин) и был принудительно остановлен.";
    console.error(msg);
    await sendTelegramMessage(`⚠️ <b>TIMEOUT:</b> ${msg}`);
    process.exit(1);
}, 300000); // 300 000 мс = 5 минут

fetchAndCheckAllProducts();
// end

const changeAndArchiveOldProducts = async (obj, id, logName) => {
    try {
        await updateExistingProduct(obj, logName);
        console.log(`⏳ Ожидание 15 сек перед архивацией ${id}...`);
        await new Promise(resolve => setTimeout(resolve, 17000));
        await archiveProduct(id);
    } catch (error) {
        console.log("❌ Ошибка в changeAndArchiveOldProducts:", error.message);
    }
}