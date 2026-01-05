
const names = [
    "Интернет кабель 45м для спутника V2(Gen2)",
    "Кабель питания для V5 Mini, 2 метра, темно-серый",
    "Интернет кабель 23м для спутника V2(Gen2)",
    "Кабель питания для V5 Mini, 20 метров, темно-серый, V5 Mini",
    "Кабель питания для V5 Mini, 5 метров, темно-серый",
    "Кабель питания для V5 Mini, 10 метров, темно-серый"
];

const starlink_gen2_45 = {
    "items": [
        {
            "offer_id": genArticle('каб-45'),
            "name": "Интернет кабель 45м для спутника V2(Gen2)",
            "description_category_id": 17028634,
            "type_id": 115012246,
            "price": "12550",
            "old_price": "14000",
            "vat": "0",
            "currency_code": "RUB",
            "barcode": "OZN", // Команда на генерацию штрихкода
            "weight": 120,
            "weight_unit": "g",
            "depth": 250,
            "height": 50,
            "width": 250,
            "dimension_unit": "mm",
            "images": [
                "https://cdn1.ozone.ru/s3/multimedia-1-h/8154529397.jpg",
                "https://cdn1.ozone.ru/s3/multimedia-1-h/8154553877.jpg",
                "https://cdn1.ozone.ru/s3/multimedia-1-5/8108263265.jpg",
                "https://cdn1.ozone.ru/s3/multimedia-1-6/8108263266.jpg",
                "https://cdn1.ozone.ru/s3/multimedia-1-b/8108263271.jpg",
                "https://cdn1.ozone.ru/s3/multimedia-1-8/8108263268.jpg",
                "https://cdn1.ozone.ru/s3/multimedia-1-e/8108263274.jpg",
                "https://cdn1.ozone.ru/s3/multimedia-1-g/8108263276.jpg"
            ],
            "attributes": [
                { "id": 8229, "values": [{ "dictionary_value_id": 115012246, "value": "Кабель для интернет-соединения" }] },
                { "id": 85, "values": [{ "dictionary_value_id": 971841445, "value": "Нет бренда" }] },
                { "id": 9048, "values": [{ "value": "одд2" }] }, // Название модели
                { "id": 10096, "values": [{ "dictionary_value_id": 61600, "value": "темно-серый" }] },
                { "id": 22390, "values": [{ "value": "gen" }] }, // Длина кабеля
                { "id": 5948, "values": [{ "dictionary_value_id": 34783, "value": "Для сетевого оборудования" }] }, // Назначение
                // { "id": 6157, "values": [{ "value": "2" }] }, // Количество выходных разъемов
                { "id": 21652, "values": [{ "dictionary_value_id": 971214931, "value": "Медь" }] }, // Материал проводника
                { "id": 6468, "values": [{ "value": "45" }] }, // Длина в м
                // { "id": 22270, "values": [{ "dictionary_value_id": 971417785, "value": "Фабричное производство" }] }, // Выпуск товара
                // { "id": 4382, "values": [{ "value": "2000" }] }, // Размеры, мм
                // { "id": 4383, "values": [{ "value": "100" }] }, // Вес товара, г
                { "id": 8962, "values": [{ "value": "1" }] }, // Единиц в одном товаре
                { "id": 4384, "values": [{ "value": "Кабель сертифицированный, запечатанный" }] }, // Комплектация
                { "id": 11650, "values": [{ "value": "1" }] }, // Количество заводских упаковок
                { "id": 6036, "values": [{ "value": "5" }] } // Срок службы
            ]
        }
    ]
};

const starlink_2m = {
    "items": [
        {
            "offer_id": "кб-2м-001-461",
            "name": "Кабель питания для V5 Mini, 2 метра, темно-серый",
            "description_category_id": 17028634,
            "type_id": 115012246,
            "price": "6500",
            "old_price": "7000",
            "vat": "0",
            "currency_code": "RUB",
            "barcode": "OZN", // Команда на генерацию штрихкода
            "weight": 120,
            "weight_unit": "g",
            "depth": 140,
            "height": 40,
            "width": 140,
            "dimension_unit": "mm",
            "images": [
                "https://cdn1.ozone.ru/s3/multimedia-tmp-9/item-pic-a468ceabb414a0aa14d65323a8b3b746.jpg",
                "https://cdn1.ozone.ru/s3/multimedia-tmp-2/item-pic-aa85098ebc031590870fee930c57a2aa.jpg",
                "https://cdn1.ozone.ru/s3/multimedia-tmp-f/item-pic-5b28f095b9c2a617060b947006319541.jpg",
                "https://cdn1.ozone.ru/s3/multimedia-tmp-6/item-pic-92240ca91ed382e68c81cd5e42d62e4d.jpg",
                "https://cdn1.ozone.ru/s3/multimedia-tmp-b/item-pic-f389d4f678bdbe4742b6a19d3a6d8346.jpg"
            ],
            "attributes": [
                { "id": 8229, "values": [{ "dictionary_value_id": 115012246, "value": "Кабель для интернет-соединения" }] },
                { "id": 85, "values": [{ "dictionary_value_id": 971841445, "value": "Нет бренда" }] },
                { "id": 9048, "values": [{ "value": "1" }] }, // Название модели
                { "id": 10096, "values": [{ "dictionary_value_id": 61600, "value": "темно-серый" }] },
                { "id": 22390, "values": [{ "value": "2" }] }, // Длина кабеля
                { "id": 5948, "values": [{ "dictionary_value_id": 34783, "value": "Для сетевого оборудования" }] }, // Назначение
                { "id": 6157, "values": [{ "value": "2" }] }, // Количество выходных разъемов
                { "id": 21652, "values": [{ "dictionary_value_id": 971214931, "value": "Медь" }] }, // Материал проводника
                { "id": 6468, "values": [{ "value": "2" }] }, // Длина в м
                { "id": 22270, "values": [{ "dictionary_value_id": 971417785, "value": "Фабричное производство" }] }, // Выпуск товара
                { "id": 4382, "values": [{ "value": "2000" }] }, // Размеры, мм
                { "id": 4383, "values": [{ "value": "100" }] }, // Вес товара, г
                { "id": 8962, "values": [{ "value": "1" }] }, // Единиц в одном товаре
                { "id": 4384, "values": [{ "value": "Кабель сертифицированный, запечатанный" }] }, // Комплектация
                { "id": 11650, "values": [{ "value": "1" }] }, // Количество заводских упаковок
                { "id": 6036, "values": [{ "value": "5" }] } // Срок службы
            ]
        }
    ]
};




const namesObj = {
    ["Интернет кабель 45м для спутника V2(Gen2)"]: starlink_gen2_45,
    ["Кабель питания для V5 Mini, 2 метра, темно-серый"]: starlink_2m,
    // "Интернет кабель 23м для спутника V2(Gen2)",
    // "Кабель питания для V5 Mini, 20 метров, темно-серый, V5 Mini",
    // "Кабель питания для V5 Mini, 5 метров, темно-серый",
    // "Кабель питания для V5 Mini, 10 метров, темно-серый"
};


async function fetchAndCheckAllProducts() {
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

        // Сортировка: новые вверху
        allDetails.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        console.log("\n" + "=".repeat(120));
        console.log(
            "№   | АРТИКУЛ        | ПРОДАЕТСЯ? | СОЗДАН             | МОДЕРАЦИЯ  | ПРИЧИНА (если не продается)"
        );
        console.log("-".repeat(120));

        allDetails.forEach((p, i) => {
            // 1. Извлекаем статус из объекта statuses
            const statusName = p.statuses?.status_name || "Неизвестно";

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
        console.log(`🏁 Готово. Всего проверено: ${allDetails.length}`);


        const isSale = (statusName) => statusName === "Продается" && hasStock && isApproved

        allDetails.forEach(p => {
            if (names.includes(p.name) && !isSale(p?.statusName)) {

            }
        });

    } catch (error) {
        console.error("❌ Ошибка:", error.response?.data || error.message);
    } finally {
        process.exit();
    }
}

fetchAndCheckAllProducts();
