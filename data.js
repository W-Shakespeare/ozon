const genArticle = b =>
    b + '-' + Math.random().toString(36).slice(2, 8);


export const starlink_gen2_45 = () => ({
    "items": [
        {
            "offer_id": genArticle('каб-45'),
            "name": "Интернет кабель 45м для спутника V2(Gen2)",
            "reviews_promo": "disable",

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
            ],
            promotions: [
                {
                    "operation": "disable",
                    "type": "REVIEWS_PROMO"
                },
                {
                    "operation": "disable",
                    "type": "INSTALLMENT_PROMO"
                }
            ]
        }
    ]
});

export const starlink_2m = () => ({
    "items": [
        {
            "offer_id": genArticle('каб-2м'),
            "name": "Кабель питания для V5 Mini, 2 метра, темно-серый",
            "reviews_promo": "disable",

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
            ],
            promotions: [
                {
                    operation: "disable",
                    type: "REVIEWS_PROMO",
                },
                {
                    operation: "disable",
                    type: "INSTALLMENT_PROMO",
                }
            ],
        }
    ]
});

export const deleteStarlink_2m = (offer_id) => ({
    "items": [
        {
            "offer_id": offer_id,
            "name": "Кабель питания для V5 Mini, 2 метра, темно-серый, не активная карточка",
            "description_category_id": 17028634,
            "type_id": 115012246,
            "price": "6500",
            "old_price": "7000",
            "vat": "0",
            "currency_code": "RUB",
            "barcode": "OZN", // Команда на генерацию штрихкода
            "weight": 120,
            "weight_unit": "g",
            "depth": 142,
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
                { "id": 9048, "values": [{ "value": "delete" }] }, // Название модели
                { "id": 10096, values: [{ dictionary_value_id: 61571, value: "белый" }] },
                { "id": 22390, "values": [{ "value": "delete2" }] }, // группа
                { "id": 5948, "values": [{ "dictionary_value_id": 34783, "value": "Для сетевого оборудования" }] }, // Назначение
                { "id": 6157, "values": [{ "value": "2" }] }, // Количество выходных разъемов
                { "id": 21652, "values": [{ "dictionary_value_id": 971214931, "value": "Медь" }] }, // Материал проводника
                { "id": 6468, "values": [{ "value": "2" }] }, // Длина в м
                { "id": 22270, "values": [{ "dictionary_value_id": 971417785, "value": "Фабричное производство" }] }, // Выпуск товара
                { "id": 4382, "values": [{ "value": "2005" }] }, // Размеры, мм
                { "id": 4383, "values": [{ "value": "1" }] }, // Вес товара, г
                { "id": 8962, "values": [{ "value": "1" }] }, // Единиц в одном товаре
                { "id": 4384, "values": [{ "value": "Кабель сертифицированный, запечатанный" }] }, // Комплектация
                { "id": 11650, "values": [{ "value": "1" }] }, // Количество заводских упаковок
                { "id": 6036, "values": [{ "value": "5" }] } // Срок службы
            ]
        }
    ]
});

export const deleteStarlink_gen2_45 = (offer_id) => ({
    "items": [
        {
            "offer_id": offer_id,
            "name": "Интернет кабель 45м для спутника V2(Gen2), не активная карточка",
            "description_category_id": 17028634,
            "type_id": 115012246,
            "price": "12550",
            "old_price": "14000",
            "vat": "0",
            "currency_code": "RUB",
            "barcode": "OZN", // Команда на генерацию штрихкода
            "weight": 120,
            "weight_unit": "g",
            "depth": 251,
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
                { "id": 9048, "values": [{ "value": "delete" }] }, // Название модели
                { "id": 10096, "values": [{ "dictionary_value_id": 61571, "value": "белый" }] },
                { "id": 22390, "values": [{ "value": "delete2" }] }, // Длина кабеля
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
});
