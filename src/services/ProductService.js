import axios from 'axios';

export const getProductList = async (dataLimit, search) => {
    const page = dataLimit[0];
    const limit = dataLimit[1] - dataLimit[0];

    const url = `http://stageapi.monkcommerce.app/task/products/search?search=${search}&page=${page}&limit=${limit}`;

    try {
        const response = await axios.get(url, {
            mode: 'no-cors',
            headers: {
                'x-api-key': '72njgfa948d9aS7gs5',
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


const data = [
    {
        "id": 6542539653327,
        "title": "broken fire",
        "handle": "broken-fire",
        "created_at": "2021-03-07T05:33:51Z",
        "updated_at": "2022-10-04T17:50:18Z",
        "options": [
            {
                "id": 8412910125263,
                "product_id": 6542539653327,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "image": {},
        "admin_graphql_api_id": "gid://shopify/Product/6542539653327",
        "status": "active",
        "variants": [
            {
                "id": 39272894464207,
                "product_id": 6542539653327,
                "title": "Default Title",
                "inventory_policy": "deny",
                "price": "90",
                "inventory_management": "shopify",
                "option1": "Default Title",
                "created_at": "2021-03-07T05:33:52Z",
                "updated_at": "2022-10-04T17:50:18Z",
                "inventory_quantity": 1126,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39272894464207"
            }
        ]
    },
    {
        "id": 6805246771407,
        "title": "Copy of broken fire",
        "handle": "copy-of-broken-fire",
        "created_at": "2021-08-15T18:07:36Z",
        "updated_at": "2021-11-07T10:33:15Z",
        "options": [
            {
                "id": 8720138797263,
                "product_id": 6805246771407,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "image": {},
        "admin_graphql_api_id": "gid://shopify/Product/6805246771407",
        "status": "active",
        "variants": [
            {
                "id": 40499618152655,
                "product_id": 6805246771407,
                "title": "Default Title",
                "inventory_policy": "deny",
                "price": "10",
                "inventory_management": "shopify",
                "option1": "Default Title",
                "created_at": "2021-08-15T18:07:36Z",
                "updated_at": "2021-08-15T18:07:36Z",
                "inventory_quantity": 14,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499618152655"
            }
        ]
    },
    {
        "id": 7080137982159,
        "title": "Copy of Flip Flops - Blue",
        "handle": "copy-of-flip-flops-blue",
        "created_at": "2022-08-13T14:06:49Z",
        "updated_at": "2023-01-03T23:06:03Z",
        "options": [
            {
                "id": 9062315622607,
                "product_id": 7080137982159,
                "name": "Size",
                "position": 1,
                "values": [
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12"
                ]
            },
            {
                "id": 9062315655375,
                "product_id": 7080137982159,
                "name": "Color",
                "position": 2,
                "values": [
                    "Blue"
                ]
            }
        ],
        "image": {},
        "admin_graphql_api_id": "gid://shopify/Product/7080137982159",
        "status": "draft",
        "variants": [
            {
                "id": 41980037988559,
                "product_id": 7080137982159,
                "title": "7 / Blue",
                "inventory_policy": "deny",
                "price": "8",
                "compare_at_price": "100",
                "inventory_management": "shopify",
                "option1": "7",
                "option2": "Blue",
                "created_at": "2022-08-13T14:06:49Z",
                "updated_at": "2023-01-03T23:06:01Z",
                "inventory_quantity": 10,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41980037988559"
            },
            {
                "id": 41980038021327,
                "product_id": 7080137982159,
                "title": "8 / Blue",
                "inventory_policy": "deny",
                "price": "8",
                "compare_at_price": "100",
                "inventory_management": "shopify",
                "option1": "8",
                "option2": "Blue",
                "created_at": "2022-08-13T14:06:49Z",
                "updated_at": "2023-01-03T23:06:02Z",
                "inventory_quantity": 1,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41980038021327"
            },
            {
                "id": 41980038054095,
                "product_id": 7080137982159,
                "title": "9 / Blue",
                "inventory_policy": "deny",
                "price": "8",
                "compare_at_price": "100",
                "inventory_management": "shopify",
                "option1": "9",
                "option2": "Blue",
                "created_at": "2022-08-13T14:06:49Z",
                "updated_at": "2023-01-03T23:06:03Z",
                "inventory_quantity": 1,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41980038054095"
            },
            {
                "id": 41980038086863,
                "product_id": 7080137982159,
                "title": "10 / Blue",
                "inventory_policy": "deny",
                "price": "8",
                "compare_at_price": "100",
                "inventory_management": "shopify",
                "option1": "10",
                "option2": "Blue",
                "created_at": "2022-08-13T14:06:49Z",
                "updated_at": "2023-01-03T23:06:01Z",
                "inventory_quantity": 1,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41980038086863"
            },
            {
                "id": 41980038119631,
                "product_id": 7080137982159,
                "title": "11 / Blue",
                "inventory_policy": "deny",
                "price": "8",
                "compare_at_price": "100",
                "inventory_management": "shopify",
                "option1": "11",
                "option2": "Blue",
                "created_at": "2022-08-13T14:06:49Z",
                "updated_at": "2023-01-03T23:06:03Z",
                "inventory_quantity": 1,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41980038119631"
            },
            {
                "id": 41980038152399,
                "product_id": 7080137982159,
                "title": "12 / Blue",
                "inventory_policy": "deny",
                "price": "8",
                "compare_at_price": "100",
                "inventory_management": "shopify",
                "option1": "12",
                "option2": "Blue",
                "created_at": "2022-08-13T14:06:49Z",
                "updated_at": "2023-01-03T23:06:03Z",
                "inventory_quantity": 1,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41980038152399"
            }
        ]
    },
    {
        "id": 6542539522255,
        "title": "dawn field",
        "handle": "dawn-field",
        "created_at": "2021-03-07T05:33:46Z",
        "updated_at": "2023-01-16T23:10:03Z",
        "options": [
            {
                "id": 8412909994191,
                "product_id": 6542539522255,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "image": {},
        "admin_graphql_api_id": "gid://shopify/Product/6542539522255",
        "status": "active",
        "variants": [
            {
                "id": 39272894333135,
                "product_id": 6542539522255,
                "title": "Default Title",
                "inventory_policy": "deny",
                "price": "2",
                "option1": "Default Title",
                "created_at": "2021-03-07T05:33:46Z",
                "updated_at": "2023-01-16T23:05:56Z",
                "inventory_quantity": -16,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39272894333135"
            }
        ]
    },
    {
        "id": 6805248770255,
        "title": "Example Hat 1",
        "handle": "1",
        "created_at": "2021-08-15T18:20:04Z",
        "updated_at": "2023-01-17T12:11:27Z",
        "options": [
            {
                "id": 8720141779151,
                "product_id": 6805248770255,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377096974543,
            "product_id": 6805248770255,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie.jpg?v=1629051604"
        },
        "images": [
            {
                "id": 29377096974543,
                "product_id": 6805248770255,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie.jpg?v=1629051604"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805248770255",
        "status": "draft",
        "variants": [
            {
                "id": 40499643351247,
                "product_id": 6805248770255,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:20:04Z",
                "updated_at": "2023-01-04T17:56:40Z",
                "inventory_quantity": -76,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499643351247"
            }
        ]
    },
    {
        "id": 6805249130703,
        "title": "Example Hat 10",
        "handle": "10",
        "created_at": "2021-08-15T18:20:42Z",
        "updated_at": "2022-11-30T23:35:11Z",
        "options": [
            {
                "id": 8720142205135,
                "product_id": 6805249130703,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377098547407,
            "product_id": 6805249130703,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_cfeb91dd-a183-4ff5-9f6d-4ff512f51132.jpg?v=1629051642"
        },
        "images": [
            {
                "id": 29377098547407,
                "product_id": 6805249130703,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_cfeb91dd-a183-4ff5-9f6d-4ff512f51132.jpg?v=1629051642"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249130703",
        "status": "active",
        "variants": [
            {
                "id": 40499644629199,
                "product_id": 6805249130703,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.45",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:20:42Z",
                "updated_at": "2022-11-30T23:30:51Z",
                "inventory_quantity": -38,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499644629199"
            }
        ]
    },
    {
        "id": 6805253062863,
        "title": "Example Hat 101",
        "handle": "101",
        "created_at": "2021-08-15T18:27:32Z",
        "updated_at": "2022-07-18T02:00:07Z",
        "options": [
            {
                "id": 8720146694351,
                "product_id": 6805253062863,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377120305359,
            "product_id": 6805253062863,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6e73c2e5-885d-43cb-9fae-2fb9670cfa66.jpg?v=1629052052"
        },
        "images": [
            {
                "id": 29377120305359,
                "product_id": 6805253062863,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6e73c2e5-885d-43cb-9fae-2fb9670cfa66.jpg?v=1629052052"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805253062863",
        "status": "active",
        "variants": [
            {
                "id": 40499657113807,
                "product_id": 6805253062863,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:27:32Z",
                "updated_at": "2022-07-18T01:58:40Z",
                "inventory_quantity": -1,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499657113807"
            }
        ]
    },
    {
        "id": 6805253095631,
        "title": "Example Hat 102",
        "handle": "102",
        "created_at": "2021-08-15T18:27:36Z",
        "updated_at": "2021-11-07T10:33:26Z",
        "options": [
            {
                "id": 8720146727119,
                "product_id": 6805253095631,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377120436431,
            "product_id": 6805253095631,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_157b20fd-defe-4b3e-a91a-597d51444ab9.jpg?v=1629052056"
        },
        "images": [
            {
                "id": 29377120436431,
                "product_id": 6805253095631,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_157b20fd-defe-4b3e-a91a-597d51444ab9.jpg?v=1629052056"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805253095631",
        "status": "active",
        "variants": [
            {
                "id": 40499657146575,
                "product_id": 6805253095631,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:27:36Z",
                "updated_at": "2021-10-12T11:47:40Z",
                "inventory_quantity": -1,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499657146575"
            }
        ]
    },
    {
        "id": 6805253193935,
        "title": "Example Hat 103",
        "handle": "103",
        "created_at": "2021-08-15T18:27:40Z",
        "updated_at": "2021-11-07T10:33:26Z",
        "options": [
            {
                "id": 8720146858191,
                "product_id": 6805253193935,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377120501967,
            "product_id": 6805253193935,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fe69295e-2905-4fd8-890b-bc6ba2b6aad8.jpg?v=1629052060"
        },
        "images": [
            {
                "id": 29377120501967,
                "product_id": 6805253193935,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fe69295e-2905-4fd8-890b-bc6ba2b6aad8.jpg?v=1629052060"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805253193935",
        "status": "active",
        "variants": [
            {
                "id": 40499657310415,
                "product_id": 6805253193935,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:27:40Z",
                "updated_at": "2021-08-15T18:27:40Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499657310415"
            }
        ]
    },
    {
        "id": 6805253259471,
        "title": "Example Hat 104",
        "handle": "104",
        "created_at": "2021-08-15T18:27:45Z",
        "updated_at": "2022-09-20T09:49:20Z",
        "options": [
            {
                "id": 8720146956495,
                "product_id": 6805253259471,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377120895183,
            "product_id": 6805253259471,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d1fd8786-ffa0-4052-9dba-006e93baffb9.jpg?v=1629052065"
        },
        "images": [
            {
                "id": 29377120895183,
                "product_id": 6805253259471,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d1fd8786-ffa0-4052-9dba-006e93baffb9.jpg?v=1629052065"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805253259471",
        "status": "active",
        "variants": [
            {
                "id": 40499657474255,
                "product_id": 6805253259471,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:27:45Z",
                "updated_at": "2021-08-15T18:27:45Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499657474255"
            }
        ]
    },
    {
        "id": 6805253292239,
        "title": "Example Hat 105",
        "handle": "105",
        "created_at": "2021-08-15T18:27:53Z",
        "updated_at": "2021-11-07T10:33:26Z",
        "options": [
            {
                "id": 8720146989263,
                "product_id": 6805253292239,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377120927951,
            "product_id": 6805253292239,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f083e51d-e107-4621-b26a-17f4aa1dde10.jpg?v=1629052073"
        },
        "images": [
            {
                "id": 29377120927951,
                "product_id": 6805253292239,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f083e51d-e107-4621-b26a-17f4aa1dde10.jpg?v=1629052073"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805253292239",
        "status": "active",
        "variants": [
            {
                "id": 40499657507023,
                "product_id": 6805253292239,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:27:53Z",
                "updated_at": "2021-08-15T18:27:53Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499657507023"
            }
        ]
    },
    {
        "id": 6805253325007,
        "title": "Example Hat 106",
        "handle": "106",
        "created_at": "2021-08-15T18:27:57Z",
        "updated_at": "2021-11-07T10:33:27Z",
        "options": [
            {
                "id": 8720147022031,
                "product_id": 6805253325007,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377120960719,
            "product_id": 6805253325007,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_224ea0a8-d583-4160-b315-3e3812ca122e.jpg?v=1629052078"
        },
        "images": [
            {
                "id": 29377120960719,
                "product_id": 6805253325007,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_224ea0a8-d583-4160-b315-3e3812ca122e.jpg?v=1629052078"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805253325007",
        "status": "active",
        "variants": [
            {
                "id": 40499657539791,
                "product_id": 6805253325007,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:27:58Z",
                "updated_at": "2021-08-15T18:27:58Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499657539791"
            }
        ]
    },
    {
        "id": 6805253390543,
        "title": "Example Hat 107",
        "handle": "107",
        "created_at": "2021-08-15T18:28:02Z",
        "updated_at": "2021-11-07T10:33:27Z",
        "options": [
            {
                "id": 8720147087567,
                "product_id": 6805253390543,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377121157327,
            "product_id": 6805253390543,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_547b307b-0b30-47a0-815c-7800b629f819.jpg?v=1629052082"
        },
        "images": [
            {
                "id": 29377121157327,
                "product_id": 6805253390543,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_547b307b-0b30-47a0-815c-7800b629f819.jpg?v=1629052082"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805253390543",
        "status": "active",
        "variants": [
            {
                "id": 40499657605327,
                "product_id": 6805253390543,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:28:02Z",
                "updated_at": "2021-08-15T18:28:02Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499657605327"
            }
        ]
    },
    {
        "id": 6805253456079,
        "title": "Example Hat 108",
        "handle": "108",
        "created_at": "2021-08-15T18:28:06Z",
        "updated_at": "2021-11-07T10:33:27Z",
        "options": [
            {
                "id": 8720147153103,
                "product_id": 6805253456079,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377121353935,
            "product_id": 6805253456079,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_62b8cf98-1150-4f6c-a02e-e54833531782.jpg?v=1629052086"
        },
        "images": [
            {
                "id": 29377121353935,
                "product_id": 6805253456079,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_62b8cf98-1150-4f6c-a02e-e54833531782.jpg?v=1629052086"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805253456079",
        "status": "active",
        "variants": [
            {
                "id": 40499657670863,
                "product_id": 6805253456079,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:28:06Z",
                "updated_at": "2021-08-15T18:28:06Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499657670863"
            }
        ]
    },
    {
        "id": 6805253750991,
        "title": "Example Hat 109",
        "handle": "109",
        "created_at": "2021-08-15T18:28:11Z",
        "updated_at": "2021-11-07T10:33:27Z",
        "options": [
            {
                "id": 8720147448015,
                "product_id": 6805253750991,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377121419471,
            "product_id": 6805253750991,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1790616b-44b9-48fc-992e-9cabc8b8d9d4.jpg?v=1629052091"
        },
        "images": [
            {
                "id": 29377121419471,
                "product_id": 6805253750991,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1790616b-44b9-48fc-992e-9cabc8b8d9d4.jpg?v=1629052091"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805253750991",
        "status": "active",
        "variants": [
            {
                "id": 40499657933007,
                "product_id": 6805253750991,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:28:11Z",
                "updated_at": "2021-08-15T18:28:11Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499657933007"
            }
        ]
    },
    {
        "id": 6805249163471,
        "title": "Example Hat 11",
        "handle": "11",
        "created_at": "2021-08-15T18:20:46Z",
        "updated_at": "2021-11-07T10:33:17Z",
        "options": [
            {
                "id": 8720142237903,
                "product_id": 6805249163471,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377098678479,
            "product_id": 6805249163471,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a81fdb3b-4d73-41fb-ba53-9a1cbeee86fc.jpg?v=1629051646"
        },
        "images": [
            {
                "id": 29377098678479,
                "product_id": 6805249163471,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a81fdb3b-4d73-41fb-ba53-9a1cbeee86fc.jpg?v=1629051646"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249163471",
        "status": "active",
        "variants": [
            {
                "id": 40499644661967,
                "product_id": 6805249163471,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:20:46Z",
                "updated_at": "2021-08-15T18:20:46Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499644661967"
            }
        ]
    },
    {
        "id": 6805253783759,
        "title": "Example Hat 110",
        "handle": "110",
        "created_at": "2021-08-15T18:28:15Z",
        "updated_at": "2021-12-01T10:40:11Z",
        "options": [
            {
                "id": 8720147480783,
                "product_id": 6805253783759,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377121452239,
            "product_id": 6805253783759,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d09a31a5-05c0-49c5-9572-026975058370.jpg?v=1629052095"
        },
        "images": [
            {
                "id": 29377121452239,
                "product_id": 6805253783759,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d09a31a5-05c0-49c5-9572-026975058370.jpg?v=1629052095"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805253783759",
        "status": "active",
        "variants": [
            {
                "id": 40499657965775,
                "product_id": 6805253783759,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:28:16Z",
                "updated_at": "2021-12-01T10:40:02Z",
                "inventory_quantity": -1,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499657965775"
            }
        ]
    },
    {
        "id": 6805253816527,
        "title": "Example Hat 111",
        "handle": "111",
        "created_at": "2021-08-15T18:28:20Z",
        "updated_at": "2021-11-07T10:33:27Z",
        "options": [
            {
                "id": 8720147513551,
                "product_id": 6805253816527,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377121485007,
            "product_id": 6805253816527,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e6dda6c8-b470-4f8d-8c33-0962b0f117e1.jpg?v=1629052100"
        },
        "images": [
            {
                "id": 29377121485007,
                "product_id": 6805253816527,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e6dda6c8-b470-4f8d-8c33-0962b0f117e1.jpg?v=1629052100"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805253816527",
        "status": "active",
        "variants": [
            {
                "id": 40499657998543,
                "product_id": 6805253816527,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:28:20Z",
                "updated_at": "2021-08-15T18:28:20Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499657998543"
            }
        ]
    },
    {
        "id": 6805253882063,
        "title": "Example Hat 112",
        "handle": "112",
        "created_at": "2021-08-15T18:28:24Z",
        "updated_at": "2021-11-07T10:33:27Z",
        "options": [
            {
                "id": 8720147611855,
                "product_id": 6805253882063,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377121517775,
            "product_id": 6805253882063,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a6e5bfb8-390c-4e4e-9dc1-3f1da1924435.jpg?v=1629052104"
        },
        "images": [
            {
                "id": 29377121517775,
                "product_id": 6805253882063,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a6e5bfb8-390c-4e4e-9dc1-3f1da1924435.jpg?v=1629052104"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805253882063",
        "status": "active",
        "variants": [
            {
                "id": 40499660652751,
                "product_id": 6805253882063,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:28:24Z",
                "updated_at": "2021-08-15T18:28:24Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499660652751"
            }
        ]
    },
    {
        "id": 6805253980367,
        "title": "Example Hat 113",
        "handle": "113",
        "created_at": "2021-08-15T18:28:29Z",
        "updated_at": "2021-11-07T10:33:27Z",
        "options": [
            {
                "id": 8720147710159,
                "product_id": 6805253980367,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377121583311,
            "product_id": 6805253980367,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6c692ec0-c19a-4f43-a91e-10aa1ff3806c.jpg?v=1629052109"
        },
        "images": [
            {
                "id": 29377121583311,
                "product_id": 6805253980367,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6c692ec0-c19a-4f43-a91e-10aa1ff3806c.jpg?v=1629052109"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805253980367",
        "status": "active",
        "variants": [
            {
                "id": 40499660816591,
                "product_id": 6805253980367,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:28:29Z",
                "updated_at": "2021-08-15T18:28:29Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499660816591"
            }
        ]
    },
    {
        "id": 6805254013135,
        "title": "Example Hat 114",
        "handle": "114",
        "created_at": "2021-08-15T18:28:33Z",
        "updated_at": "2021-11-07T10:33:27Z",
        "options": [
            {
                "id": 8720147742927,
                "product_id": 6805254013135,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377121910991,
            "product_id": 6805254013135,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d8363606-b1fe-4518-9cd5-edf3c6735e94.jpg?v=1629052114"
        },
        "images": [
            {
                "id": 29377121910991,
                "product_id": 6805254013135,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d8363606-b1fe-4518-9cd5-edf3c6735e94.jpg?v=1629052114"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254013135",
        "status": "active",
        "variants": [
            {
                "id": 40499660882127,
                "product_id": 6805254013135,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:28:34Z",
                "updated_at": "2021-08-15T18:28:34Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499660882127"
            }
        ]
    },
    {
        "id": 6805254078671,
        "title": "Example Hat 115",
        "handle": "115",
        "created_at": "2021-08-15T18:28:38Z",
        "updated_at": "2021-11-07T10:33:27Z",
        "options": [
            {
                "id": 8720147808463,
                "product_id": 6805254078671,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377122238671,
            "product_id": 6805254078671,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e3912832-a419-4465-94f8-1852ef0df292.jpg?v=1629052118"
        },
        "images": [
            {
                "id": 29377122238671,
                "product_id": 6805254078671,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e3912832-a419-4465-94f8-1852ef0df292.jpg?v=1629052118"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254078671",
        "status": "active",
        "variants": [
            {
                "id": 40499660947663,
                "product_id": 6805254078671,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:28:38Z",
                "updated_at": "2021-08-15T18:28:38Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499660947663"
            }
        ]
    },
    {
        "id": 6805254111439,
        "title": "Example Hat 116",
        "handle": "116",
        "created_at": "2021-08-15T18:28:42Z",
        "updated_at": "2021-11-07T10:33:28Z",
        "options": [
            {
                "id": 8720147841231,
                "product_id": 6805254111439,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377122369743,
            "product_id": 6805254111439,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_cc70c9a0-17f3-4ff1-84cc-935637682773.jpg?v=1629052122"
        },
        "images": [
            {
                "id": 29377122369743,
                "product_id": 6805254111439,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_cc70c9a0-17f3-4ff1-84cc-935637682773.jpg?v=1629052122"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254111439",
        "status": "active",
        "variants": [
            {
                "id": 40499660980431,
                "product_id": 6805254111439,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:28:43Z",
                "updated_at": "2021-08-15T18:28:43Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499660980431"
            }
        ]
    },
    {
        "id": 6805254209743,
        "title": "Example Hat 117",
        "handle": "117",
        "created_at": "2021-08-15T18:28:47Z",
        "updated_at": "2021-11-07T10:33:28Z",
        "options": [
            {
                "id": 8720147939535,
                "product_id": 6805254209743,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377122599119,
            "product_id": 6805254209743,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5827fc3b-fce6-4e75-b9fd-03975f56de1b.jpg?v=1629052127"
        },
        "images": [
            {
                "id": 29377122599119,
                "product_id": 6805254209743,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5827fc3b-fce6-4e75-b9fd-03975f56de1b.jpg?v=1629052127"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254209743",
        "status": "active",
        "variants": [
            {
                "id": 40499661078735,
                "product_id": 6805254209743,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:28:47Z",
                "updated_at": "2021-08-15T18:28:47Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499661078735"
            }
        ]
    },
    {
        "id": 6805254275279,
        "title": "Example Hat 118",
        "handle": "118",
        "created_at": "2021-08-15T18:28:51Z",
        "updated_at": "2021-11-07T10:33:28Z",
        "options": [
            {
                "id": 8720148005071,
                "product_id": 6805254275279,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377122664655,
            "product_id": 6805254275279,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_de3356ae-cd92-4f1f-b230-577bf3150bd0.jpg?v=1629052131"
        },
        "images": [
            {
                "id": 29377122664655,
                "product_id": 6805254275279,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_de3356ae-cd92-4f1f-b230-577bf3150bd0.jpg?v=1629052131"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254275279",
        "status": "active",
        "variants": [
            {
                "id": 40499661111503,
                "product_id": 6805254275279,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:28:51Z",
                "updated_at": "2021-08-15T18:28:51Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499661111503"
            }
        ]
    },
    {
        "id": 6805254308047,
        "title": "Example Hat 119",
        "handle": "119",
        "created_at": "2021-08-15T18:28:55Z",
        "updated_at": "2021-11-07T10:33:28Z",
        "options": [
            {
                "id": 8720148037839,
                "product_id": 6805254308047,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377122730191,
            "product_id": 6805254308047,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_0e9b555c-5679-4a36-b3f0-5a02f97b1fa9.jpg?v=1629052135"
        },
        "images": [
            {
                "id": 29377122730191,
                "product_id": 6805254308047,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_0e9b555c-5679-4a36-b3f0-5a02f97b1fa9.jpg?v=1629052135"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254308047",
        "status": "active",
        "variants": [
            {
                "id": 40499661144271,
                "product_id": 6805254308047,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:28:55Z",
                "updated_at": "2021-08-15T18:28:55Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499661144271"
            }
        ]
    },
    {
        "id": 6805249196239,
        "title": "Example Hat 12",
        "handle": "12",
        "created_at": "2021-08-15T18:20:50Z",
        "updated_at": "2021-11-07T10:33:17Z",
        "options": [
            {
                "id": 8720142270671,
                "product_id": 6805249196239,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377098875087,
            "product_id": 6805249196239,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_817990c5-b954-4254-8554-8fefbf8656ce.jpg?v=1629051650"
        },
        "images": [
            {
                "id": 29377098875087,
                "product_id": 6805249196239,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_817990c5-b954-4254-8554-8fefbf8656ce.jpg?v=1629051650"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249196239",
        "status": "active",
        "variants": [
            {
                "id": 40499644694735,
                "product_id": 6805249196239,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:20:50Z",
                "updated_at": "2021-08-15T18:20:50Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499644694735"
            }
        ]
    },
    {
        "id": 6805254373583,
        "title": "Example Hat 120",
        "handle": "120",
        "created_at": "2021-08-15T18:29:00Z",
        "updated_at": "2021-11-07T10:33:28Z",
        "options": [
            {
                "id": 8720148136143,
                "product_id": 6805254373583,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377122762959,
            "product_id": 6805254373583,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9f41a5b4-43a7-42d5-b86b-130c6152ceec.jpg?v=1629052140"
        },
        "images": [
            {
                "id": 29377122762959,
                "product_id": 6805254373583,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9f41a5b4-43a7-42d5-b86b-130c6152ceec.jpg?v=1629052140"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254373583",
        "status": "active",
        "variants": [
            {
                "id": 40499661570255,
                "product_id": 6805254373583,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:29:00Z",
                "updated_at": "2021-08-15T18:29:00Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499661570255"
            }
        ]
    },
    {
        "id": 6805254406351,
        "title": "Example Hat 121",
        "handle": "121",
        "created_at": "2021-08-15T18:29:04Z",
        "updated_at": "2021-11-07T10:33:28Z",
        "options": [
            {
                "id": 8720148168911,
                "product_id": 6805254406351,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377122795727,
            "product_id": 6805254406351,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_60e67b4e-41c9-4e11-bba0-686a646468e3.jpg?v=1629052144"
        },
        "images": [
            {
                "id": 29377122795727,
                "product_id": 6805254406351,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_60e67b4e-41c9-4e11-bba0-686a646468e3.jpg?v=1629052144"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254406351",
        "status": "active",
        "variants": [
            {
                "id": 40499661996239,
                "product_id": 6805254406351,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:29:04Z",
                "updated_at": "2021-08-15T18:29:04Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499661996239"
            }
        ]
    },
    {
        "id": 6805254471887,
        "title": "Example Hat 122",
        "handle": "122",
        "created_at": "2021-08-15T18:29:09Z",
        "updated_at": "2021-11-07T10:33:28Z",
        "options": [
            {
                "id": 8720148234447,
                "product_id": 6805254471887,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377122959567,
            "product_id": 6805254471887,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c0d670e5-f448-4207-aa1e-2977c0798b68.jpg?v=1629052149"
        },
        "images": [
            {
                "id": 29377122959567,
                "product_id": 6805254471887,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c0d670e5-f448-4207-aa1e-2977c0798b68.jpg?v=1629052149"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254471887",
        "status": "active",
        "variants": [
            {
                "id": 40499662061775,
                "product_id": 6805254471887,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:29:09Z",
                "updated_at": "2021-08-15T18:29:09Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499662061775"
            }
        ]
    },
    {
        "id": 6805254504655,
        "title": "Example Hat 123",
        "handle": "123",
        "created_at": "2021-08-15T18:29:14Z",
        "updated_at": "2021-11-07T10:33:28Z",
        "options": [
            {
                "id": 8720148267215,
                "product_id": 6805254504655,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377123057871,
            "product_id": 6805254504655,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4272f2bd-4410-4b5b-9421-8587a708415e.jpg?v=1629052154"
        },
        "images": [
            {
                "id": 29377123057871,
                "product_id": 6805254504655,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4272f2bd-4410-4b5b-9421-8587a708415e.jpg?v=1629052154"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254504655",
        "status": "active",
        "variants": [
            {
                "id": 40499662094543,
                "product_id": 6805254504655,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:29:14Z",
                "updated_at": "2021-08-15T18:29:14Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499662094543"
            }
        ]
    },
    {
        "id": 6805254570191,
        "title": "Example Hat 124",
        "handle": "124",
        "created_at": "2021-08-15T18:29:18Z",
        "updated_at": "2021-11-07T10:33:28Z",
        "options": [
            {
                "id": 8720148365519,
                "product_id": 6805254570191,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377123090639,
            "product_id": 6805254570191,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b20221de-4227-4167-ab45-4d4cb59683e6.jpg?v=1629052158"
        },
        "images": [
            {
                "id": 29377123090639,
                "product_id": 6805254570191,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b20221de-4227-4167-ab45-4d4cb59683e6.jpg?v=1629052158"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254570191",
        "status": "active",
        "variants": [
            {
                "id": 40499662291151,
                "product_id": 6805254570191,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:29:18Z",
                "updated_at": "2021-08-15T18:29:18Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499662291151"
            }
        ]
    },
    {
        "id": 6805254635727,
        "title": "Example Hat 125",
        "handle": "125",
        "created_at": "2021-08-15T18:29:23Z",
        "updated_at": "2021-11-07T10:33:28Z",
        "options": [
            {
                "id": 8720148431055,
                "product_id": 6805254635727,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377123156175,
            "product_id": 6805254635727,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9e5c1377-7169-4273-a1fb-da9c56ee8135.jpg?v=1629052163"
        },
        "images": [
            {
                "id": 29377123156175,
                "product_id": 6805254635727,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9e5c1377-7169-4273-a1fb-da9c56ee8135.jpg?v=1629052163"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254635727",
        "status": "active",
        "variants": [
            {
                "id": 40499662389455,
                "product_id": 6805254635727,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:29:23Z",
                "updated_at": "2021-08-15T18:29:23Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499662389455"
            }
        ]
    },
    {
        "id": 6805254668495,
        "title": "Example Hat 126",
        "handle": "126",
        "created_at": "2021-08-15T18:29:28Z",
        "updated_at": "2021-11-07T10:33:29Z",
        "options": [
            {
                "id": 8720148463823,
                "product_id": 6805254668495,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377123418319,
            "product_id": 6805254668495,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c775e55c-c6de-43bd-bda4-07c149f48e2b.jpg?v=1629052168"
        },
        "images": [
            {
                "id": 29377123418319,
                "product_id": 6805254668495,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c775e55c-c6de-43bd-bda4-07c149f48e2b.jpg?v=1629052168"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254668495",
        "status": "active",
        "variants": [
            {
                "id": 40499662422223,
                "product_id": 6805254668495,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:29:28Z",
                "updated_at": "2021-08-15T18:29:28Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499662422223"
            }
        ]
    },
    {
        "id": 6805254734031,
        "title": "Example Hat 127",
        "handle": "127",
        "created_at": "2021-08-15T18:29:33Z",
        "updated_at": "2021-11-07T10:33:29Z",
        "options": [
            {
                "id": 8720148529359,
                "product_id": 6805254734031,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377123451087,
            "product_id": 6805254734031,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3ee05de6-1eb3-44ae-bf66-e47d6f320342.jpg?v=1629052173"
        },
        "images": [
            {
                "id": 29377123451087,
                "product_id": 6805254734031,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3ee05de6-1eb3-44ae-bf66-e47d6f320342.jpg?v=1629052173"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254734031",
        "status": "active",
        "variants": [
            {
                "id": 40499663012047,
                "product_id": 6805254734031,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:29:33Z",
                "updated_at": "2021-08-15T18:29:33Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499663012047"
            }
        ]
    },
    {
        "id": 6805254799567,
        "title": "Example Hat 128",
        "handle": "128",
        "created_at": "2021-08-15T18:29:37Z",
        "updated_at": "2021-11-07T10:33:29Z",
        "options": [
            {
                "id": 8720148594895,
                "product_id": 6805254799567,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377123745999,
            "product_id": 6805254799567,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_cf848439-0723-4626-a9df-6213acf91c5b.jpg?v=1629052177"
        },
        "images": [
            {
                "id": 29377123745999,
                "product_id": 6805254799567,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_cf848439-0723-4626-a9df-6213acf91c5b.jpg?v=1629052177"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254799567",
        "status": "active",
        "variants": [
            {
                "id": 40499663077583,
                "product_id": 6805254799567,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:29:37Z",
                "updated_at": "2021-08-15T18:29:37Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499663077583"
            }
        ]
    },
    {
        "id": 6805254865103,
        "title": "Example Hat 129",
        "handle": "129",
        "created_at": "2021-08-15T18:29:42Z",
        "updated_at": "2021-11-07T10:33:29Z",
        "options": [
            {
                "id": 8720148693199,
                "product_id": 6805254865103,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377124139215,
            "product_id": 6805254865103,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e36d423a-a8f0-4c69-81e1-19ee3ff37748.jpg?v=1629052182"
        },
        "images": [
            {
                "id": 29377124139215,
                "product_id": 6805254865103,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e36d423a-a8f0-4c69-81e1-19ee3ff37748.jpg?v=1629052182"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254865103",
        "status": "active",
        "variants": [
            {
                "id": 40499663634639,
                "product_id": 6805254865103,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:29:42Z",
                "updated_at": "2021-08-15T18:29:42Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499663634639"
            }
        ]
    },
    {
        "id": 6805249229007,
        "title": "Example Hat 13",
        "handle": "13",
        "created_at": "2021-08-15T18:20:55Z",
        "updated_at": "2021-11-07T10:33:17Z",
        "options": [
            {
                "id": 8720142303439,
                "product_id": 6805249229007,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377099006159,
            "product_id": 6805249229007,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_61940033-11cd-4952-b49a-f6496d304714.jpg?v=1629051655"
        },
        "images": [
            {
                "id": 29377099006159,
                "product_id": 6805249229007,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_61940033-11cd-4952-b49a-f6496d304714.jpg?v=1629051655"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249229007",
        "status": "active",
        "variants": [
            {
                "id": 40499644727503,
                "product_id": 6805249229007,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:20:55Z",
                "updated_at": "2021-08-15T18:20:55Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499644727503"
            }
        ]
    },
    {
        "id": 6805254897871,
        "title": "Example Hat 130",
        "handle": "130",
        "created_at": "2021-08-15T18:29:46Z",
        "updated_at": "2021-11-07T10:33:29Z",
        "options": [
            {
                "id": 8720148725967,
                "product_id": 6805254897871,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377124335823,
            "product_id": 6805254897871,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d5ba726e-0378-42bd-894a-c31fbaedb6fc.jpg?v=1629052186"
        },
        "images": [
            {
                "id": 29377124335823,
                "product_id": 6805254897871,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d5ba726e-0378-42bd-894a-c31fbaedb6fc.jpg?v=1629052186"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254897871",
        "status": "active",
        "variants": [
            {
                "id": 40499663667407,
                "product_id": 6805254897871,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:29:46Z",
                "updated_at": "2021-08-15T18:29:46Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499663667407"
            }
        ]
    },
    {
        "id": 6805254963407,
        "title": "Example Hat 131",
        "handle": "131",
        "created_at": "2021-08-15T18:29:51Z",
        "updated_at": "2021-11-07T10:33:29Z",
        "options": [
            {
                "id": 8720148824271,
                "product_id": 6805254963407,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377124434127,
            "product_id": 6805254963407,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ea10bcd0-32ea-4ea3-acad-dd432408b2ee.jpg?v=1629052191"
        },
        "images": [
            {
                "id": 29377124434127,
                "product_id": 6805254963407,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ea10bcd0-32ea-4ea3-acad-dd432408b2ee.jpg?v=1629052191"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805254963407",
        "status": "active",
        "variants": [
            {
                "id": 40499664847055,
                "product_id": 6805254963407,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:29:51Z",
                "updated_at": "2021-08-15T18:29:51Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499664847055"
            }
        ]
    },
    {
        "id": 6805255028943,
        "title": "Example Hat 132",
        "handle": "132",
        "created_at": "2021-08-15T18:29:55Z",
        "updated_at": "2021-11-07T10:33:29Z",
        "options": [
            {
                "id": 8720148889807,
                "product_id": 6805255028943,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377124696271,
            "product_id": 6805255028943,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ffb45610-e23e-424f-8061-c69e9f78e0d6.jpg?v=1629052195"
        },
        "images": [
            {
                "id": 29377124696271,
                "product_id": 6805255028943,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ffb45610-e23e-424f-8061-c69e9f78e0d6.jpg?v=1629052195"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255028943",
        "status": "active",
        "variants": [
            {
                "id": 40499664912591,
                "product_id": 6805255028943,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:29:55Z",
                "updated_at": "2021-08-15T18:29:55Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499664912591"
            }
        ]
    },
    {
        "id": 6805255061711,
        "title": "Example Hat 133",
        "handle": "133",
        "created_at": "2021-08-15T18:29:59Z",
        "updated_at": "2021-11-07T10:33:29Z",
        "options": [
            {
                "id": 8720148922575,
                "product_id": 6805255061711,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377124761807,
            "product_id": 6805255061711,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fe43f358-40e8-4ff8-a054-23120253efaf.jpg?v=1629052199"
        },
        "images": [
            {
                "id": 29377124761807,
                "product_id": 6805255061711,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fe43f358-40e8-4ff8-a054-23120253efaf.jpg?v=1629052199"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255061711",
        "status": "active",
        "variants": [
            {
                "id": 40499664945359,
                "product_id": 6805255061711,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:29:59Z",
                "updated_at": "2021-08-15T18:29:59Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499664945359"
            }
        ]
    },
    {
        "id": 6805255192783,
        "title": "Example Hat 134",
        "handle": "134",
        "created_at": "2021-08-15T18:30:04Z",
        "updated_at": "2021-11-07T10:33:29Z",
        "options": [
            {
                "id": 8720149086415,
                "product_id": 6805255192783,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377124958415,
            "product_id": 6805255192783,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_430d20a7-8819-4fb4-86d4-98db489f39c5.jpg?v=1629052204"
        },
        "images": [
            {
                "id": 29377124958415,
                "product_id": 6805255192783,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_430d20a7-8819-4fb4-86d4-98db489f39c5.jpg?v=1629052204"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255192783",
        "status": "active",
        "variants": [
            {
                "id": 40499665273039,
                "product_id": 6805255192783,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:30:04Z",
                "updated_at": "2021-08-15T18:30:04Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499665273039"
            }
        ]
    },
    {
        "id": 6805255225551,
        "title": "Example Hat 135",
        "handle": "135",
        "created_at": "2021-08-15T18:30:08Z",
        "updated_at": "2021-11-07T10:33:29Z",
        "options": [
            {
                "id": 8720149119183,
                "product_id": 6805255225551,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377125351631,
            "product_id": 6805255225551,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_aeba5e8b-96de-49a6-bbea-ba067244a1e3.jpg?v=1629052208"
        },
        "images": [
            {
                "id": 29377125351631,
                "product_id": 6805255225551,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_aeba5e8b-96de-49a6-bbea-ba067244a1e3.jpg?v=1629052208"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255225551",
        "status": "active",
        "variants": [
            {
                "id": 40499665305807,
                "product_id": 6805255225551,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:30:09Z",
                "updated_at": "2021-08-15T18:30:09Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499665305807"
            }
        ]
    },
    {
        "id": 6805255258319,
        "title": "Example Hat 136",
        "handle": "136",
        "created_at": "2021-08-15T18:30:13Z",
        "updated_at": "2021-11-07T10:33:30Z",
        "options": [
            {
                "id": 8720149151951,
                "product_id": 6805255258319,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377125515471,
            "product_id": 6805255258319,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6cced4a1-944b-46d5-b7d4-d1cb3583e949.jpg?v=1629052213"
        },
        "images": [
            {
                "id": 29377125515471,
                "product_id": 6805255258319,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6cced4a1-944b-46d5-b7d4-d1cb3583e949.jpg?v=1629052213"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255258319",
        "status": "active",
        "variants": [
            {
                "id": 40499665338575,
                "product_id": 6805255258319,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:30:13Z",
                "updated_at": "2021-08-15T18:30:13Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499665338575"
            }
        ]
    },
    {
        "id": 6805255291087,
        "title": "Example Hat 137",
        "handle": "137",
        "created_at": "2021-08-15T18:30:18Z",
        "updated_at": "2021-11-07T10:33:30Z",
        "options": [
            {
                "id": 8720149184719,
                "product_id": 6805255291087,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377125679311,
            "product_id": 6805255291087,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_7a1f79c6-5a2b-4eb0-9bae-1455f197e907.jpg?v=1629052218"
        },
        "images": [
            {
                "id": 29377125679311,
                "product_id": 6805255291087,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_7a1f79c6-5a2b-4eb0-9bae-1455f197e907.jpg?v=1629052218"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255291087",
        "status": "active",
        "variants": [
            {
                "id": 40499665371343,
                "product_id": 6805255291087,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:30:18Z",
                "updated_at": "2021-08-15T18:30:18Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499665371343"
            }
        ]
    },
    {
        "id": 6805255323855,
        "title": "Example Hat 138",
        "handle": "138",
        "created_at": "2021-08-15T18:30:22Z",
        "updated_at": "2021-11-07T10:33:30Z",
        "options": [
            {
                "id": 8720149217487,
                "product_id": 6805255323855,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377125810383,
            "product_id": 6805255323855,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8de02e18-e4ab-46be-821c-652542751f6b.jpg?v=1629052223"
        },
        "images": [
            {
                "id": 29377125810383,
                "product_id": 6805255323855,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8de02e18-e4ab-46be-821c-652542751f6b.jpg?v=1629052223"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255323855",
        "status": "active",
        "variants": [
            {
                "id": 40499665404111,
                "product_id": 6805255323855,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:30:23Z",
                "updated_at": "2021-08-15T18:30:23Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499665404111"
            }
        ]
    },
    {
        "id": 6805255356623,
        "title": "Example Hat 139",
        "handle": "139",
        "created_at": "2021-08-15T18:30:27Z",
        "updated_at": "2021-11-07T10:33:30Z",
        "options": [
            {
                "id": 8720149250255,
                "product_id": 6805255356623,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377125875919,
            "product_id": 6805255356623,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_216a3ee8-6c7a-4f64-8373-3f27e866129d.jpg?v=1629052227"
        },
        "images": [
            {
                "id": 29377125875919,
                "product_id": 6805255356623,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_216a3ee8-6c7a-4f64-8373-3f27e866129d.jpg?v=1629052227"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255356623",
        "status": "active",
        "variants": [
            {
                "id": 40499665436879,
                "product_id": 6805255356623,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:30:27Z",
                "updated_at": "2021-08-15T18:30:27Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499665436879"
            }
        ]
    },
    {
        "id": 6805249261775,
        "title": "Example Hat 14",
        "handle": "14",
        "created_at": "2021-08-15T18:20:59Z",
        "updated_at": "2021-11-07T10:33:17Z",
        "options": [
            {
                "id": 8720142336207,
                "product_id": 6805249261775,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377099169999,
            "product_id": 6805249261775,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8f201f11-726a-4954-9714-ee6ee5b1f3c2.jpg?v=1629051659"
        },
        "images": [
            {
                "id": 29377099169999,
                "product_id": 6805249261775,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8f201f11-726a-4954-9714-ee6ee5b1f3c2.jpg?v=1629051659"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249261775",
        "status": "active",
        "variants": [
            {
                "id": 40499644760271,
                "product_id": 6805249261775,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:20:59Z",
                "updated_at": "2021-08-15T18:20:59Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499644760271"
            }
        ]
    },
    {
        "id": 6805255422159,
        "title": "Example Hat 140",
        "handle": "140",
        "created_at": "2021-08-15T18:30:33Z",
        "updated_at": "2021-11-07T10:33:30Z",
        "options": [
            {
                "id": 8720149348559,
                "product_id": 6805255422159,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377125974223,
            "product_id": 6805255422159,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_761a2738-08b4-44c7-b299-4ee3f412d27e.jpg?v=1629052234"
        },
        "images": [
            {
                "id": 29377125974223,
                "product_id": 6805255422159,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_761a2738-08b4-44c7-b299-4ee3f412d27e.jpg?v=1629052234"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255422159",
        "status": "active",
        "variants": [
            {
                "id": 40499665600719,
                "product_id": 6805255422159,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:30:34Z",
                "updated_at": "2021-08-15T18:30:34Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499665600719"
            }
        ]
    },
    {
        "id": 6805255454927,
        "title": "Example Hat 141",
        "handle": "141",
        "created_at": "2021-08-15T18:30:39Z",
        "updated_at": "2021-11-07T10:33:30Z",
        "options": [
            {
                "id": 8720149381327,
                "product_id": 6805255454927,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377126006991,
            "product_id": 6805255454927,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_97df9a51-8105-47d3-8d34-15e099cdcb1c.jpg?v=1629052239"
        },
        "images": [
            {
                "id": 29377126006991,
                "product_id": 6805255454927,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_97df9a51-8105-47d3-8d34-15e099cdcb1c.jpg?v=1629052239"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255454927",
        "status": "active",
        "variants": [
            {
                "id": 40499665633487,
                "product_id": 6805255454927,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:30:39Z",
                "updated_at": "2021-08-15T18:30:39Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499665633487"
            }
        ]
    },
    {
        "id": 6805255487695,
        "title": "Example Hat 142",
        "handle": "142",
        "created_at": "2021-08-15T18:30:43Z",
        "updated_at": "2021-11-07T10:33:30Z",
        "options": [
            {
                "id": 8720149414095,
                "product_id": 6805255487695,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377126039759,
            "product_id": 6805255487695,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_61e5de70-ca59-4af0-a80d-efd5d80c3076.jpg?v=1629052244"
        },
        "images": [
            {
                "id": 29377126039759,
                "product_id": 6805255487695,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_61e5de70-ca59-4af0-a80d-efd5d80c3076.jpg?v=1629052244"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255487695",
        "status": "active",
        "variants": [
            {
                "id": 40499665666255,
                "product_id": 6805255487695,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:30:44Z",
                "updated_at": "2021-08-15T18:30:44Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499665666255"
            }
        ]
    },
    {
        "id": 6805255553231,
        "title": "Example Hat 143",
        "handle": "143",
        "created_at": "2021-08-15T18:30:48Z",
        "updated_at": "2021-11-07T10:33:30Z",
        "options": [
            {
                "id": 8720149479631,
                "product_id": 6805255553231,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377126072527,
            "product_id": 6805255553231,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_12b01b1b-e03d-4f63-a41c-862507fa148e.jpg?v=1629052248"
        },
        "images": [
            {
                "id": 29377126072527,
                "product_id": 6805255553231,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_12b01b1b-e03d-4f63-a41c-862507fa148e.jpg?v=1629052248"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255553231",
        "status": "active",
        "variants": [
            {
                "id": 40499665731791,
                "product_id": 6805255553231,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:30:48Z",
                "updated_at": "2021-08-15T18:30:48Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499665731791"
            }
        ]
    },
    {
        "id": 6805255618767,
        "title": "Example Hat 144",
        "handle": "144",
        "created_at": "2021-08-15T18:30:52Z",
        "updated_at": "2021-11-07T10:33:30Z",
        "options": [
            {
                "id": 8720149545167,
                "product_id": 6805255618767,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377126170831,
            "product_id": 6805255618767,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ad68a610-e7ff-40cb-9548-e3112e389fbf.jpg?v=1629052253"
        },
        "images": [
            {
                "id": 29377126170831,
                "product_id": 6805255618767,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ad68a610-e7ff-40cb-9548-e3112e389fbf.jpg?v=1629052253"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255618767",
        "status": "active",
        "variants": [
            {
                "id": 40499665797327,
                "product_id": 6805255618767,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:30:53Z",
                "updated_at": "2021-08-15T18:30:53Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499665797327"
            }
        ]
    },
    {
        "id": 6805255717071,
        "title": "Example Hat 145",
        "handle": "145",
        "created_at": "2021-08-15T18:30:57Z",
        "updated_at": "2021-11-07T10:33:31Z",
        "options": [
            {
                "id": 8720149676239,
                "product_id": 6805255717071,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377126334671,
            "product_id": 6805255717071,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_01285966-3c37-49e1-9370-8e68d2d86150.jpg?v=1629052257"
        },
        "images": [
            {
                "id": 29377126334671,
                "product_id": 6805255717071,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_01285966-3c37-49e1-9370-8e68d2d86150.jpg?v=1629052257"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255717071",
        "status": "active",
        "variants": [
            {
                "id": 40499666059471,
                "product_id": 6805255717071,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:30:57Z",
                "updated_at": "2021-08-15T18:30:57Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499666059471"
            }
        ]
    },
    {
        "id": 6805255782607,
        "title": "Example Hat 146",
        "handle": "146",
        "created_at": "2021-08-15T18:31:01Z",
        "updated_at": "2021-11-07T10:33:31Z",
        "options": [
            {
                "id": 8720149774543,
                "product_id": 6805255782607,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377126629583,
            "product_id": 6805255782607,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c0a5fbb4-66d4-4fac-80ae-b10024eb1b26.jpg?v=1629052262"
        },
        "images": [
            {
                "id": 29377126629583,
                "product_id": 6805255782607,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c0a5fbb4-66d4-4fac-80ae-b10024eb1b26.jpg?v=1629052262"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255782607",
        "status": "active",
        "variants": [
            {
                "id": 40499666190543,
                "product_id": 6805255782607,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:31:02Z",
                "updated_at": "2021-08-15T18:31:02Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499666190543"
            }
        ]
    },
    {
        "id": 6805255815375,
        "title": "Example Hat 147",
        "handle": "147",
        "created_at": "2021-08-15T18:31:06Z",
        "updated_at": "2021-11-07T10:33:31Z",
        "options": [
            {
                "id": 8720149807311,
                "product_id": 6805255815375,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377126662351,
            "product_id": 6805255815375,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_befe71bf-5571-4840-b8e2-98487da50dfe.jpg?v=1629052266"
        },
        "images": [
            {
                "id": 29377126662351,
                "product_id": 6805255815375,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_befe71bf-5571-4840-b8e2-98487da50dfe.jpg?v=1629052266"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255815375",
        "status": "active",
        "variants": [
            {
                "id": 40499666223311,
                "product_id": 6805255815375,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:31:06Z",
                "updated_at": "2021-08-15T18:31:06Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499666223311"
            }
        ]
    },
    {
        "id": 6805255848143,
        "title": "Example Hat 148",
        "handle": "148",
        "created_at": "2021-08-15T18:31:11Z",
        "updated_at": "2021-11-07T10:33:31Z",
        "options": [
            {
                "id": 8720149840079,
                "product_id": 6805255848143,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377126695119,
            "product_id": 6805255848143,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_62a4b020-102c-4777-8053-12a7f4c01a83.jpg?v=1629052271"
        },
        "images": [
            {
                "id": 29377126695119,
                "product_id": 6805255848143,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_62a4b020-102c-4777-8053-12a7f4c01a83.jpg?v=1629052271"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255848143",
        "status": "active",
        "variants": [
            {
                "id": 40499666256079,
                "product_id": 6805255848143,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:31:11Z",
                "updated_at": "2021-08-15T18:31:11Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499666256079"
            }
        ]
    },
    {
        "id": 6805255880911,
        "title": "Example Hat 149",
        "handle": "149",
        "created_at": "2021-08-15T18:31:15Z",
        "updated_at": "2021-11-07T10:33:31Z",
        "options": [
            {
                "id": 8720149872847,
                "product_id": 6805255880911,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377126727887,
            "product_id": 6805255880911,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9ea8d90e-3ab8-4162-b0b6-c15e67048f26.jpg?v=1629052275"
        },
        "images": [
            {
                "id": 29377126727887,
                "product_id": 6805255880911,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9ea8d90e-3ab8-4162-b0b6-c15e67048f26.jpg?v=1629052275"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255880911",
        "status": "active",
        "variants": [
            {
                "id": 40499666288847,
                "product_id": 6805255880911,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:31:15Z",
                "updated_at": "2021-08-15T18:31:15Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499666288847"
            }
        ]
    },
    {
        "id": 6805249327311,
        "title": "Example Hat 15",
        "handle": "15",
        "created_at": "2021-08-15T18:21:03Z",
        "updated_at": "2021-11-07T10:33:17Z",
        "options": [
            {
                "id": 8720142401743,
                "product_id": 6805249327311,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377099366607,
            "product_id": 6805249327311,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fd5caa82-3ab8-458f-961a-fac3de88d98a.jpg?v=1629051664"
        },
        "images": [
            {
                "id": 29377099366607,
                "product_id": 6805249327311,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fd5caa82-3ab8-458f-961a-fac3de88d98a.jpg?v=1629051664"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249327311",
        "status": "active",
        "variants": [
            {
                "id": 40499645055183,
                "product_id": 6805249327311,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:21:04Z",
                "updated_at": "2021-08-15T18:21:04Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499645055183"
            }
        ]
    },
    {
        "id": 6805255979215,
        "title": "Example Hat 150",
        "handle": "150",
        "created_at": "2021-08-15T18:31:20Z",
        "updated_at": "2021-11-07T10:33:31Z",
        "options": [
            {
                "id": 8720150003919,
                "product_id": 6805255979215,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377127022799,
            "product_id": 6805255979215,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5c7a72f8-9152-4877-b6a5-4db0e9d9cc91.jpg?v=1629052280"
        },
        "images": [
            {
                "id": 29377127022799,
                "product_id": 6805255979215,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5c7a72f8-9152-4877-b6a5-4db0e9d9cc91.jpg?v=1629052280"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805255979215",
        "status": "active",
        "variants": [
            {
                "id": 40499666682063,
                "product_id": 6805255979215,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:31:20Z",
                "updated_at": "2021-08-15T18:31:20Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499666682063"
            }
        ]
    },
    {
        "id": 6805256044751,
        "title": "Example Hat 151",
        "handle": "151",
        "created_at": "2021-08-15T18:31:24Z",
        "updated_at": "2021-11-07T10:33:31Z",
        "options": [
            {
                "id": 8720150069455,
                "product_id": 6805256044751,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377127186639,
            "product_id": 6805256044751,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5587dcc3-f64e-4001-87d3-43f408407221.jpg?v=1629052284"
        },
        "images": [
            {
                "id": 29377127186639,
                "product_id": 6805256044751,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5587dcc3-f64e-4001-87d3-43f408407221.jpg?v=1629052284"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256044751",
        "status": "active",
        "variants": [
            {
                "id": 40499666747599,
                "product_id": 6805256044751,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:31:24Z",
                "updated_at": "2021-08-15T18:31:24Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499666747599"
            }
        ]
    },
    {
        "id": 6805256110287,
        "title": "Example Hat 152",
        "handle": "152",
        "created_at": "2021-08-15T18:31:28Z",
        "updated_at": "2021-11-07T10:33:31Z",
        "options": [
            {
                "id": 8720150167759,
                "product_id": 6805256110287,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377127219407,
            "product_id": 6805256110287,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f7e98337-d7da-45d2-91d4-080b4a86f939.jpg?v=1629052289"
        },
        "images": [
            {
                "id": 29377127219407,
                "product_id": 6805256110287,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f7e98337-d7da-45d2-91d4-080b4a86f939.jpg?v=1629052289"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256110287",
        "status": "active",
        "variants": [
            {
                "id": 40499667075279,
                "product_id": 6805256110287,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:31:29Z",
                "updated_at": "2021-08-15T18:31:29Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499667075279"
            }
        ]
    },
    {
        "id": 6805256208591,
        "title": "Example Hat 153",
        "handle": "153",
        "created_at": "2021-08-15T18:31:33Z",
        "updated_at": "2021-11-07T10:33:31Z",
        "options": [
            {
                "id": 8720150331599,
                "product_id": 6805256208591,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377127383247,
            "product_id": 6805256208591,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_21b97139-93a9-4d86-8e47-494f1b90237d.jpg?v=1629052293"
        },
        "images": [
            {
                "id": 29377127383247,
                "product_id": 6805256208591,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_21b97139-93a9-4d86-8e47-494f1b90237d.jpg?v=1629052293"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256208591",
        "status": "active",
        "variants": [
            {
                "id": 40499667730639,
                "product_id": 6805256208591,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:31:33Z",
                "updated_at": "2021-08-15T18:31:33Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499667730639"
            }
        ]
    },
    {
        "id": 6805256241359,
        "title": "Example Hat 154",
        "handle": "154",
        "created_at": "2021-08-15T18:31:37Z",
        "updated_at": "2021-11-07T10:33:31Z",
        "options": [
            {
                "id": 8720150364367,
                "product_id": 6805256241359,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377127547087,
            "product_id": 6805256241359,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c9e4ce77-d002-4a52-87c6-f9838e9d0d1a.jpg?v=1629052298"
        },
        "images": [
            {
                "id": 29377127547087,
                "product_id": 6805256241359,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c9e4ce77-d002-4a52-87c6-f9838e9d0d1a.jpg?v=1629052298"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256241359",
        "status": "active",
        "variants": [
            {
                "id": 40499667763407,
                "product_id": 6805256241359,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:31:38Z",
                "updated_at": "2021-08-15T18:31:38Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499667763407"
            }
        ]
    },
    {
        "id": 6805256274127,
        "title": "Example Hat 155",
        "handle": "155",
        "created_at": "2021-08-15T18:31:42Z",
        "updated_at": "2021-11-07T10:33:32Z",
        "options": [
            {
                "id": 8720150397135,
                "product_id": 6805256274127,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377127710927,
            "product_id": 6805256274127,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_95f2e486-5b5d-4323-83a1-ba76fc2ffb0c.jpg?v=1629052302"
        },
        "images": [
            {
                "id": 29377127710927,
                "product_id": 6805256274127,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_95f2e486-5b5d-4323-83a1-ba76fc2ffb0c.jpg?v=1629052302"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256274127",
        "status": "active",
        "variants": [
            {
                "id": 40499667796175,
                "product_id": 6805256274127,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:31:42Z",
                "updated_at": "2021-08-15T18:31:42Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499667796175"
            }
        ]
    },
    {
        "id": 6805256306895,
        "title": "Example Hat 156",
        "handle": "156",
        "created_at": "2021-08-15T18:31:46Z",
        "updated_at": "2021-11-07T10:33:32Z",
        "options": [
            {
                "id": 8720150429903,
                "product_id": 6805256306895,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377127743695,
            "product_id": 6805256306895,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_14f39ada-de1a-41de-ab38-fee485a389ba.jpg?v=1629052306"
        },
        "images": [
            {
                "id": 29377127743695,
                "product_id": 6805256306895,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_14f39ada-de1a-41de-ab38-fee485a389ba.jpg?v=1629052306"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256306895",
        "status": "active",
        "variants": [
            {
                "id": 40499667828943,
                "product_id": 6805256306895,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:31:46Z",
                "updated_at": "2021-08-15T18:31:46Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499667828943"
            }
        ]
    },
    {
        "id": 6805256339663,
        "title": "Example Hat 157",
        "handle": "157",
        "created_at": "2021-08-15T18:31:50Z",
        "updated_at": "2021-11-07T10:33:32Z",
        "options": [
            {
                "id": 8720150462671,
                "product_id": 6805256339663,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377127776463,
            "product_id": 6805256339663,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_875deee9-53f7-4578-8ca7-73f1ab17caba.jpg?v=1629052310"
        },
        "images": [
            {
                "id": 29377127776463,
                "product_id": 6805256339663,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_875deee9-53f7-4578-8ca7-73f1ab17caba.jpg?v=1629052310"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256339663",
        "status": "active",
        "variants": [
            {
                "id": 40499667861711,
                "product_id": 6805256339663,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:31:50Z",
                "updated_at": "2021-08-15T18:31:50Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499667861711"
            }
        ]
    },
    {
        "id": 6805256372431,
        "title": "Example Hat 158",
        "handle": "158",
        "created_at": "2021-08-15T18:31:54Z",
        "updated_at": "2021-11-07T10:33:32Z",
        "options": [
            {
                "id": 8720150495439,
                "product_id": 6805256372431,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377127841999,
            "product_id": 6805256372431,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_266b7f44-87fa-483e-9e5d-44b0cac96cf8.jpg?v=1629052315"
        },
        "images": [
            {
                "id": 29377127841999,
                "product_id": 6805256372431,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_266b7f44-87fa-483e-9e5d-44b0cac96cf8.jpg?v=1629052315"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256372431",
        "status": "active",
        "variants": [
            {
                "id": 40499667894479,
                "product_id": 6805256372431,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:31:55Z",
                "updated_at": "2021-08-15T18:31:55Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499667894479"
            }
        ]
    },
    {
        "id": 6805256437967,
        "title": "Example Hat 159",
        "handle": "159",
        "created_at": "2021-08-15T18:31:59Z",
        "updated_at": "2021-11-07T10:33:32Z",
        "options": [
            {
                "id": 8720150593743,
                "product_id": 6805256437967,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377127940303,
            "product_id": 6805256437967,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_14309e56-4775-42b0-a14a-b2a4ef4d7833.jpg?v=1629052319"
        },
        "images": [
            {
                "id": 29377127940303,
                "product_id": 6805256437967,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_14309e56-4775-42b0-a14a-b2a4ef4d7833.jpg?v=1629052319"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256437967",
        "status": "active",
        "variants": [
            {
                "id": 40499668058319,
                "product_id": 6805256437967,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:31:59Z",
                "updated_at": "2021-08-15T18:31:59Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499668058319"
            }
        ]
    },
    {
        "id": 6805249392847,
        "title": "Example Hat 16",
        "handle": "16",
        "created_at": "2021-08-15T18:21:08Z",
        "updated_at": "2021-11-07T10:33:17Z",
        "options": [
            {
                "id": 8720142500047,
                "product_id": 6805249392847,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377099563215,
            "product_id": 6805249392847,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_882f937c-3402-4f82-bcc7-734df6dbe9ba.jpg?v=1629051668"
        },
        "images": [
            {
                "id": 29377099563215,
                "product_id": 6805249392847,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_882f937c-3402-4f82-bcc7-734df6dbe9ba.jpg?v=1629051668"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249392847",
        "status": "active",
        "variants": [
            {
                "id": 40499645677775,
                "product_id": 6805249392847,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:21:08Z",
                "updated_at": "2021-08-15T18:21:08Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499645677775"
            }
        ]
    },
    {
        "id": 6805256503503,
        "title": "Example Hat 160",
        "handle": "160",
        "created_at": "2021-08-15T18:32:03Z",
        "updated_at": "2021-11-07T10:33:32Z",
        "options": [
            {
                "id": 8720150659279,
                "product_id": 6805256503503,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377127973071,
            "product_id": 6805256503503,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3a064a12-ac4e-4aa0-abb1-b1c110465f46.jpg?v=1629052323"
        },
        "images": [
            {
                "id": 29377127973071,
                "product_id": 6805256503503,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3a064a12-ac4e-4aa0-abb1-b1c110465f46.jpg?v=1629052323"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256503503",
        "status": "active",
        "variants": [
            {
                "id": 40499668156623,
                "product_id": 6805256503503,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:32:03Z",
                "updated_at": "2021-08-15T18:32:03Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499668156623"
            }
        ]
    },
    {
        "id": 6805256536271,
        "title": "Example Hat 161",
        "handle": "161",
        "created_at": "2021-08-15T18:32:09Z",
        "updated_at": "2021-11-07T10:33:32Z",
        "options": [
            {
                "id": 8720150692047,
                "product_id": 6805256536271,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377128136911,
            "product_id": 6805256536271,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c333a54f-e784-4262-aba9-1551736c0732.jpg?v=1629052329"
        },
        "images": [
            {
                "id": 29377128136911,
                "product_id": 6805256536271,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c333a54f-e784-4262-aba9-1551736c0732.jpg?v=1629052329"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256536271",
        "status": "active",
        "variants": [
            {
                "id": 40499668189391,
                "product_id": 6805256536271,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:32:09Z",
                "updated_at": "2021-08-15T18:32:09Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499668189391"
            }
        ]
    },
    {
        "id": 6805256601807,
        "title": "Example Hat 162",
        "handle": "162",
        "created_at": "2021-08-15T18:32:13Z",
        "updated_at": "2021-11-07T10:33:32Z",
        "options": [
            {
                "id": 8720150790351,
                "product_id": 6805256601807,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377128628431,
            "product_id": 6805256601807,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_aaa955ea-87fa-42d2-8a80-012c589ca357.jpg?v=1629052334"
        },
        "images": [
            {
                "id": 29377128628431,
                "product_id": 6805256601807,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_aaa955ea-87fa-42d2-8a80-012c589ca357.jpg?v=1629052334"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256601807",
        "status": "active",
        "variants": [
            {
                "id": 40499668320463,
                "product_id": 6805256601807,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:32:14Z",
                "updated_at": "2021-08-15T18:32:14Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499668320463"
            }
        ]
    },
    {
        "id": 6805256667343,
        "title": "Example Hat 163",
        "handle": "163",
        "created_at": "2021-08-15T18:32:18Z",
        "updated_at": "2021-11-07T10:33:32Z",
        "options": [
            {
                "id": 8720150888655,
                "product_id": 6805256667343,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377128759503,
            "product_id": 6805256667343,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_2bcec39a-404a-4b07-a915-2a5b73441fd9.jpg?v=1629052338"
        },
        "images": [
            {
                "id": 29377128759503,
                "product_id": 6805256667343,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_2bcec39a-404a-4b07-a915-2a5b73441fd9.jpg?v=1629052338"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256667343",
        "status": "active",
        "variants": [
            {
                "id": 40499668451535,
                "product_id": 6805256667343,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:32:18Z",
                "updated_at": "2021-08-15T18:32:18Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499668451535"
            }
        ]
    },
    {
        "id": 6805256863951,
        "title": "Example Hat 164",
        "handle": "164",
        "created_at": "2021-08-15T18:32:30Z",
        "updated_at": "2021-11-07T10:33:32Z",
        "options": [
            {
                "id": 8720151183567,
                "product_id": 6805256863951,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377129316559,
            "product_id": 6805256863951,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3208f7a3-225b-408d-9a92-9f19029413ab.jpg?v=1629052350"
        },
        "images": [
            {
                "id": 29377129316559,
                "product_id": 6805256863951,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3208f7a3-225b-408d-9a92-9f19029413ab.jpg?v=1629052350"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256863951",
        "status": "active",
        "variants": [
            {
                "id": 40499669565647,
                "product_id": 6805256863951,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:32:30Z",
                "updated_at": "2021-08-15T18:32:30Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499669565647"
            }
        ]
    },
    {
        "id": 6805256896719,
        "title": "Example Hat 165",
        "handle": "165",
        "created_at": "2021-08-15T18:32:35Z",
        "updated_at": "2021-11-07T10:33:32Z",
        "options": [
            {
                "id": 8720151216335,
                "product_id": 6805256896719,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377129480399,
            "product_id": 6805256896719,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fd5a0afd-9e36-4d94-962e-be561f918155.jpg?v=1629052355"
        },
        "images": [
            {
                "id": 29377129480399,
                "product_id": 6805256896719,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fd5a0afd-9e36-4d94-962e-be561f918155.jpg?v=1629052355"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256896719",
        "status": "active",
        "variants": [
            {
                "id": 40499669598415,
                "product_id": 6805256896719,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:32:35Z",
                "updated_at": "2021-08-15T18:32:35Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499669598415"
            }
        ]
    },
    {
        "id": 6805256929487,
        "title": "Example Hat 166",
        "handle": "166",
        "created_at": "2021-08-15T18:32:39Z",
        "updated_at": "2021-11-07T10:33:33Z",
        "options": [
            {
                "id": 8720151249103,
                "product_id": 6805256929487,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377129611471,
            "product_id": 6805256929487,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_bbaec25d-6b8b-44bc-9dcd-9daf2c8db3f0.jpg?v=1629052359"
        },
        "images": [
            {
                "id": 29377129611471,
                "product_id": 6805256929487,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_bbaec25d-6b8b-44bc-9dcd-9daf2c8db3f0.jpg?v=1629052359"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256929487",
        "status": "active",
        "variants": [
            {
                "id": 40499669631183,
                "product_id": 6805256929487,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:32:39Z",
                "updated_at": "2021-08-15T18:32:39Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499669631183"
            }
        ]
    },
    {
        "id": 6805256995023,
        "title": "Example Hat 167",
        "handle": "167",
        "created_at": "2021-08-15T18:32:43Z",
        "updated_at": "2021-11-07T10:33:33Z",
        "options": [
            {
                "id": 8720151314639,
                "product_id": 6805256995023,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377129677007,
            "product_id": 6805256995023,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f9d8aeaa-260e-401a-9e8c-4c5e8cd39470.jpg?v=1629052363"
        },
        "images": [
            {
                "id": 29377129677007,
                "product_id": 6805256995023,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f9d8aeaa-260e-401a-9e8c-4c5e8cd39470.jpg?v=1629052363"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805256995023",
        "status": "active",
        "variants": [
            {
                "id": 40499669696719,
                "product_id": 6805256995023,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:32:44Z",
                "updated_at": "2021-08-15T18:32:44Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499669696719"
            }
        ]
    },
    {
        "id": 6805257027791,
        "title": "Example Hat 168",
        "handle": "168",
        "created_at": "2021-08-15T18:32:48Z",
        "updated_at": "2021-11-07T10:33:33Z",
        "options": [
            {
                "id": 8720151347407,
                "product_id": 6805257027791,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377129906383,
            "product_id": 6805257027791,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6505f179-9ad2-4da2-b0b8-6772cbe14a76.jpg?v=1629052368"
        },
        "images": [
            {
                "id": 29377129906383,
                "product_id": 6805257027791,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6505f179-9ad2-4da2-b0b8-6772cbe14a76.jpg?v=1629052368"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257027791",
        "status": "active",
        "variants": [
            {
                "id": 40499669729487,
                "product_id": 6805257027791,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:32:48Z",
                "updated_at": "2021-08-15T18:32:48Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499669729487"
            }
        ]
    },
    {
        "id": 6805257093327,
        "title": "Example Hat 169",
        "handle": "169",
        "created_at": "2021-08-15T18:32:52Z",
        "updated_at": "2021-11-07T10:33:33Z",
        "options": [
            {
                "id": 8720151445711,
                "product_id": 6805257093327,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377130004687,
            "product_id": 6805257093327,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_7475f254-8031-4af0-92be-d9c1a15d1bba.jpg?v=1629052373"
        },
        "images": [
            {
                "id": 29377130004687,
                "product_id": 6805257093327,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_7475f254-8031-4af0-92be-d9c1a15d1bba.jpg?v=1629052373"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257093327",
        "status": "active",
        "variants": [
            {
                "id": 40499670548687,
                "product_id": 6805257093327,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:32:53Z",
                "updated_at": "2021-08-15T18:32:53Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499670548687"
            }
        ]
    },
    {
        "id": 6805249425615,
        "title": "Example Hat 17",
        "handle": "17",
        "created_at": "2021-08-15T18:21:12Z",
        "updated_at": "2021-11-07T10:33:17Z",
        "options": [
            {
                "id": 8720142532815,
                "product_id": 6805249425615,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377099694287,
            "product_id": 6805249425615,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ce42e3de-a3a9-436f-9292-f465572cbced.jpg?v=1629051673"
        },
        "images": [
            {
                "id": 29377099694287,
                "product_id": 6805249425615,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ce42e3de-a3a9-436f-9292-f465572cbced.jpg?v=1629051673"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249425615",
        "status": "active",
        "variants": [
            {
                "id": 40499646103759,
                "product_id": 6805249425615,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:21:13Z",
                "updated_at": "2021-08-15T18:21:13Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499646103759"
            }
        ]
    },
    {
        "id": 6805257126095,
        "title": "Example Hat 170",
        "handle": "170",
        "created_at": "2021-08-15T18:32:57Z",
        "updated_at": "2021-11-07T10:33:33Z",
        "options": [
            {
                "id": 8720151478479,
                "product_id": 6805257126095,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377130135759,
            "product_id": 6805257126095,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ba92b064-0260-4041-913d-db42f3582ac6.jpg?v=1629052377"
        },
        "images": [
            {
                "id": 29377130135759,
                "product_id": 6805257126095,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ba92b064-0260-4041-913d-db42f3582ac6.jpg?v=1629052377"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257126095",
        "status": "active",
        "variants": [
            {
                "id": 40499670581455,
                "product_id": 6805257126095,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:32:57Z",
                "updated_at": "2021-08-15T18:32:57Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499670581455"
            }
        ]
    },
    {
        "id": 6805257158863,
        "title": "Example Hat 171",
        "handle": "171",
        "created_at": "2021-08-15T18:33:01Z",
        "updated_at": "2021-11-07T10:33:33Z",
        "options": [
            {
                "id": 8720151511247,
                "product_id": 6805257158863,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377130365135,
            "product_id": 6805257158863,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_0d8ed305-cccc-47ce-a1da-3cfa6d2a1e4b.jpg?v=1629052381"
        },
        "images": [
            {
                "id": 29377130365135,
                "product_id": 6805257158863,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_0d8ed305-cccc-47ce-a1da-3cfa6d2a1e4b.jpg?v=1629052381"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257158863",
        "status": "active",
        "variants": [
            {
                "id": 40499670614223,
                "product_id": 6805257158863,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:33:01Z",
                "updated_at": "2021-08-15T18:33:01Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499670614223"
            }
        ]
    },
    {
        "id": 6805257191631,
        "title": "Example Hat 172",
        "handle": "172",
        "created_at": "2021-08-15T18:33:06Z",
        "updated_at": "2021-11-07T10:33:33Z",
        "options": [
            {
                "id": 8720151544015,
                "product_id": 6805257191631,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377130430671,
            "product_id": 6805257191631,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_7b326ef1-59bf-4be0-8c43-90f916a1f62f.jpg?v=1629052386"
        },
        "images": [
            {
                "id": 29377130430671,
                "product_id": 6805257191631,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_7b326ef1-59bf-4be0-8c43-90f916a1f62f.jpg?v=1629052386"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257191631",
        "status": "active",
        "variants": [
            {
                "id": 40499670646991,
                "product_id": 6805257191631,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:33:06Z",
                "updated_at": "2021-08-15T18:33:06Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499670646991"
            }
        ]
    },
    {
        "id": 6805257257167,
        "title": "Example Hat 173",
        "handle": "173",
        "created_at": "2021-08-15T18:33:10Z",
        "updated_at": "2021-11-07T10:33:33Z",
        "options": [
            {
                "id": 8720151609551,
                "product_id": 6805257257167,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377130496207,
            "product_id": 6805257257167,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_60d1903b-19fd-4d14-8ec0-240c72129c74.jpg?v=1629052390"
        },
        "images": [
            {
                "id": 29377130496207,
                "product_id": 6805257257167,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_60d1903b-19fd-4d14-8ec0-240c72129c74.jpg?v=1629052390"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257257167",
        "status": "active",
        "variants": [
            {
                "id": 40499670712527,
                "product_id": 6805257257167,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:33:10Z",
                "updated_at": "2021-08-15T18:33:10Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499670712527"
            }
        ]
    },
    {
        "id": 6805257289935,
        "title": "Example Hat 174",
        "handle": "174",
        "created_at": "2021-08-15T18:33:14Z",
        "updated_at": "2021-11-07T10:33:33Z",
        "options": [
            {
                "id": 8720151642319,
                "product_id": 6805257289935,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377130561743,
            "product_id": 6805257289935,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4afdc5de-c4ad-4c81-80f3-282ab70233f9.jpg?v=1629052394"
        },
        "images": [
            {
                "id": 29377130561743,
                "product_id": 6805257289935,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4afdc5de-c4ad-4c81-80f3-282ab70233f9.jpg?v=1629052394"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257289935",
        "status": "active",
        "variants": [
            {
                "id": 40499670745295,
                "product_id": 6805257289935,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:33:14Z",
                "updated_at": "2021-08-15T18:33:14Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499670745295"
            }
        ]
    },
    {
        "id": 6805257355471,
        "title": "Example Hat 175",
        "handle": "175",
        "created_at": "2021-08-15T18:33:18Z",
        "updated_at": "2021-11-07T10:33:33Z",
        "options": [
            {
                "id": 8720151740623,
                "product_id": 6805257355471,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377130594511,
            "product_id": 6805257355471,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4243a80d-4232-4808-b132-0dfcc26f3d9e.jpg?v=1629052399"
        },
        "images": [
            {
                "id": 29377130594511,
                "product_id": 6805257355471,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4243a80d-4232-4808-b132-0dfcc26f3d9e.jpg?v=1629052399"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257355471",
        "status": "active",
        "variants": [
            {
                "id": 40499671269583,
                "product_id": 6805257355471,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:33:19Z",
                "updated_at": "2021-08-15T18:33:19Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499671269583"
            }
        ]
    },
    {
        "id": 6805257388239,
        "title": "Example Hat 176",
        "handle": "176",
        "created_at": "2021-08-15T18:33:23Z",
        "updated_at": "2021-11-07T10:33:34Z",
        "options": [
            {
                "id": 8720151773391,
                "product_id": 6805257388239,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377130758351,
            "product_id": 6805257388239,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_af022bd6-c110-4b3c-a12e-32b561182f24.jpg?v=1629052403"
        },
        "images": [
            {
                "id": 29377130758351,
                "product_id": 6805257388239,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_af022bd6-c110-4b3c-a12e-32b561182f24.jpg?v=1629052403"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257388239",
        "status": "active",
        "variants": [
            {
                "id": 40499671302351,
                "product_id": 6805257388239,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:33:23Z",
                "updated_at": "2021-08-15T18:33:23Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499671302351"
            }
        ]
    },
    {
        "id": 6805257421007,
        "title": "Example Hat 177",
        "handle": "177",
        "created_at": "2021-08-15T18:33:27Z",
        "updated_at": "2021-11-07T10:33:34Z",
        "options": [
            {
                "id": 8720151806159,
                "product_id": 6805257421007,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377130791119,
            "product_id": 6805257421007,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6ef9077b-baaf-4496-b0e0-b5f87d3a15db.jpg?v=1629052407"
        },
        "images": [
            {
                "id": 29377130791119,
                "product_id": 6805257421007,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6ef9077b-baaf-4496-b0e0-b5f87d3a15db.jpg?v=1629052407"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257421007",
        "status": "active",
        "variants": [
            {
                "id": 40499671335119,
                "product_id": 6805257421007,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:33:28Z",
                "updated_at": "2021-08-15T18:33:28Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499671335119"
            }
        ]
    },
    {
        "id": 6805257453775,
        "title": "Example Hat 178",
        "handle": "178",
        "created_at": "2021-08-15T18:33:32Z",
        "updated_at": "2021-11-07T10:33:34Z",
        "options": [
            {
                "id": 8720151838927,
                "product_id": 6805257453775,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377130823887,
            "product_id": 6805257453775,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_0b46109f-288f-45c0-8440-4472e00f992d.jpg?v=1629052412"
        },
        "images": [
            {
                "id": 29377130823887,
                "product_id": 6805257453775,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_0b46109f-288f-45c0-8440-4472e00f992d.jpg?v=1629052412"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257453775",
        "status": "active",
        "variants": [
            {
                "id": 40499671367887,
                "product_id": 6805257453775,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:33:32Z",
                "updated_at": "2021-08-15T18:33:32Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499671367887"
            }
        ]
    },
    {
        "id": 6805257552079,
        "title": "Example Hat 179",
        "handle": "179",
        "created_at": "2021-08-15T18:33:36Z",
        "updated_at": "2021-11-07T10:33:34Z",
        "options": [
            {
                "id": 8720152002767,
                "product_id": 6805257552079,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377130856655,
            "product_id": 6805257552079,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_11328426-c195-4b01-af0f-2c1e2bbd3484.jpg?v=1629052416"
        },
        "images": [
            {
                "id": 29377130856655,
                "product_id": 6805257552079,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_11328426-c195-4b01-af0f-2c1e2bbd3484.jpg?v=1629052416"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257552079",
        "status": "active",
        "variants": [
            {
                "id": 40499672154319,
                "product_id": 6805257552079,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:33:36Z",
                "updated_at": "2021-08-15T18:33:36Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499672154319"
            }
        ]
    },
    {
        "id": 6805249458383,
        "title": "Example Hat 18",
        "handle": "18",
        "created_at": "2021-08-15T18:21:17Z",
        "updated_at": "2021-11-07T10:33:17Z",
        "options": [
            {
                "id": 8720142565583,
                "product_id": 6805249458383,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377100185807,
            "product_id": 6805249458383,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_efbb410f-e959-4f2f-871c-07dbe239a8da.jpg?v=1629051677"
        },
        "images": [
            {
                "id": 29377100185807,
                "product_id": 6805249458383,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_efbb410f-e959-4f2f-871c-07dbe239a8da.jpg?v=1629051677"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249458383",
        "status": "active",
        "variants": [
            {
                "id": 40499646136527,
                "product_id": 6805249458383,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:21:17Z",
                "updated_at": "2021-08-15T18:21:17Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499646136527"
            }
        ]
    },
    {
        "id": 6805257584847,
        "title": "Example Hat 180",
        "handle": "180",
        "created_at": "2021-08-15T18:33:41Z",
        "updated_at": "2021-11-07T10:33:34Z",
        "options": [
            {
                "id": 8720152035535,
                "product_id": 6805257584847,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377131086031,
            "product_id": 6805257584847,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b232c48f-fcbd-47e1-bd57-977b5c82eb60.jpg?v=1629052421"
        },
        "images": [
            {
                "id": 29377131086031,
                "product_id": 6805257584847,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b232c48f-fcbd-47e1-bd57-977b5c82eb60.jpg?v=1629052421"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257584847",
        "status": "active",
        "variants": [
            {
                "id": 40499672187087,
                "product_id": 6805257584847,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:33:41Z",
                "updated_at": "2021-08-15T18:33:41Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499672187087"
            }
        ]
    },
    {
        "id": 6805257650383,
        "title": "Example Hat 181",
        "handle": "181",
        "created_at": "2021-08-15T18:33:45Z",
        "updated_at": "2021-11-07T10:33:34Z",
        "options": [
            {
                "id": 8720152101071,
                "product_id": 6805257650383,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377131282639,
            "product_id": 6805257650383,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f42bf0dd-e9e4-448d-ae1e-d6f100eb7a0c.jpg?v=1629052425"
        },
        "images": [
            {
                "id": 29377131282639,
                "product_id": 6805257650383,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f42bf0dd-e9e4-448d-ae1e-d6f100eb7a0c.jpg?v=1629052425"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257650383",
        "status": "active",
        "variants": [
            {
                "id": 40499672252623,
                "product_id": 6805257650383,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:33:45Z",
                "updated_at": "2021-08-15T18:33:45Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499672252623"
            }
        ]
    },
    {
        "id": 6805257683151,
        "title": "Example Hat 182",
        "handle": "182",
        "created_at": "2021-08-15T18:33:50Z",
        "updated_at": "2021-11-07T10:33:34Z",
        "options": [
            {
                "id": 8720152133839,
                "product_id": 6805257683151,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377131348175,
            "product_id": 6805257683151,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_90440e26-2336-422b-b229-d7aadb1a3205.jpg?v=1629052430"
        },
        "images": [
            {
                "id": 29377131348175,
                "product_id": 6805257683151,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_90440e26-2336-422b-b229-d7aadb1a3205.jpg?v=1629052430"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257683151",
        "status": "active",
        "variants": [
            {
                "id": 40499672285391,
                "product_id": 6805257683151,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:33:50Z",
                "updated_at": "2021-08-15T18:33:50Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499672285391"
            }
        ]
    },
    {
        "id": 6805257715919,
        "title": "Example Hat 183",
        "handle": "183",
        "created_at": "2021-08-15T18:33:54Z",
        "updated_at": "2021-11-07T10:33:34Z",
        "options": [
            {
                "id": 8720152166607,
                "product_id": 6805257715919,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377131380943,
            "product_id": 6805257715919,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_deb21e8d-2aaa-4624-bc41-4f6d3aed645a.jpg?v=1629052434"
        },
        "images": [
            {
                "id": 29377131380943,
                "product_id": 6805257715919,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_deb21e8d-2aaa-4624-bc41-4f6d3aed645a.jpg?v=1629052434"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257715919",
        "status": "active",
        "variants": [
            {
                "id": 40499672318159,
                "product_id": 6805257715919,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:33:54Z",
                "updated_at": "2021-08-15T18:33:54Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499672318159"
            }
        ]
    },
    {
        "id": 6805257781455,
        "title": "Example Hat 184",
        "handle": "184",
        "created_at": "2021-08-15T18:33:58Z",
        "updated_at": "2021-11-07T10:33:34Z",
        "options": [
            {
                "id": 8720152232143,
                "product_id": 6805257781455,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377131479247,
            "product_id": 6805257781455,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_98087096-06d5-452f-b413-ba83a87e6758.jpg?v=1629052438"
        },
        "images": [
            {
                "id": 29377131479247,
                "product_id": 6805257781455,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_98087096-06d5-452f-b413-ba83a87e6758.jpg?v=1629052438"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257781455",
        "status": "active",
        "variants": [
            {
                "id": 40499672416463,
                "product_id": 6805257781455,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:33:58Z",
                "updated_at": "2021-08-15T18:33:58Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499672416463"
            }
        ]
    },
    {
        "id": 6805257846991,
        "title": "Example Hat 185",
        "handle": "185",
        "created_at": "2021-08-15T18:34:02Z",
        "updated_at": "2021-11-07T10:33:34Z",
        "options": [
            {
                "id": 8720152330447,
                "product_id": 6805257846991,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377131577551,
            "product_id": 6805257846991,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b7022457-8c47-4d36-89d5-99993226670b.jpg?v=1629052443"
        },
        "images": [
            {
                "id": 29377131577551,
                "product_id": 6805257846991,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b7022457-8c47-4d36-89d5-99993226670b.jpg?v=1629052443"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257846991",
        "status": "active",
        "variants": [
            {
                "id": 40499672842447,
                "product_id": 6805257846991,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:34:03Z",
                "updated_at": "2021-08-15T18:34:03Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499672842447"
            }
        ]
    },
    {
        "id": 6805257912527,
        "title": "Example Hat 186",
        "handle": "186",
        "created_at": "2021-08-15T18:34:07Z",
        "updated_at": "2021-11-07T10:33:35Z",
        "options": [
            {
                "id": 8720152395983,
                "product_id": 6805257912527,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377131970767,
            "product_id": 6805257912527,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e80cd13e-98f4-44e5-ba9b-c50ed33f040e.jpg?v=1629052447"
        },
        "images": [
            {
                "id": 29377131970767,
                "product_id": 6805257912527,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e80cd13e-98f4-44e5-ba9b-c50ed33f040e.jpg?v=1629052447"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257912527",
        "status": "active",
        "variants": [
            {
                "id": 40499672973519,
                "product_id": 6805257912527,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:34:07Z",
                "updated_at": "2021-08-15T18:34:07Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499672973519"
            }
        ]
    },
    {
        "id": 6805257945295,
        "title": "Example Hat 187",
        "handle": "187",
        "created_at": "2021-08-15T18:34:12Z",
        "updated_at": "2021-11-07T10:33:35Z",
        "options": [
            {
                "id": 8720152428751,
                "product_id": 6805257945295,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377132003535,
            "product_id": 6805257945295,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_75496c1f-e547-4945-89ac-673b6ae1c175.jpg?v=1629052452"
        },
        "images": [
            {
                "id": 29377132003535,
                "product_id": 6805257945295,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_75496c1f-e547-4945-89ac-673b6ae1c175.jpg?v=1629052452"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257945295",
        "status": "active",
        "variants": [
            {
                "id": 40499673006287,
                "product_id": 6805257945295,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:34:12Z",
                "updated_at": "2021-08-15T18:34:12Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499673006287"
            }
        ]
    },
    {
        "id": 6805257978063,
        "title": "Example Hat 188",
        "handle": "188",
        "created_at": "2021-08-15T18:34:16Z",
        "updated_at": "2021-11-07T10:33:35Z",
        "options": [
            {
                "id": 8720152461519,
                "product_id": 6805257978063,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377132036303,
            "product_id": 6805257978063,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ecccf310-ccfa-451c-aacc-1221f4c14db1.jpg?v=1629052456"
        },
        "images": [
            {
                "id": 29377132036303,
                "product_id": 6805257978063,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ecccf310-ccfa-451c-aacc-1221f4c14db1.jpg?v=1629052456"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805257978063",
        "status": "active",
        "variants": [
            {
                "id": 40499673039055,
                "product_id": 6805257978063,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:34:16Z",
                "updated_at": "2021-08-15T18:34:16Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499673039055"
            }
        ]
    },
    {
        "id": 6805258010831,
        "title": "Example Hat 189",
        "handle": "189",
        "created_at": "2021-08-15T18:34:20Z",
        "updated_at": "2021-11-07T10:33:35Z",
        "options": [
            {
                "id": 8720152494287,
                "product_id": 6805258010831,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377132069071,
            "product_id": 6805258010831,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c17a678a-3cb6-48f6-b40c-064ec7c32082.jpg?v=1629052461"
        },
        "images": [
            {
                "id": 29377132069071,
                "product_id": 6805258010831,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c17a678a-3cb6-48f6-b40c-064ec7c32082.jpg?v=1629052461"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258010831",
        "status": "active",
        "variants": [
            {
                "id": 40499673071823,
                "product_id": 6805258010831,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:34:21Z",
                "updated_at": "2021-08-15T18:34:21Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499673071823"
            }
        ]
    },
    {
        "id": 6805249491151,
        "title": "Example Hat 19",
        "handle": "19",
        "created_at": "2021-08-15T18:21:21Z",
        "updated_at": "2021-11-07T10:33:17Z",
        "options": [
            {
                "id": 8720142598351,
                "product_id": 6805249491151,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377100611791,
            "product_id": 6805249491151,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b1e57fb0-36ce-47d9-a00a-896f08e98fc8.jpg?v=1629051681"
        },
        "images": [
            {
                "id": 29377100611791,
                "product_id": 6805249491151,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b1e57fb0-36ce-47d9-a00a-896f08e98fc8.jpg?v=1629051681"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249491151",
        "status": "active",
        "variants": [
            {
                "id": 40499646169295,
                "product_id": 6805249491151,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:21:22Z",
                "updated_at": "2021-08-15T18:21:22Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499646169295"
            }
        ]
    },
    {
        "id": 6805258076367,
        "title": "Example Hat 190",
        "handle": "190",
        "created_at": "2021-08-15T18:34:25Z",
        "updated_at": "2021-11-07T10:33:35Z",
        "options": [
            {
                "id": 8720152592591,
                "product_id": 6805258076367,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377132101839,
            "product_id": 6805258076367,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_89f4f17e-3e2d-40dd-9e2e-468faf10697a.jpg?v=1629052465"
        },
        "images": [
            {
                "id": 29377132101839,
                "product_id": 6805258076367,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_89f4f17e-3e2d-40dd-9e2e-468faf10697a.jpg?v=1629052465"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258076367",
        "status": "active",
        "variants": [
            {
                "id": 40499673170127,
                "product_id": 6805258076367,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:34:25Z",
                "updated_at": "2021-08-15T18:34:25Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499673170127"
            }
        ]
    },
    {
        "id": 6805258109135,
        "title": "Example Hat 191",
        "handle": "191",
        "created_at": "2021-08-15T18:34:30Z",
        "updated_at": "2021-11-07T10:33:35Z",
        "options": [
            {
                "id": 8720152625359,
                "product_id": 6805258109135,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377132134607,
            "product_id": 6805258109135,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_cf0308d5-9cb8-48b0-909b-df4014115000.jpg?v=1629052470"
        },
        "images": [
            {
                "id": 29377132134607,
                "product_id": 6805258109135,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_cf0308d5-9cb8-48b0-909b-df4014115000.jpg?v=1629052470"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258109135",
        "status": "active",
        "variants": [
            {
                "id": 40499674185935,
                "product_id": 6805258109135,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:34:30Z",
                "updated_at": "2021-08-15T18:34:30Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499674185935"
            }
        ]
    },
    {
        "id": 6805258174671,
        "title": "Example Hat 192",
        "handle": "192",
        "created_at": "2021-08-15T18:34:35Z",
        "updated_at": "2021-11-07T10:33:35Z",
        "options": [
            {
                "id": 8720152690895,
                "product_id": 6805258174671,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377132396751,
            "product_id": 6805258174671,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fb2e8143-905e-443e-a172-6935b42675f0.jpg?v=1629052475"
        },
        "images": [
            {
                "id": 29377132396751,
                "product_id": 6805258174671,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fb2e8143-905e-443e-a172-6935b42675f0.jpg?v=1629052475"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258174671",
        "status": "active",
        "variants": [
            {
                "id": 40499674284239,
                "product_id": 6805258174671,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:34:35Z",
                "updated_at": "2021-08-15T18:34:35Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499674284239"
            }
        ]
    },
    {
        "id": 6805258207439,
        "title": "Example Hat 193",
        "handle": "193",
        "created_at": "2021-08-15T18:34:39Z",
        "updated_at": "2021-11-07T10:33:35Z",
        "options": [
            {
                "id": 8720152723663,
                "product_id": 6805258207439,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377132560591,
            "product_id": 6805258207439,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e90c3761-e8c0-4bcd-b535-fd2cc6768ef0.jpg?v=1629052479"
        },
        "images": [
            {
                "id": 29377132560591,
                "product_id": 6805258207439,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e90c3761-e8c0-4bcd-b535-fd2cc6768ef0.jpg?v=1629052479"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258207439",
        "status": "active",
        "variants": [
            {
                "id": 40499674317007,
                "product_id": 6805258207439,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:34:39Z",
                "updated_at": "2021-08-15T18:34:39Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499674317007"
            }
        ]
    },
    {
        "id": 6805258240207,
        "title": "Example Hat 194",
        "handle": "194",
        "created_at": "2021-08-15T18:34:44Z",
        "updated_at": "2021-11-07T10:33:36Z",
        "options": [
            {
                "id": 8720152756431,
                "product_id": 6805258240207,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377132593359,
            "product_id": 6805258240207,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_30df7bc1-99be-4e0b-9b97-eb102c7dd75f.jpg?v=1629052484"
        },
        "images": [
            {
                "id": 29377132593359,
                "product_id": 6805258240207,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_30df7bc1-99be-4e0b-9b97-eb102c7dd75f.jpg?v=1629052484"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258240207",
        "status": "active",
        "variants": [
            {
                "id": 40499674349775,
                "product_id": 6805258240207,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:34:44Z",
                "updated_at": "2021-08-15T18:34:44Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499674349775"
            }
        ]
    },
    {
        "id": 6805258338511,
        "title": "Example Hat 195",
        "handle": "195",
        "created_at": "2021-08-15T18:34:48Z",
        "updated_at": "2021-11-07T10:33:36Z",
        "options": [
            {
                "id": 8720152887503,
                "product_id": 6805258338511,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377132626127,
            "product_id": 6805258338511,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6fe7998c-7a89-4edc-9da0-0b521218189d.jpg?v=1629052488"
        },
        "images": [
            {
                "id": 29377132626127,
                "product_id": 6805258338511,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6fe7998c-7a89-4edc-9da0-0b521218189d.jpg?v=1629052488"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258338511",
        "status": "active",
        "variants": [
            {
                "id": 40499674677455,
                "product_id": 6805258338511,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:34:48Z",
                "updated_at": "2021-08-15T18:34:48Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499674677455"
            }
        ]
    },
    {
        "id": 6805258371279,
        "title": "Example Hat 196",
        "handle": "196",
        "created_at": "2021-08-15T18:34:52Z",
        "updated_at": "2021-11-07T10:33:36Z",
        "options": [
            {
                "id": 8720152920271,
                "product_id": 6805258371279,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377132757199,
            "product_id": 6805258371279,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1fc7e159-4f15-4baa-bac2-db0b06ea4b24.jpg?v=1629052493"
        },
        "images": [
            {
                "id": 29377132757199,
                "product_id": 6805258371279,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1fc7e159-4f15-4baa-bac2-db0b06ea4b24.jpg?v=1629052493"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258371279",
        "status": "active",
        "variants": [
            {
                "id": 40499674710223,
                "product_id": 6805258371279,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:34:53Z",
                "updated_at": "2021-08-15T18:34:53Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499674710223"
            }
        ]
    },
    {
        "id": 6805258436815,
        "title": "Example Hat 197",
        "handle": "197",
        "created_at": "2021-08-15T18:34:57Z",
        "updated_at": "2021-11-07T10:33:37Z",
        "options": [
            {
                "id": 8720153018575,
                "product_id": 6805258436815,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377132888271,
            "product_id": 6805258436815,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fde569ed-40d4-48c1-8855-b50126d44702.jpg?v=1629052497"
        },
        "images": [
            {
                "id": 29377132888271,
                "product_id": 6805258436815,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fde569ed-40d4-48c1-8855-b50126d44702.jpg?v=1629052497"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258436815",
        "status": "active",
        "variants": [
            {
                "id": 40499675037903,
                "product_id": 6805258436815,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:34:57Z",
                "updated_at": "2021-08-15T18:34:57Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499675037903"
            }
        ]
    },
    {
        "id": 6805258469583,
        "title": "Example Hat 198",
        "handle": "198",
        "created_at": "2021-08-15T18:35:01Z",
        "updated_at": "2021-11-07T10:33:37Z",
        "options": [
            {
                "id": 8720153051343,
                "product_id": 6805258469583,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377132921039,
            "product_id": 6805258469583,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9dc46426-4ca2-4f14-b4a0-fec8445326e0.jpg?v=1629052501"
        },
        "images": [
            {
                "id": 29377132921039,
                "product_id": 6805258469583,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9dc46426-4ca2-4f14-b4a0-fec8445326e0.jpg?v=1629052501"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258469583",
        "status": "active",
        "variants": [
            {
                "id": 40499675070671,
                "product_id": 6805258469583,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:35:01Z",
                "updated_at": "2021-08-15T18:35:01Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499675070671"
            }
        ]
    },
    {
        "id": 6805258502351,
        "title": "Example Hat 199",
        "handle": "199",
        "created_at": "2021-08-15T18:35:06Z",
        "updated_at": "2021-11-07T10:33:37Z",
        "options": [
            {
                "id": 8720153084111,
                "product_id": 6805258502351,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377132953807,
            "product_id": 6805258502351,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4dd0d726-9f9b-4659-92ba-590be6fdd129.jpg?v=1629052506"
        },
        "images": [
            {
                "id": 29377132953807,
                "product_id": 6805258502351,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4dd0d726-9f9b-4659-92ba-590be6fdd129.jpg?v=1629052506"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258502351",
        "status": "active",
        "variants": [
            {
                "id": 40499675103439,
                "product_id": 6805258502351,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:35:06Z",
                "updated_at": "2021-08-15T18:35:06Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499675103439"
            }
        ]
    },
    {
        "id": 6805248803023,
        "title": "Example Hat 2",
        "handle": "2",
        "created_at": "2021-08-15T18:20:06Z",
        "updated_at": "2021-11-07T10:33:16Z",
        "options": [
            {
                "id": 8720141811919,
                "product_id": 6805248803023,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377097040079,
            "product_id": 6805248803023,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e2088a16-5cef-41c2-a131-d7b271f2c8d2.jpg?v=1629051606"
        },
        "images": [
            {
                "id": 29377097040079,
                "product_id": 6805248803023,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e2088a16-5cef-41c2-a131-d7b271f2c8d2.jpg?v=1629051606"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805248803023",
        "status": "active",
        "variants": [
            {
                "id": 40499643384015,
                "product_id": 6805248803023,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:20:06Z",
                "updated_at": "2021-08-15T18:20:06Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499643384015"
            }
        ]
    },
    {
        "id": 6805249523919,
        "title": "Example Hat 20",
        "handle": "20",
        "created_at": "2021-08-15T18:21:26Z",
        "updated_at": "2021-11-07T10:33:18Z",
        "options": [
            {
                "id": 8720142631119,
                "product_id": 6805249523919,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377101136079,
            "product_id": 6805249523919,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d2ab8494-bb3e-4fdc-8834-a983b2ac2211.jpg?v=1629051686"
        },
        "images": [
            {
                "id": 29377101136079,
                "product_id": 6805249523919,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d2ab8494-bb3e-4fdc-8834-a983b2ac2211.jpg?v=1629051686"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249523919",
        "status": "active",
        "variants": [
            {
                "id": 40499646202063,
                "product_id": 6805249523919,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:21:26Z",
                "updated_at": "2021-08-15T18:21:26Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499646202063"
            }
        ]
    },
    {
        "id": 6805258535119,
        "title": "Example Hat 200",
        "handle": "200",
        "created_at": "2021-08-15T18:35:10Z",
        "updated_at": "2021-11-07T10:33:37Z",
        "options": [
            {
                "id": 8720153116879,
                "product_id": 6805258535119,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377132986575,
            "product_id": 6805258535119,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d923cdef-555f-4837-a21a-711846aa4448.jpg?v=1629052510"
        },
        "images": [
            {
                "id": 29377132986575,
                "product_id": 6805258535119,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d923cdef-555f-4837-a21a-711846aa4448.jpg?v=1629052510"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258535119",
        "status": "active",
        "variants": [
            {
                "id": 40499675136207,
                "product_id": 6805258535119,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:35:10Z",
                "updated_at": "2021-08-15T18:35:10Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499675136207"
            }
        ]
    },
    {
        "id": 6805258567887,
        "title": "Example Hat 201",
        "handle": "201",
        "created_at": "2021-08-15T18:35:15Z",
        "updated_at": "2021-11-07T10:33:37Z",
        "options": [
            {
                "id": 8720153149647,
                "product_id": 6805258567887,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377133019343,
            "product_id": 6805258567887,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3c26e6ef-9d98-4bd2-adec-700623bf498a.jpg?v=1629052515"
        },
        "images": [
            {
                "id": 29377133019343,
                "product_id": 6805258567887,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3c26e6ef-9d98-4bd2-adec-700623bf498a.jpg?v=1629052515"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258567887",
        "status": "active",
        "variants": [
            {
                "id": 40499675168975,
                "product_id": 6805258567887,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:35:15Z",
                "updated_at": "2021-08-15T18:35:15Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499675168975"
            }
        ]
    },
    {
        "id": 6805258633423,
        "title": "Example Hat 202",
        "handle": "202",
        "created_at": "2021-08-15T18:35:19Z",
        "updated_at": "2021-11-07T10:33:38Z",
        "options": [
            {
                "id": 8720153215183,
                "product_id": 6805258633423,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377133052111,
            "product_id": 6805258633423,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_cb3109dc-f183-4ee9-ba18-67ec375d64ed.jpg?v=1629052519"
        },
        "images": [
            {
                "id": 29377133052111,
                "product_id": 6805258633423,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_cb3109dc-f183-4ee9-ba18-67ec375d64ed.jpg?v=1629052519"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258633423",
        "status": "active",
        "variants": [
            {
                "id": 40499675529423,
                "product_id": 6805258633423,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:35:19Z",
                "updated_at": "2021-08-15T18:35:19Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499675529423"
            }
        ]
    },
    {
        "id": 6805258666191,
        "title": "Example Hat 203",
        "handle": "203",
        "created_at": "2021-08-15T18:35:23Z",
        "updated_at": "2021-11-07T10:33:38Z",
        "options": [
            {
                "id": 8720153247951,
                "product_id": 6805258666191,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377133347023,
            "product_id": 6805258666191,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fa402596-27bc-4560-9fb6-d22cd1d04924.jpg?v=1629052523"
        },
        "images": [
            {
                "id": 29377133347023,
                "product_id": 6805258666191,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fa402596-27bc-4560-9fb6-d22cd1d04924.jpg?v=1629052523"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258666191",
        "status": "active",
        "variants": [
            {
                "id": 40499675562191,
                "product_id": 6805258666191,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:35:24Z",
                "updated_at": "2021-08-15T18:35:24Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499675562191"
            }
        ]
    },
    {
        "id": 6805258698959,
        "title": "Example Hat 204",
        "handle": "204",
        "created_at": "2021-08-15T18:35:28Z",
        "updated_at": "2021-11-07T10:33:38Z",
        "options": [
            {
                "id": 8720153280719,
                "product_id": 6805258698959,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377133478095,
            "product_id": 6805258698959,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_90ba630d-3bfa-48bf-a0d4-b7541e3457af.jpg?v=1629052528"
        },
        "images": [
            {
                "id": 29377133478095,
                "product_id": 6805258698959,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_90ba630d-3bfa-48bf-a0d4-b7541e3457af.jpg?v=1629052528"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258698959",
        "status": "active",
        "variants": [
            {
                "id": 40499675594959,
                "product_id": 6805258698959,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:35:28Z",
                "updated_at": "2021-08-15T18:35:28Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499675594959"
            }
        ]
    },
    {
        "id": 6805258764495,
        "title": "Example Hat 205",
        "handle": "205",
        "created_at": "2021-08-15T18:35:32Z",
        "updated_at": "2021-11-07T10:33:39Z",
        "options": [
            {
                "id": 8720153346255,
                "product_id": 6805258764495,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377133510863,
            "product_id": 6805258764495,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_72b2cfc7-1091-47b3-9911-b01ce8cb9f3f.jpg?v=1629052532"
        },
        "images": [
            {
                "id": 29377133510863,
                "product_id": 6805258764495,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_72b2cfc7-1091-47b3-9911-b01ce8cb9f3f.jpg?v=1629052532"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258764495",
        "status": "active",
        "variants": [
            {
                "id": 40499675824335,
                "product_id": 6805258764495,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:35:33Z",
                "updated_at": "2021-08-15T18:35:33Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499675824335"
            }
        ]
    },
    {
        "id": 6805258830031,
        "title": "Example Hat 206",
        "handle": "206",
        "created_at": "2021-08-15T18:35:37Z",
        "updated_at": "2021-11-07T10:33:39Z",
        "options": [
            {
                "id": 8720153411791,
                "product_id": 6805258830031,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377133773007,
            "product_id": 6805258830031,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d3ab8e04-578e-41de-a6f9-eaf90a5268ff.jpg?v=1629052537"
        },
        "images": [
            {
                "id": 29377133773007,
                "product_id": 6805258830031,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d3ab8e04-578e-41de-a6f9-eaf90a5268ff.jpg?v=1629052537"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258830031",
        "status": "active",
        "variants": [
            {
                "id": 40499675889871,
                "product_id": 6805258830031,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:35:37Z",
                "updated_at": "2021-08-15T18:35:37Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499675889871"
            }
        ]
    },
    {
        "id": 6805258862799,
        "title": "Example Hat 207",
        "handle": "207",
        "created_at": "2021-08-15T18:35:41Z",
        "updated_at": "2021-11-07T10:33:39Z",
        "options": [
            {
                "id": 8720153444559,
                "product_id": 6805258862799,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377133871311,
            "product_id": 6805258862799,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9f4c512a-0d64-42fb-a506-eec03f7b2a1b.jpg?v=1629052541"
        },
        "images": [
            {
                "id": 29377133871311,
                "product_id": 6805258862799,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9f4c512a-0d64-42fb-a506-eec03f7b2a1b.jpg?v=1629052541"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258862799",
        "status": "active",
        "variants": [
            {
                "id": 40499675922639,
                "product_id": 6805258862799,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:35:41Z",
                "updated_at": "2021-08-15T18:35:41Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499675922639"
            }
        ]
    },
    {
        "id": 6805258895567,
        "title": "Example Hat 208",
        "handle": "208",
        "created_at": "2021-08-15T18:35:46Z",
        "updated_at": "2021-11-07T10:33:40Z",
        "options": [
            {
                "id": 8720153477327,
                "product_id": 6805258895567,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377133904079,
            "product_id": 6805258895567,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5dc0706c-8d85-4e4e-a0e4-bef43f96ea3e.jpg?v=1629052546"
        },
        "images": [
            {
                "id": 29377133904079,
                "product_id": 6805258895567,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5dc0706c-8d85-4e4e-a0e4-bef43f96ea3e.jpg?v=1629052546"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258895567",
        "status": "active",
        "variants": [
            {
                "id": 40499675955407,
                "product_id": 6805258895567,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:35:46Z",
                "updated_at": "2021-08-15T18:35:46Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499675955407"
            }
        ]
    },
    {
        "id": 6805258961103,
        "title": "Example Hat 209",
        "handle": "209",
        "created_at": "2021-08-15T18:35:51Z",
        "updated_at": "2021-11-07T10:33:40Z",
        "options": [
            {
                "id": 8720153542863,
                "product_id": 6805258961103,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377133969615,
            "product_id": 6805258961103,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a4da704a-95f8-447e-a90f-54a6adea0d92.jpg?v=1629052551"
        },
        "images": [
            {
                "id": 29377133969615,
                "product_id": 6805258961103,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a4da704a-95f8-447e-a90f-54a6adea0d92.jpg?v=1629052551"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258961103",
        "status": "active",
        "variants": [
            {
                "id": 40499676020943,
                "product_id": 6805258961103,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:35:51Z",
                "updated_at": "2021-08-15T18:35:51Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676020943"
            }
        ]
    },
    {
        "id": 6805249556687,
        "title": "Example Hat 21",
        "handle": "21",
        "created_at": "2021-08-15T18:21:30Z",
        "updated_at": "2021-11-07T10:33:18Z",
        "options": [
            {
                "id": 8720142663887,
                "product_id": 6805249556687,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377101398223,
            "product_id": 6805249556687,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_dd220121-dde6-4d87-9f7d-bdd131c27310.jpg?v=1629051690"
        },
        "images": [
            {
                "id": 29377101398223,
                "product_id": 6805249556687,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_dd220121-dde6-4d87-9f7d-bdd131c27310.jpg?v=1629051690"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249556687",
        "status": "active",
        "variants": [
            {
                "id": 40499646234831,
                "product_id": 6805249556687,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:21:30Z",
                "updated_at": "2021-08-15T18:21:30Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499646234831"
            }
        ]
    },
    {
        "id": 6805258993871,
        "title": "Example Hat 210",
        "handle": "210",
        "created_at": "2021-08-15T18:35:55Z",
        "updated_at": "2021-11-07T10:33:40Z",
        "options": [
            {
                "id": 8720153575631,
                "product_id": 6805258993871,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377134067919,
            "product_id": 6805258993871,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6aabc1ee-19b9-4618-9c13-fb79c6c2efc5.jpg?v=1629052555"
        },
        "images": [
            {
                "id": 29377134067919,
                "product_id": 6805258993871,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6aabc1ee-19b9-4618-9c13-fb79c6c2efc5.jpg?v=1629052555"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805258993871",
        "status": "active",
        "variants": [
            {
                "id": 40499676053711,
                "product_id": 6805258993871,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:35:55Z",
                "updated_at": "2021-08-15T18:35:55Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676053711"
            }
        ]
    },
    {
        "id": 6805259026639,
        "title": "Example Hat 211",
        "handle": "211",
        "created_at": "2021-08-15T18:35:59Z",
        "updated_at": "2021-11-07T10:33:41Z",
        "options": [
            {
                "id": 8720153608399,
                "product_id": 6805259026639,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377134166223,
            "product_id": 6805259026639,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b8bab5a0-7e85-4a6f-9d67-0a55fc841491.jpg?v=1629052559"
        },
        "images": [
            {
                "id": 29377134166223,
                "product_id": 6805259026639,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b8bab5a0-7e85-4a6f-9d67-0a55fc841491.jpg?v=1629052559"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259026639",
        "status": "active",
        "variants": [
            {
                "id": 40499676086479,
                "product_id": 6805259026639,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:36:00Z",
                "updated_at": "2021-08-15T18:36:00Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676086479"
            }
        ]
    },
    {
        "id": 6805259059407,
        "title": "Example Hat 212",
        "handle": "212",
        "created_at": "2021-08-15T18:36:04Z",
        "updated_at": "2021-11-07T10:33:41Z",
        "options": [
            {
                "id": 8720153641167,
                "product_id": 6805259059407,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377134264527,
            "product_id": 6805259059407,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_56105ff4-6b68-478f-bd6f-32a8d3e4d3de.jpg?v=1629052564"
        },
        "images": [
            {
                "id": 29377134264527,
                "product_id": 6805259059407,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_56105ff4-6b68-478f-bd6f-32a8d3e4d3de.jpg?v=1629052564"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259059407",
        "status": "active",
        "variants": [
            {
                "id": 40499676119247,
                "product_id": 6805259059407,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:36:04Z",
                "updated_at": "2021-08-15T18:36:04Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676119247"
            }
        ]
    },
    {
        "id": 6805259092175,
        "title": "Example Hat 213",
        "handle": "213",
        "created_at": "2021-08-15T18:36:08Z",
        "updated_at": "2021-11-07T10:33:41Z",
        "options": [
            {
                "id": 8720153673935,
                "product_id": 6805259092175,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377134362831,
            "product_id": 6805259092175,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_7986a6f3-a9c8-4fe8-9086-f272132e2dc0.jpg?v=1629052568"
        },
        "images": [
            {
                "id": 29377134362831,
                "product_id": 6805259092175,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_7986a6f3-a9c8-4fe8-9086-f272132e2dc0.jpg?v=1629052568"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259092175",
        "status": "active",
        "variants": [
            {
                "id": 40499676152015,
                "product_id": 6805259092175,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:36:08Z",
                "updated_at": "2021-08-15T18:36:08Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676152015"
            }
        ]
    },
    {
        "id": 6805259124943,
        "title": "Example Hat 214",
        "handle": "214",
        "created_at": "2021-08-15T18:36:13Z",
        "updated_at": "2021-11-07T10:33:41Z",
        "options": [
            {
                "id": 8720153706703,
                "product_id": 6805259124943,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377134526671,
            "product_id": 6805259124943,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_73ea15d4-0af9-41b6-8325-3ea7f9e9bec7.jpg?v=1629052573"
        },
        "images": [
            {
                "id": 29377134526671,
                "product_id": 6805259124943,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_73ea15d4-0af9-41b6-8325-3ea7f9e9bec7.jpg?v=1629052573"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259124943",
        "status": "active",
        "variants": [
            {
                "id": 40499676184783,
                "product_id": 6805259124943,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:36:13Z",
                "updated_at": "2021-08-15T18:36:13Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676184783"
            }
        ]
    },
    {
        "id": 6805259157711,
        "title": "Example Hat 215",
        "handle": "215",
        "created_at": "2021-08-15T18:36:17Z",
        "updated_at": "2021-11-07T10:33:41Z",
        "options": [
            {
                "id": 8720153739471,
                "product_id": 6805259157711,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377134559439,
            "product_id": 6805259157711,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b9813404-fb07-4f92-9d1e-047e7252135e.jpg?v=1629052577"
        },
        "images": [
            {
                "id": 29377134559439,
                "product_id": 6805259157711,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b9813404-fb07-4f92-9d1e-047e7252135e.jpg?v=1629052577"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259157711",
        "status": "active",
        "variants": [
            {
                "id": 40499676217551,
                "product_id": 6805259157711,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:36:18Z",
                "updated_at": "2021-08-15T18:36:18Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676217551"
            }
        ]
    },
    {
        "id": 6805259190479,
        "title": "Example Hat 216",
        "handle": "216",
        "created_at": "2021-08-15T18:36:22Z",
        "updated_at": "2021-11-07T10:33:41Z",
        "options": [
            {
                "id": 8720153772239,
                "product_id": 6805259190479,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377134624975,
            "product_id": 6805259190479,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f3bbc6e6-158d-4695-ae78-7541eeffb6bf.jpg?v=1629052582"
        },
        "images": [
            {
                "id": 29377134624975,
                "product_id": 6805259190479,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f3bbc6e6-158d-4695-ae78-7541eeffb6bf.jpg?v=1629052582"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259190479",
        "status": "active",
        "variants": [
            {
                "id": 40499676250319,
                "product_id": 6805259190479,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:36:22Z",
                "updated_at": "2021-08-15T18:36:22Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676250319"
            }
        ]
    },
    {
        "id": 6805259223247,
        "title": "Example Hat 217",
        "handle": "217",
        "created_at": "2021-08-15T18:36:27Z",
        "updated_at": "2021-11-07T10:33:41Z",
        "options": [
            {
                "id": 8720153805007,
                "product_id": 6805259223247,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377134756047,
            "product_id": 6805259223247,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1cf63c53-e912-4964-912f-1e70a7d1609b.jpg?v=1629052587"
        },
        "images": [
            {
                "id": 29377134756047,
                "product_id": 6805259223247,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1cf63c53-e912-4964-912f-1e70a7d1609b.jpg?v=1629052587"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259223247",
        "status": "active",
        "variants": [
            {
                "id": 40499676283087,
                "product_id": 6805259223247,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:36:27Z",
                "updated_at": "2021-08-15T18:36:27Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676283087"
            }
        ]
    },
    {
        "id": 6805259256015,
        "title": "Example Hat 218",
        "handle": "218",
        "created_at": "2021-08-15T18:36:31Z",
        "updated_at": "2021-11-07T10:33:41Z",
        "options": [
            {
                "id": 8720153837775,
                "product_id": 6805259256015,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377134788815,
            "product_id": 6805259256015,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1d740620-9dc0-4b85-8ca6-94a4f15ff8d7.jpg?v=1629052591"
        },
        "images": [
            {
                "id": 29377134788815,
                "product_id": 6805259256015,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1d740620-9dc0-4b85-8ca6-94a4f15ff8d7.jpg?v=1629052591"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259256015",
        "status": "active",
        "variants": [
            {
                "id": 40499676315855,
                "product_id": 6805259256015,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:36:31Z",
                "updated_at": "2021-08-15T18:36:31Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676315855"
            }
        ]
    },
    {
        "id": 6805259321551,
        "title": "Example Hat 219",
        "handle": "219",
        "created_at": "2021-08-15T18:36:36Z",
        "updated_at": "2021-11-07T10:33:41Z",
        "options": [
            {
                "id": 8720153936079,
                "product_id": 6805259321551,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377134887119,
            "product_id": 6805259321551,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3b40e991-aae9-466e-a8ac-bfcf67a8ca69.jpg?v=1629052596"
        },
        "images": [
            {
                "id": 29377134887119,
                "product_id": 6805259321551,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3b40e991-aae9-466e-a8ac-bfcf67a8ca69.jpg?v=1629052596"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259321551",
        "status": "active",
        "variants": [
            {
                "id": 40499676512463,
                "product_id": 6805259321551,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:36:36Z",
                "updated_at": "2021-08-15T18:36:36Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676512463"
            }
        ]
    },
    {
        "id": 6805249589455,
        "title": "Example Hat 22",
        "handle": "22",
        "created_at": "2021-08-15T18:21:34Z",
        "updated_at": "2021-11-07T10:33:18Z",
        "options": [
            {
                "id": 8720142696655,
                "product_id": 6805249589455,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377101693135,
            "product_id": 6805249589455,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3076b085-d604-40e6-ba8c-2dd9545e0c3e.jpg?v=1629051695"
        },
        "images": [
            {
                "id": 29377101693135,
                "product_id": 6805249589455,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3076b085-d604-40e6-ba8c-2dd9545e0c3e.jpg?v=1629051695"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249589455",
        "status": "active",
        "variants": [
            {
                "id": 40499646267599,
                "product_id": 6805249589455,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:21:35Z",
                "updated_at": "2021-08-15T18:21:35Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499646267599"
            }
        ]
    },
    {
        "id": 6805259354319,
        "title": "Example Hat 220",
        "handle": "220",
        "created_at": "2021-08-15T18:36:40Z",
        "updated_at": "2021-11-07T10:33:41Z",
        "options": [
            {
                "id": 8720153968847,
                "product_id": 6805259354319,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377135050959,
            "product_id": 6805259354319,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_2c47102e-93c0-4a6c-aea8-117667a6cba3.jpg?v=1629052601"
        },
        "images": [
            {
                "id": 29377135050959,
                "product_id": 6805259354319,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_2c47102e-93c0-4a6c-aea8-117667a6cba3.jpg?v=1629052601"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259354319",
        "status": "active",
        "variants": [
            {
                "id": 40499676643535,
                "product_id": 6805259354319,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:36:41Z",
                "updated_at": "2021-08-15T18:36:41Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676643535"
            }
        ]
    },
    {
        "id": 6805259387087,
        "title": "Example Hat 221",
        "handle": "221",
        "created_at": "2021-08-15T18:36:45Z",
        "updated_at": "2021-11-07T10:33:42Z",
        "options": [
            {
                "id": 8720154001615,
                "product_id": 6805259387087,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377135116495,
            "product_id": 6805259387087,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4f98235b-a019-4fc3-9a64-1628d8395c13.jpg?v=1629052605"
        },
        "images": [
            {
                "id": 29377135116495,
                "product_id": 6805259387087,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4f98235b-a019-4fc3-9a64-1628d8395c13.jpg?v=1629052605"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259387087",
        "status": "active",
        "variants": [
            {
                "id": 40499676676303,
                "product_id": 6805259387087,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:36:45Z",
                "updated_at": "2021-08-15T18:36:45Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676676303"
            }
        ]
    },
    {
        "id": 6805259419855,
        "title": "Example Hat 222",
        "handle": "222",
        "created_at": "2021-08-15T18:36:49Z",
        "updated_at": "2021-11-07T10:33:42Z",
        "options": [
            {
                "id": 8720154034383,
                "product_id": 6805259419855,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377135149263,
            "product_id": 6805259419855,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d89bd3bd-699f-474f-9ec1-fe1e2c385a49.jpg?v=1629052609"
        },
        "images": [
            {
                "id": 29377135149263,
                "product_id": 6805259419855,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d89bd3bd-699f-474f-9ec1-fe1e2c385a49.jpg?v=1629052609"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259419855",
        "status": "active",
        "variants": [
            {
                "id": 40499676709071,
                "product_id": 6805259419855,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:36:49Z",
                "updated_at": "2021-08-15T18:36:49Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676709071"
            }
        ]
    },
    {
        "id": 6805259485391,
        "title": "Example Hat 223",
        "handle": "223",
        "created_at": "2021-08-15T18:36:54Z",
        "updated_at": "2021-11-07T10:33:42Z",
        "options": [
            {
                "id": 8720154099919,
                "product_id": 6805259485391,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377135182031,
            "product_id": 6805259485391,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_044d9acd-7a76-4d19-a75d-6c636fade0d5.jpg?v=1629052614"
        },
        "images": [
            {
                "id": 29377135182031,
                "product_id": 6805259485391,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_044d9acd-7a76-4d19-a75d-6c636fade0d5.jpg?v=1629052614"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259485391",
        "status": "active",
        "variants": [
            {
                "id": 40499676774607,
                "product_id": 6805259485391,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:36:54Z",
                "updated_at": "2021-08-15T18:36:54Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676774607"
            }
        ]
    },
    {
        "id": 6805259518159,
        "title": "Example Hat 224",
        "handle": "224",
        "created_at": "2021-08-15T18:36:58Z",
        "updated_at": "2021-11-07T10:33:42Z",
        "options": [
            {
                "id": 8720154132687,
                "product_id": 6805259518159,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377135247567,
            "product_id": 6805259518159,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_de655a76-b473-4cff-87ee-7c4f3ed95561.jpg?v=1629052618"
        },
        "images": [
            {
                "id": 29377135247567,
                "product_id": 6805259518159,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_de655a76-b473-4cff-87ee-7c4f3ed95561.jpg?v=1629052618"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259518159",
        "status": "active",
        "variants": [
            {
                "id": 40499676807375,
                "product_id": 6805259518159,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:36:58Z",
                "updated_at": "2021-08-15T18:36:58Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676807375"
            }
        ]
    },
    {
        "id": 6805259583695,
        "title": "Example Hat 225",
        "handle": "225",
        "created_at": "2021-08-15T18:37:02Z",
        "updated_at": "2021-11-07T10:33:42Z",
        "options": [
            {
                "id": 8720154198223,
                "product_id": 6805259583695,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377135313103,
            "product_id": 6805259583695,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ac297539-2471-441f-91f6-f9ed6fadb1a5.jpg?v=1629052622"
        },
        "images": [
            {
                "id": 29377135313103,
                "product_id": 6805259583695,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ac297539-2471-441f-91f6-f9ed6fadb1a5.jpg?v=1629052622"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259583695",
        "status": "active",
        "variants": [
            {
                "id": 40499676872911,
                "product_id": 6805259583695,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:37:02Z",
                "updated_at": "2021-08-15T18:37:02Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676872911"
            }
        ]
    },
    {
        "id": 6805259616463,
        "title": "Example Hat 226",
        "handle": "226",
        "created_at": "2021-08-15T18:37:08Z",
        "updated_at": "2021-11-07T10:33:42Z",
        "options": [
            {
                "id": 8720154230991,
                "product_id": 6805259616463,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377135345871,
            "product_id": 6805259616463,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_19af0459-eed0-4d28-b8eb-7a5e024012b7.jpg?v=1629052628"
        },
        "images": [
            {
                "id": 29377135345871,
                "product_id": 6805259616463,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_19af0459-eed0-4d28-b8eb-7a5e024012b7.jpg?v=1629052628"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259616463",
        "status": "active",
        "variants": [
            {
                "id": 40499676905679,
                "product_id": 6805259616463,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:37:08Z",
                "updated_at": "2021-08-15T18:37:08Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676905679"
            }
        ]
    },
    {
        "id": 6805259649231,
        "title": "Example Hat 227",
        "handle": "227",
        "created_at": "2021-08-15T18:37:13Z",
        "updated_at": "2021-11-07T10:33:42Z",
        "options": [
            {
                "id": 8720154263759,
                "product_id": 6805259649231,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377135378639,
            "product_id": 6805259649231,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4a6678d2-0115-4c4e-ac36-f5153c9677b8.jpg?v=1629052633"
        },
        "images": [
            {
                "id": 29377135378639,
                "product_id": 6805259649231,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4a6678d2-0115-4c4e-ac36-f5153c9677b8.jpg?v=1629052633"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259649231",
        "status": "active",
        "variants": [
            {
                "id": 40499676938447,
                "product_id": 6805259649231,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:37:13Z",
                "updated_at": "2021-08-15T18:37:13Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676938447"
            }
        ]
    },
    {
        "id": 6805259681999,
        "title": "Example Hat 228",
        "handle": "228",
        "created_at": "2021-08-15T18:37:17Z",
        "updated_at": "2021-11-07T10:33:42Z",
        "options": [
            {
                "id": 8720154296527,
                "product_id": 6805259681999,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377135411407,
            "product_id": 6805259681999,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_68322946-b427-4317-9570-75d598277f7d.jpg?v=1629052637"
        },
        "images": [
            {
                "id": 29377135411407,
                "product_id": 6805259681999,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_68322946-b427-4317-9570-75d598277f7d.jpg?v=1629052637"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259681999",
        "status": "active",
        "variants": [
            {
                "id": 40499676971215,
                "product_id": 6805259681999,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:37:17Z",
                "updated_at": "2021-08-15T18:37:17Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499676971215"
            }
        ]
    },
    {
        "id": 6805259780303,
        "title": "Example Hat 229",
        "handle": "229",
        "created_at": "2021-08-15T18:37:21Z",
        "updated_at": "2021-11-07T10:33:42Z",
        "options": [
            {
                "id": 8720154460367,
                "product_id": 6805259780303,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377135444175,
            "product_id": 6805259780303,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_75b51c29-c7b8-4cfa-8dd5-74d361debe51.jpg?v=1629052641"
        },
        "images": [
            {
                "id": 29377135444175,
                "product_id": 6805259780303,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_75b51c29-c7b8-4cfa-8dd5-74d361debe51.jpg?v=1629052641"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259780303",
        "status": "active",
        "variants": [
            {
                "id": 40499677495503,
                "product_id": 6805259780303,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:37:21Z",
                "updated_at": "2021-08-15T18:37:21Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499677495503"
            }
        ]
    },
    {
        "id": 6805249622223,
        "title": "Example Hat 23",
        "handle": "23",
        "created_at": "2021-08-15T18:21:39Z",
        "updated_at": "2021-11-07T10:33:18Z",
        "options": [
            {
                "id": 8720142729423,
                "product_id": 6805249622223,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377101922511,
            "product_id": 6805249622223,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f4d3bf26-487f-4f04-8bd5-53e3a651e34a.jpg?v=1629051699"
        },
        "images": [
            {
                "id": 29377101922511,
                "product_id": 6805249622223,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f4d3bf26-487f-4f04-8bd5-53e3a651e34a.jpg?v=1629051699"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249622223",
        "status": "active",
        "variants": [
            {
                "id": 40499646300367,
                "product_id": 6805249622223,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:21:39Z",
                "updated_at": "2021-08-15T18:21:39Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499646300367"
            }
        ]
    },
    {
        "id": 6805259878607,
        "title": "Example Hat 230",
        "handle": "230",
        "created_at": "2021-08-15T18:37:26Z",
        "updated_at": "2021-11-07T10:33:43Z",
        "options": [
            {
                "id": 8720154558671,
                "product_id": 6805259878607,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377135739087,
            "product_id": 6805259878607,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8430f856-e4b2-49d5-a1a8-237a002f2646.jpg?v=1629052647"
        },
        "images": [
            {
                "id": 29377135739087,
                "product_id": 6805259878607,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8430f856-e4b2-49d5-a1a8-237a002f2646.jpg?v=1629052647"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259878607",
        "status": "active",
        "variants": [
            {
                "id": 40499677888719,
                "product_id": 6805259878607,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:37:27Z",
                "updated_at": "2021-08-15T18:37:27Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499677888719"
            }
        ]
    },
    {
        "id": 6805259944143,
        "title": "Example Hat 231",
        "handle": "231",
        "created_at": "2021-08-15T18:37:31Z",
        "updated_at": "2021-11-07T10:33:43Z",
        "options": [
            {
                "id": 8720154624207,
                "product_id": 6805259944143,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377136001231,
            "product_id": 6805259944143,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_99da4b52-ab5f-4b60-b223-a54d6246ddd3.jpg?v=1629052651"
        },
        "images": [
            {
                "id": 29377136001231,
                "product_id": 6805259944143,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_99da4b52-ab5f-4b60-b223-a54d6246ddd3.jpg?v=1629052651"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259944143",
        "status": "active",
        "variants": [
            {
                "id": 40499678445775,
                "product_id": 6805259944143,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:37:31Z",
                "updated_at": "2021-08-15T18:37:31Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499678445775"
            }
        ]
    },
    {
        "id": 6805259976911,
        "title": "Example Hat 232",
        "handle": "232",
        "created_at": "2021-08-15T18:37:36Z",
        "updated_at": "2021-11-07T10:33:43Z",
        "options": [
            {
                "id": 8720154656975,
                "product_id": 6805259976911,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377136427215,
            "product_id": 6805259976911,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8e078306-0fe3-4286-9e93-70c131de2746.jpg?v=1629052656"
        },
        "images": [
            {
                "id": 29377136427215,
                "product_id": 6805259976911,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8e078306-0fe3-4286-9e93-70c131de2746.jpg?v=1629052656"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805259976911",
        "status": "active",
        "variants": [
            {
                "id": 40499678478543,
                "product_id": 6805259976911,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:37:36Z",
                "updated_at": "2021-08-15T18:37:36Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499678478543"
            }
        ]
    },
    {
        "id": 6805260009679,
        "title": "Example Hat 233",
        "handle": "233",
        "created_at": "2021-08-15T18:37:41Z",
        "updated_at": "2021-11-07T10:33:43Z",
        "options": [
            {
                "id": 8720154689743,
                "product_id": 6805260009679,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377136689359,
            "product_id": 6805260009679,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ad6dc3f3-3292-4fe0-8b5c-07e3f2711313.jpg?v=1629052661"
        },
        "images": [
            {
                "id": 29377136689359,
                "product_id": 6805260009679,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ad6dc3f3-3292-4fe0-8b5c-07e3f2711313.jpg?v=1629052661"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260009679",
        "status": "active",
        "variants": [
            {
                "id": 40499678511311,
                "product_id": 6805260009679,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:37:41Z",
                "updated_at": "2021-08-15T18:37:41Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499678511311"
            }
        ]
    },
    {
        "id": 6805260140751,
        "title": "Example Hat 234",
        "handle": "234",
        "created_at": "2021-08-15T18:37:45Z",
        "updated_at": "2021-11-07T10:33:43Z",
        "options": [
            {
                "id": 8720154886351,
                "product_id": 6805260140751,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377136951503,
            "product_id": 6805260140751,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_14536b81-709e-463e-87da-34cb1a0c480f.jpg?v=1629052665"
        },
        "images": [
            {
                "id": 29377136951503,
                "product_id": 6805260140751,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_14536b81-709e-463e-87da-34cb1a0c480f.jpg?v=1629052665"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260140751",
        "status": "active",
        "variants": [
            {
                "id": 40499679264975,
                "product_id": 6805260140751,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:37:45Z",
                "updated_at": "2021-08-15T18:37:45Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499679264975"
            }
        ]
    },
    {
        "id": 6805260173519,
        "title": "Example Hat 235",
        "handle": "235",
        "created_at": "2021-08-15T18:37:49Z",
        "updated_at": "2021-11-07T10:33:43Z",
        "options": [
            {
                "id": 8720154919119,
                "product_id": 6805260173519,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377137049807,
            "product_id": 6805260173519,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c1bace18-b4e0-4b22-96c9-e68f9528f8a5.jpg?v=1629052669"
        },
        "images": [
            {
                "id": 29377137049807,
                "product_id": 6805260173519,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c1bace18-b4e0-4b22-96c9-e68f9528f8a5.jpg?v=1629052669"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260173519",
        "status": "active",
        "variants": [
            {
                "id": 40499679297743,
                "product_id": 6805260173519,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:37:49Z",
                "updated_at": "2021-08-15T18:37:49Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499679297743"
            }
        ]
    },
    {
        "id": 6805260239055,
        "title": "Example Hat 236",
        "handle": "236",
        "created_at": "2021-08-15T18:37:54Z",
        "updated_at": "2021-11-07T10:33:43Z",
        "options": [
            {
                "id": 8720155017423,
                "product_id": 6805260239055,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377137311951,
            "product_id": 6805260239055,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_96c05234-2c07-4f09-9eb0-0d861f86533a.jpg?v=1629052674"
        },
        "images": [
            {
                "id": 29377137311951,
                "product_id": 6805260239055,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_96c05234-2c07-4f09-9eb0-0d861f86533a.jpg?v=1629052674"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260239055",
        "status": "active",
        "variants": [
            {
                "id": 40499679658191,
                "product_id": 6805260239055,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:37:54Z",
                "updated_at": "2021-08-15T18:37:54Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499679658191"
            }
        ]
    },
    {
        "id": 6805260271823,
        "title": "Example Hat 237",
        "handle": "237",
        "created_at": "2021-08-15T18:37:58Z",
        "updated_at": "2021-11-07T10:33:43Z",
        "options": [
            {
                "id": 8720155050191,
                "product_id": 6805260271823,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377137377487,
            "product_id": 6805260271823,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c772aa6c-57d4-4325-a6d1-95bd88c3408d.jpg?v=1629052678"
        },
        "images": [
            {
                "id": 29377137377487,
                "product_id": 6805260271823,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c772aa6c-57d4-4325-a6d1-95bd88c3408d.jpg?v=1629052678"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260271823",
        "status": "active",
        "variants": [
            {
                "id": 40499679690959,
                "product_id": 6805260271823,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:37:58Z",
                "updated_at": "2021-08-15T18:37:58Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499679690959"
            }
        ]
    },
    {
        "id": 6805260337359,
        "title": "Example Hat 238",
        "handle": "238",
        "created_at": "2021-08-15T18:38:03Z",
        "updated_at": "2021-11-07T10:33:43Z",
        "options": [
            {
                "id": 8720155115727,
                "product_id": 6805260337359,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377137410255,
            "product_id": 6805260337359,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_179ceff8-3661-42e1-a9df-b7f5d659f7ba.jpg?v=1629052683"
        },
        "images": [
            {
                "id": 29377137410255,
                "product_id": 6805260337359,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_179ceff8-3661-42e1-a9df-b7f5d659f7ba.jpg?v=1629052683"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260337359",
        "status": "active",
        "variants": [
            {
                "id": 40499679756495,
                "product_id": 6805260337359,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:38:03Z",
                "updated_at": "2021-08-15T18:38:03Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499679756495"
            }
        ]
    },
    {
        "id": 6805260370127,
        "title": "Example Hat 239",
        "handle": "239",
        "created_at": "2021-08-15T18:38:07Z",
        "updated_at": "2021-11-07T10:33:44Z",
        "options": [
            {
                "id": 8720155148495,
                "product_id": 6805260370127,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377137443023,
            "product_id": 6805260370127,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c93d2f83-55e4-48a9-b6c6-6291c22b60c1.jpg?v=1629052687"
        },
        "images": [
            {
                "id": 29377137443023,
                "product_id": 6805260370127,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c93d2f83-55e4-48a9-b6c6-6291c22b60c1.jpg?v=1629052687"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260370127",
        "status": "active",
        "variants": [
            {
                "id": 40499679789263,
                "product_id": 6805260370127,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:38:07Z",
                "updated_at": "2021-08-15T18:38:07Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499679789263"
            }
        ]
    },
    {
        "id": 6805249654991,
        "title": "Example Hat 24",
        "handle": "24",
        "created_at": "2021-08-15T18:21:44Z",
        "updated_at": "2021-11-07T10:33:18Z",
        "options": [
            {
                "id": 8720142762191,
                "product_id": 6805249654991,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377102282959,
            "product_id": 6805249654991,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_95ebf5ed-0086-4fa5-97ba-9262b855c0a5.jpg?v=1629051704"
        },
        "images": [
            {
                "id": 29377102282959,
                "product_id": 6805249654991,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_95ebf5ed-0086-4fa5-97ba-9262b855c0a5.jpg?v=1629051704"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249654991",
        "status": "active",
        "variants": [
            {
                "id": 40499646333135,
                "product_id": 6805249654991,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:21:44Z",
                "updated_at": "2021-08-15T18:21:44Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499646333135"
            }
        ]
    },
    {
        "id": 6805260435663,
        "title": "Example Hat 240",
        "handle": "240",
        "created_at": "2021-08-15T18:38:11Z",
        "updated_at": "2021-11-07T10:33:44Z",
        "options": [
            {
                "id": 8720155279567,
                "product_id": 6805260435663,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377137475791,
            "product_id": 6805260435663,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d7f397c6-b8c7-4f55-8d8e-1be4a377bb0d.jpg?v=1629052691"
        },
        "images": [
            {
                "id": 29377137475791,
                "product_id": 6805260435663,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d7f397c6-b8c7-4f55-8d8e-1be4a377bb0d.jpg?v=1629052691"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260435663",
        "status": "active",
        "variants": [
            {
                "id": 40499681394895,
                "product_id": 6805260435663,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:38:11Z",
                "updated_at": "2021-08-15T18:38:11Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499681394895"
            }
        ]
    },
    {
        "id": 6805260501199,
        "title": "Example Hat 241",
        "handle": "241",
        "created_at": "2021-08-15T18:38:16Z",
        "updated_at": "2021-11-07T10:33:44Z",
        "options": [
            {
                "id": 8720155345103,
                "product_id": 6805260501199,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377137541327,
            "product_id": 6805260501199,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_46e15310-5f5b-46a5-97ca-3ee12e81fed5.jpg?v=1629052696"
        },
        "images": [
            {
                "id": 29377137541327,
                "product_id": 6805260501199,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_46e15310-5f5b-46a5-97ca-3ee12e81fed5.jpg?v=1629052696"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260501199",
        "status": "active",
        "variants": [
            {
                "id": 40499681460431,
                "product_id": 6805260501199,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:38:16Z",
                "updated_at": "2021-08-15T18:38:16Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499681460431"
            }
        ]
    },
    {
        "id": 6805260566735,
        "title": "Example Hat 242",
        "handle": "242",
        "created_at": "2021-08-15T18:38:20Z",
        "updated_at": "2021-11-07T10:33:44Z",
        "options": [
            {
                "id": 8720155410639,
                "product_id": 6805260566735,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377137705167,
            "product_id": 6805260566735,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_100076d7-17bf-4cdc-bf7e-a59856c692e4.jpg?v=1629052700"
        },
        "images": [
            {
                "id": 29377137705167,
                "product_id": 6805260566735,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_100076d7-17bf-4cdc-bf7e-a59856c692e4.jpg?v=1629052700"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260566735",
        "status": "active",
        "variants": [
            {
                "id": 40499681558735,
                "product_id": 6805260566735,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:38:20Z",
                "updated_at": "2021-08-15T18:38:20Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499681558735"
            }
        ]
    },
    {
        "id": 6805260632271,
        "title": "Example Hat 243",
        "handle": "243",
        "created_at": "2021-08-15T18:38:25Z",
        "updated_at": "2021-11-07T10:33:44Z",
        "options": [
            {
                "id": 8720155508943,
                "product_id": 6805260632271,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377138065615,
            "product_id": 6805260632271,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1f4fa165-b155-4e17-93dd-101aa17a7ec7.jpg?v=1629052705"
        },
        "images": [
            {
                "id": 29377138065615,
                "product_id": 6805260632271,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1f4fa165-b155-4e17-93dd-101aa17a7ec7.jpg?v=1629052705"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260632271",
        "status": "active",
        "variants": [
            {
                "id": 40499682083023,
                "product_id": 6805260632271,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:38:25Z",
                "updated_at": "2021-08-15T18:38:25Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499682083023"
            }
        ]
    },
    {
        "id": 6805260665039,
        "title": "Example Hat 244",
        "handle": "244",
        "created_at": "2021-08-15T18:38:29Z",
        "updated_at": "2021-11-07T10:33:44Z",
        "options": [
            {
                "id": 8720155541711,
                "product_id": 6805260665039,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377138294991,
            "product_id": 6805260665039,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_18f2bff3-dac1-4091-8cd5-7e5bb71c4e30.jpg?v=1629052709"
        },
        "images": [
            {
                "id": 29377138294991,
                "product_id": 6805260665039,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_18f2bff3-dac1-4091-8cd5-7e5bb71c4e30.jpg?v=1629052709"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260665039",
        "status": "active",
        "variants": [
            {
                "id": 40499682115791,
                "product_id": 6805260665039,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:38:29Z",
                "updated_at": "2021-08-15T18:38:29Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499682115791"
            }
        ]
    },
    {
        "id": 6805260697807,
        "title": "Example Hat 245",
        "handle": "245",
        "created_at": "2021-08-15T18:38:33Z",
        "updated_at": "2021-11-07T10:33:44Z",
        "options": [
            {
                "id": 8720155574479,
                "product_id": 6805260697807,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377138327759,
            "product_id": 6805260697807,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6ec120bd-0d6f-4715-8bde-f5dc3851accf.jpg?v=1629052713"
        },
        "images": [
            {
                "id": 29377138327759,
                "product_id": 6805260697807,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6ec120bd-0d6f-4715-8bde-f5dc3851accf.jpg?v=1629052713"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260697807",
        "status": "active",
        "variants": [
            {
                "id": 40499682148559,
                "product_id": 6805260697807,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:38:33Z",
                "updated_at": "2021-08-15T18:38:33Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499682148559"
            }
        ]
    },
    {
        "id": 6805260730575,
        "title": "Example Hat 246",
        "handle": "246",
        "created_at": "2021-08-15T18:38:37Z",
        "updated_at": "2021-11-07T10:33:44Z",
        "options": [
            {
                "id": 8720155607247,
                "product_id": 6805260730575,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377138360527,
            "product_id": 6805260730575,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5583cb8b-02c3-41f5-9f28-d8460c4034e0.jpg?v=1629052717"
        },
        "images": [
            {
                "id": 29377138360527,
                "product_id": 6805260730575,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5583cb8b-02c3-41f5-9f28-d8460c4034e0.jpg?v=1629052717"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260730575",
        "status": "active",
        "variants": [
            {
                "id": 40499682181327,
                "product_id": 6805260730575,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:38:37Z",
                "updated_at": "2021-08-15T18:38:37Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499682181327"
            }
        ]
    },
    {
        "id": 6805260796111,
        "title": "Example Hat 247",
        "handle": "247",
        "created_at": "2021-08-15T18:38:42Z",
        "updated_at": "2021-11-07T10:33:44Z",
        "options": [
            {
                "id": 8720155705551,
                "product_id": 6805260796111,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377138393295,
            "product_id": 6805260796111,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_aa4d4e16-b314-4f06-85ac-9cabf74c2e2d.jpg?v=1629052722"
        },
        "images": [
            {
                "id": 29377138393295,
                "product_id": 6805260796111,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_aa4d4e16-b314-4f06-85ac-9cabf74c2e2d.jpg?v=1629052722"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260796111",
        "status": "active",
        "variants": [
            {
                "id": 40499682410703,
                "product_id": 6805260796111,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:38:42Z",
                "updated_at": "2021-08-15T18:38:42Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499682410703"
            }
        ]
    },
    {
        "id": 6805260828879,
        "title": "Example Hat 248",
        "handle": "248",
        "created_at": "2021-08-15T18:38:48Z",
        "updated_at": "2021-11-07T10:33:44Z",
        "options": [
            {
                "id": 8720155738319,
                "product_id": 6805260828879,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377138426063,
            "product_id": 6805260828879,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ff70552d-cf80-4670-8ad8-45ee1f13270e.jpg?v=1629052728"
        },
        "images": [
            {
                "id": 29377138426063,
                "product_id": 6805260828879,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ff70552d-cf80-4670-8ad8-45ee1f13270e.jpg?v=1629052728"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260828879",
        "status": "active",
        "variants": [
            {
                "id": 40499682443471,
                "product_id": 6805260828879,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:38:48Z",
                "updated_at": "2021-08-15T18:38:48Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499682443471"
            }
        ]
    },
    {
        "id": 6805260894415,
        "title": "Example Hat 249",
        "handle": "249",
        "created_at": "2021-08-15T18:38:52Z",
        "updated_at": "2021-11-07T10:33:45Z",
        "options": [
            {
                "id": 8720155803855,
                "product_id": 6805260894415,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377138524367,
            "product_id": 6805260894415,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_70f62a90-b68c-4353-b45f-81933e903f74.jpg?v=1629052732"
        },
        "images": [
            {
                "id": 29377138524367,
                "product_id": 6805260894415,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_70f62a90-b68c-4353-b45f-81933e903f74.jpg?v=1629052732"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805260894415",
        "status": "active",
        "variants": [
            {
                "id": 40499682509007,
                "product_id": 6805260894415,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:38:52Z",
                "updated_at": "2021-08-15T18:38:52Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499682509007"
            }
        ]
    },
    {
        "id": 6805249720527,
        "title": "Example Hat 25",
        "handle": "25",
        "created_at": "2021-08-15T18:21:48Z",
        "updated_at": "2021-11-07T10:33:18Z",
        "options": [
            {
                "id": 8720142860495,
                "product_id": 6805249720527,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377102479567,
            "product_id": 6805249720527,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d9dccdd0-d78f-4ef6-9c0e-0e6a3b165ae8.jpg?v=1629051708"
        },
        "images": [
            {
                "id": 29377102479567,
                "product_id": 6805249720527,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d9dccdd0-d78f-4ef6-9c0e-0e6a3b165ae8.jpg?v=1629051708"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249720527",
        "status": "active",
        "variants": [
            {
                "id": 40499647152335,
                "product_id": 6805249720527,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:21:48Z",
                "updated_at": "2021-08-15T18:21:48Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499647152335"
            }
        ]
    },
    {
        "id": 6805261025487,
        "title": "Example Hat 250",
        "handle": "250",
        "created_at": "2021-08-15T18:38:57Z",
        "updated_at": "2021-11-07T10:33:45Z",
        "options": [
            {
                "id": 8720155967695,
                "product_id": 6805261025487,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377138786511,
            "product_id": 6805261025487,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c0265a7d-e87a-4dd5-b937-638ec1f3c61e.jpg?v=1629052737"
        },
        "images": [
            {
                "id": 29377138786511,
                "product_id": 6805261025487,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c0265a7d-e87a-4dd5-b937-638ec1f3c61e.jpg?v=1629052737"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261025487",
        "status": "active",
        "variants": [
            {
                "id": 40499682738383,
                "product_id": 6805261025487,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:38:57Z",
                "updated_at": "2021-08-15T18:38:57Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499682738383"
            }
        ]
    },
    {
        "id": 6805261058255,
        "title": "Example Hat 251",
        "handle": "251",
        "created_at": "2021-08-15T18:39:01Z",
        "updated_at": "2021-11-07T10:33:45Z",
        "options": [
            {
                "id": 8720156000463,
                "product_id": 6805261058255,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377138950351,
            "product_id": 6805261058255,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fe215f2d-3421-4082-a0fa-f9359933b385.jpg?v=1629052741"
        },
        "images": [
            {
                "id": 29377138950351,
                "product_id": 6805261058255,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fe215f2d-3421-4082-a0fa-f9359933b385.jpg?v=1629052741"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261058255",
        "status": "active",
        "variants": [
            {
                "id": 40499682803919,
                "product_id": 6805261058255,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:39:02Z",
                "updated_at": "2021-08-15T18:39:02Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499682803919"
            }
        ]
    },
    {
        "id": 6805261156559,
        "title": "Example Hat 252",
        "handle": "252",
        "created_at": "2021-08-15T18:39:06Z",
        "updated_at": "2021-11-07T10:33:45Z",
        "options": [
            {
                "id": 8720156098767,
                "product_id": 6805261156559,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377139179727,
            "product_id": 6805261156559,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1e87c8d0-1b23-48bc-8644-d0b54c11ad91.jpg?v=1629052746"
        },
        "images": [
            {
                "id": 29377139179727,
                "product_id": 6805261156559,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1e87c8d0-1b23-48bc-8644-d0b54c11ad91.jpg?v=1629052746"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261156559",
        "status": "active",
        "variants": [
            {
                "id": 40499682934991,
                "product_id": 6805261156559,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:39:06Z",
                "updated_at": "2021-08-15T18:39:06Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499682934991"
            }
        ]
    },
    {
        "id": 6805261222095,
        "title": "Example Hat 253",
        "handle": "253",
        "created_at": "2021-08-15T18:39:11Z",
        "updated_at": "2021-11-07T10:33:45Z",
        "options": [
            {
                "id": 8720156164303,
                "product_id": 6805261222095,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377139343567,
            "product_id": 6805261222095,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4b30c9c7-aeac-4bac-a8dd-26a9fe4f79be.jpg?v=1629052751"
        },
        "images": [
            {
                "id": 29377139343567,
                "product_id": 6805261222095,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4b30c9c7-aeac-4bac-a8dd-26a9fe4f79be.jpg?v=1629052751"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261222095",
        "status": "active",
        "variants": [
            {
                "id": 40499682967759,
                "product_id": 6805261222095,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:39:11Z",
                "updated_at": "2021-08-15T18:39:11Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499682967759"
            }
        ]
    },
    {
        "id": 6805261287631,
        "title": "Example Hat 254",
        "handle": "254",
        "created_at": "2021-08-15T18:39:15Z",
        "updated_at": "2021-11-07T10:33:45Z",
        "options": [
            {
                "id": 8720156262607,
                "product_id": 6805261287631,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377139474639,
            "product_id": 6805261287631,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e4dfdb91-88b5-4631-8af1-68bcdbd2a8e9.jpg?v=1629052756"
        },
        "images": [
            {
                "id": 29377139474639,
                "product_id": 6805261287631,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e4dfdb91-88b5-4631-8af1-68bcdbd2a8e9.jpg?v=1629052756"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261287631",
        "status": "active",
        "variants": [
            {
                "id": 40499684147407,
                "product_id": 6805261287631,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:39:16Z",
                "updated_at": "2021-08-15T18:39:16Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499684147407"
            }
        ]
    },
    {
        "id": 6805261320399,
        "title": "Example Hat 255",
        "handle": "255",
        "created_at": "2021-08-15T18:39:20Z",
        "updated_at": "2021-11-07T10:33:45Z",
        "options": [
            {
                "id": 8720156295375,
                "product_id": 6805261320399,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377139572943,
            "product_id": 6805261320399,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a32e69e5-0170-458e-894f-6f8a5c960ca9.jpg?v=1629052760"
        },
        "images": [
            {
                "id": 29377139572943,
                "product_id": 6805261320399,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a32e69e5-0170-458e-894f-6f8a5c960ca9.jpg?v=1629052760"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261320399",
        "status": "active",
        "variants": [
            {
                "id": 40499684180175,
                "product_id": 6805261320399,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:39:20Z",
                "updated_at": "2021-08-15T18:39:20Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499684180175"
            }
        ]
    },
    {
        "id": 6805261353167,
        "title": "Example Hat 256",
        "handle": "256",
        "created_at": "2021-08-15T18:39:25Z",
        "updated_at": "2021-11-07T10:33:45Z",
        "options": [
            {
                "id": 8720156328143,
                "product_id": 6805261353167,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377139933391,
            "product_id": 6805261353167,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_05871a74-f693-487e-8383-267af232074b.jpg?v=1629052765"
        },
        "images": [
            {
                "id": 29377139933391,
                "product_id": 6805261353167,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_05871a74-f693-487e-8383-267af232074b.jpg?v=1629052765"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261353167",
        "status": "active",
        "variants": [
            {
                "id": 40499684212943,
                "product_id": 6805261353167,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:39:25Z",
                "updated_at": "2021-08-15T18:39:25Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499684212943"
            }
        ]
    },
    {
        "id": 6805261385935,
        "title": "Example Hat 257",
        "handle": "257",
        "created_at": "2021-08-15T18:39:29Z",
        "updated_at": "2021-11-07T10:33:45Z",
        "options": [
            {
                "id": 8720156360911,
                "product_id": 6805261385935,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377139998927,
            "product_id": 6805261385935,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_deffe928-9fc8-4405-86d3-0df26f1e9c51.jpg?v=1629052769"
        },
        "images": [
            {
                "id": 29377139998927,
                "product_id": 6805261385935,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_deffe928-9fc8-4405-86d3-0df26f1e9c51.jpg?v=1629052769"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261385935",
        "status": "active",
        "variants": [
            {
                "id": 40499684245711,
                "product_id": 6805261385935,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:39:29Z",
                "updated_at": "2021-08-15T18:39:29Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499684245711"
            }
        ]
    },
    {
        "id": 6805261451471,
        "title": "Example Hat 258",
        "handle": "258",
        "created_at": "2021-08-15T18:39:34Z",
        "updated_at": "2021-11-07T10:33:45Z",
        "options": [
            {
                "id": 8720156459215,
                "product_id": 6805261451471,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377140031695,
            "product_id": 6805261451471,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3d588b9c-58d4-4b00-9812-0e1736dcec26.jpg?v=1629052774"
        },
        "images": [
            {
                "id": 29377140031695,
                "product_id": 6805261451471,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3d588b9c-58d4-4b00-9812-0e1736dcec26.jpg?v=1629052774"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261451471",
        "status": "active",
        "variants": [
            {
                "id": 40499684376783,
                "product_id": 6805261451471,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:39:34Z",
                "updated_at": "2021-08-15T18:39:34Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499684376783"
            }
        ]
    },
    {
        "id": 6805261484239,
        "title": "Example Hat 259",
        "handle": "259",
        "created_at": "2021-08-15T18:39:38Z",
        "updated_at": "2021-11-07T10:33:46Z",
        "options": [
            {
                "id": 8720156491983,
                "product_id": 6805261484239,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377140195535,
            "product_id": 6805261484239,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1ef3891e-2899-4da6-856c-63356a14171a.jpg?v=1629052779"
        },
        "images": [
            {
                "id": 29377140195535,
                "product_id": 6805261484239,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1ef3891e-2899-4da6-856c-63356a14171a.jpg?v=1629052779"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261484239",
        "status": "active",
        "variants": [
            {
                "id": 40499684409551,
                "product_id": 6805261484239,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:39:39Z",
                "updated_at": "2021-08-15T18:39:39Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499684409551"
            }
        ]
    },
    {
        "id": 6805249753295,
        "title": "Example Hat 26",
        "handle": "26",
        "created_at": "2021-08-15T18:21:52Z",
        "updated_at": "2021-11-07T10:33:18Z",
        "options": [
            {
                "id": 8720142893263,
                "product_id": 6805249753295,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377102643407,
            "product_id": 6805249753295,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_79f436ff-325d-4d7a-842f-172d155b515f.jpg?v=1629051712"
        },
        "images": [
            {
                "id": 29377102643407,
                "product_id": 6805249753295,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_79f436ff-325d-4d7a-842f-172d155b515f.jpg?v=1629051712"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249753295",
        "status": "active",
        "variants": [
            {
                "id": 40499647185103,
                "product_id": 6805249753295,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:21:53Z",
                "updated_at": "2021-08-15T18:21:53Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499647185103"
            }
        ]
    },
    {
        "id": 6805261517007,
        "title": "Example Hat 260",
        "handle": "260",
        "created_at": "2021-08-15T18:39:43Z",
        "updated_at": "2021-11-07T10:33:46Z",
        "options": [
            {
                "id": 8720156524751,
                "product_id": 6805261517007,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377140293839,
            "product_id": 6805261517007,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4206027e-73ee-412c-a81a-0a7b754d077d.jpg?v=1629052784"
        },
        "images": [
            {
                "id": 29377140293839,
                "product_id": 6805261517007,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4206027e-73ee-412c-a81a-0a7b754d077d.jpg?v=1629052784"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261517007",
        "status": "active",
        "variants": [
            {
                "id": 40499684442319,
                "product_id": 6805261517007,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:39:44Z",
                "updated_at": "2021-08-15T18:39:44Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499684442319"
            }
        ]
    },
    {
        "id": 6805261549775,
        "title": "Example Hat 261",
        "handle": "261",
        "created_at": "2021-08-15T18:39:48Z",
        "updated_at": "2021-11-07T10:33:46Z",
        "options": [
            {
                "id": 8720156557519,
                "product_id": 6805261549775,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377140359375,
            "product_id": 6805261549775,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_11fd5980-1204-4748-87f4-4d36b552fda9.jpg?v=1629052788"
        },
        "images": [
            {
                "id": 29377140359375,
                "product_id": 6805261549775,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_11fd5980-1204-4748-87f4-4d36b552fda9.jpg?v=1629052788"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261549775",
        "status": "active",
        "variants": [
            {
                "id": 40499684475087,
                "product_id": 6805261549775,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:39:48Z",
                "updated_at": "2021-08-15T18:39:48Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499684475087"
            }
        ]
    },
    {
        "id": 6805261615311,
        "title": "Example Hat 262",
        "handle": "262",
        "created_at": "2021-08-15T18:39:53Z",
        "updated_at": "2021-11-07T10:33:46Z",
        "options": [
            {
                "id": 8720156688591,
                "product_id": 6805261615311,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377140424911,
            "product_id": 6805261615311,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4b9d93e1-8c26-417e-bbc7-7a37ac14ac7e.jpg?v=1629052793"
        },
        "images": [
            {
                "id": 29377140424911,
                "product_id": 6805261615311,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4b9d93e1-8c26-417e-bbc7-7a37ac14ac7e.jpg?v=1629052793"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261615311",
        "status": "active",
        "variants": [
            {
                "id": 40499684769999,
                "product_id": 6805261615311,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:39:53Z",
                "updated_at": "2021-08-15T18:39:53Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499684769999"
            }
        ]
    },
    {
        "id": 6805261648079,
        "title": "Example Hat 263",
        "handle": "263",
        "created_at": "2021-08-15T18:39:57Z",
        "updated_at": "2021-11-07T10:33:46Z",
        "options": [
            {
                "id": 8720156721359,
                "product_id": 6805261648079,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377140490447,
            "product_id": 6805261648079,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f8d68917-25eb-4b77-a5b2-be68b1406998.jpg?v=1629052797"
        },
        "images": [
            {
                "id": 29377140490447,
                "product_id": 6805261648079,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f8d68917-25eb-4b77-a5b2-be68b1406998.jpg?v=1629052797"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261648079",
        "status": "active",
        "variants": [
            {
                "id": 40499684802767,
                "product_id": 6805261648079,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:39:57Z",
                "updated_at": "2021-08-15T18:39:57Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499684802767"
            }
        ]
    },
    {
        "id": 6805261680847,
        "title": "Example Hat 264",
        "handle": "264",
        "created_at": "2021-08-15T18:40:02Z",
        "updated_at": "2021-11-07T10:33:46Z",
        "options": [
            {
                "id": 8720156754127,
                "product_id": 6805261680847,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377140621519,
            "product_id": 6805261680847,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e454f26c-45ef-489d-bf94-71a9720a6736.jpg?v=1629052802"
        },
        "images": [
            {
                "id": 29377140621519,
                "product_id": 6805261680847,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e454f26c-45ef-489d-bf94-71a9720a6736.jpg?v=1629052802"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261680847",
        "status": "active",
        "variants": [
            {
                "id": 40499684868303,
                "product_id": 6805261680847,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:40:02Z",
                "updated_at": "2021-08-15T18:40:02Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499684868303"
            }
        ]
    },
    {
        "id": 6805261713615,
        "title": "Example Hat 265",
        "handle": "265",
        "created_at": "2021-08-15T18:40:07Z",
        "updated_at": "2021-11-07T10:33:46Z",
        "options": [
            {
                "id": 8720156786895,
                "product_id": 6805261713615,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377140687055,
            "product_id": 6805261713615,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_164f91dd-e8f7-47db-8fbf-3df06e7d2f1b.jpg?v=1629052807"
        },
        "images": [
            {
                "id": 29377140687055,
                "product_id": 6805261713615,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_164f91dd-e8f7-47db-8fbf-3df06e7d2f1b.jpg?v=1629052807"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261713615",
        "status": "active",
        "variants": [
            {
                "id": 40499684901071,
                "product_id": 6805261713615,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:40:07Z",
                "updated_at": "2021-08-15T18:40:07Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499684901071"
            }
        ]
    },
    {
        "id": 6805261779151,
        "title": "Example Hat 266",
        "handle": "266",
        "created_at": "2021-08-15T18:40:12Z",
        "updated_at": "2021-11-07T10:33:46Z",
        "options": [
            {
                "id": 8720156885199,
                "product_id": 6805261779151,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377140719823,
            "product_id": 6805261779151,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c1228159-48ac-48c6-8b12-71821f88f569.jpg?v=1629052812"
        },
        "images": [
            {
                "id": 29377140719823,
                "product_id": 6805261779151,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c1228159-48ac-48c6-8b12-71821f88f569.jpg?v=1629052812"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261779151",
        "status": "active",
        "variants": [
            {
                "id": 40499685097679,
                "product_id": 6805261779151,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:40:12Z",
                "updated_at": "2021-08-15T18:40:12Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499685097679"
            }
        ]
    },
    {
        "id": 6805261811919,
        "title": "Example Hat 267",
        "handle": "267",
        "created_at": "2021-08-15T18:40:16Z",
        "updated_at": "2021-11-07T10:33:46Z",
        "options": [
            {
                "id": 8720156917967,
                "product_id": 6805261811919,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377140818127,
            "product_id": 6805261811919,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5afb93b7-7ad2-4715-bc42-cf0bc5321620.jpg?v=1629052816"
        },
        "images": [
            {
                "id": 29377140818127,
                "product_id": 6805261811919,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5afb93b7-7ad2-4715-bc42-cf0bc5321620.jpg?v=1629052816"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261811919",
        "status": "active",
        "variants": [
            {
                "id": 40499685130447,
                "product_id": 6805261811919,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:40:16Z",
                "updated_at": "2021-08-15T18:40:16Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499685130447"
            }
        ]
    },
    {
        "id": 6805261844687,
        "title": "Example Hat 268",
        "handle": "268",
        "created_at": "2021-08-15T18:40:22Z",
        "updated_at": "2021-11-07T10:33:46Z",
        "options": [
            {
                "id": 8720156950735,
                "product_id": 6805261844687,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377140850895,
            "product_id": 6805261844687,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5bba3203-a664-4fe9-a079-9bad32bf800c.jpg?v=1629052823"
        },
        "images": [
            {
                "id": 29377140850895,
                "product_id": 6805261844687,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5bba3203-a664-4fe9-a079-9bad32bf800c.jpg?v=1629052823"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261844687",
        "status": "active",
        "variants": [
            {
                "id": 40499685163215,
                "product_id": 6805261844687,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:40:23Z",
                "updated_at": "2021-08-15T18:40:23Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499685163215"
            }
        ]
    },
    {
        "id": 6805261942991,
        "title": "Example Hat 269",
        "handle": "269",
        "created_at": "2021-08-15T18:40:29Z",
        "updated_at": "2021-11-07T10:33:47Z",
        "options": [
            {
                "id": 8720157114575,
                "product_id": 6805261942991,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377140883663,
            "product_id": 6805261942991,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b683dd3a-7b0e-4b6f-b629-98ad98d22eae.jpg?v=1629052829"
        },
        "images": [
            {
                "id": 29377140883663,
                "product_id": 6805261942991,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b683dd3a-7b0e-4b6f-b629-98ad98d22eae.jpg?v=1629052829"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261942991",
        "status": "active",
        "variants": [
            {
                "id": 40499687260367,
                "product_id": 6805261942991,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:40:29Z",
                "updated_at": "2021-08-15T18:40:29Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499687260367"
            }
        ]
    },
    {
        "id": 6805249786063,
        "title": "Example Hat 27",
        "handle": "27",
        "created_at": "2021-08-15T18:21:57Z",
        "updated_at": "2021-11-07T10:33:18Z",
        "options": [
            {
                "id": 8720142926031,
                "product_id": 6805249786063,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377102774479,
            "product_id": 6805249786063,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_63fe1671-b1d3-4622-bbac-d88dd9ace4a6.jpg?v=1629051717"
        },
        "images": [
            {
                "id": 29377102774479,
                "product_id": 6805249786063,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_63fe1671-b1d3-4622-bbac-d88dd9ace4a6.jpg?v=1629051717"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249786063",
        "status": "active",
        "variants": [
            {
                "id": 40499647217871,
                "product_id": 6805249786063,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:21:57Z",
                "updated_at": "2021-08-15T18:21:57Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499647217871"
            }
        ]
    },
    {
        "id": 6805261975759,
        "title": "Example Hat 270",
        "handle": "270",
        "created_at": "2021-08-15T18:40:34Z",
        "updated_at": "2021-11-07T10:33:47Z",
        "options": [
            {
                "id": 8720157147343,
                "product_id": 6805261975759,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377141014735,
            "product_id": 6805261975759,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e1289d14-c9f6-462c-8ea1-acea3758a48f.jpg?v=1629052834"
        },
        "images": [
            {
                "id": 29377141014735,
                "product_id": 6805261975759,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e1289d14-c9f6-462c-8ea1-acea3758a48f.jpg?v=1629052834"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805261975759",
        "status": "active",
        "variants": [
            {
                "id": 40499687293135,
                "product_id": 6805261975759,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:40:34Z",
                "updated_at": "2021-08-15T18:40:34Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499687293135"
            }
        ]
    },
    {
        "id": 6805262008527,
        "title": "Example Hat 271",
        "handle": "271",
        "created_at": "2021-08-15T18:40:39Z",
        "updated_at": "2021-11-07T10:33:47Z",
        "options": [
            {
                "id": 8720157180111,
                "product_id": 6805262008527,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377141375183,
            "product_id": 6805262008527,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_2c80c37d-5e0a-47da-a8e6-575ebdd40018.jpg?v=1629052839"
        },
        "images": [
            {
                "id": 29377141375183,
                "product_id": 6805262008527,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_2c80c37d-5e0a-47da-a8e6-575ebdd40018.jpg?v=1629052839"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262008527",
        "status": "active",
        "variants": [
            {
                "id": 40499687325903,
                "product_id": 6805262008527,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:40:39Z",
                "updated_at": "2021-08-15T18:40:39Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499687325903"
            }
        ]
    },
    {
        "id": 6805262041295,
        "title": "Example Hat 272",
        "handle": "272",
        "created_at": "2021-08-15T18:40:44Z",
        "updated_at": "2021-11-07T10:33:47Z",
        "options": [
            {
                "id": 8720157212879,
                "product_id": 6805262041295,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377141539023,
            "product_id": 6805262041295,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_7815169e-5a01-4e82-a1c8-2836174cddeb.jpg?v=1629052844"
        },
        "images": [
            {
                "id": 29377141539023,
                "product_id": 6805262041295,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_7815169e-5a01-4e82-a1c8-2836174cddeb.jpg?v=1629052844"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262041295",
        "status": "active",
        "variants": [
            {
                "id": 40499687391439,
                "product_id": 6805262041295,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:40:44Z",
                "updated_at": "2021-08-15T18:40:44Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499687391439"
            }
        ]
    },
    {
        "id": 6805262074063,
        "title": "Example Hat 273",
        "handle": "273",
        "created_at": "2021-08-15T18:40:48Z",
        "updated_at": "2021-11-07T10:33:47Z",
        "options": [
            {
                "id": 8720157245647,
                "product_id": 6805262074063,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377141571791,
            "product_id": 6805262074063,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_912a4ccc-53ca-46f8-9b1e-9af52866156b.jpg?v=1629052848"
        },
        "images": [
            {
                "id": 29377141571791,
                "product_id": 6805262074063,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_912a4ccc-53ca-46f8-9b1e-9af52866156b.jpg?v=1629052848"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262074063",
        "status": "active",
        "variants": [
            {
                "id": 40499687424207,
                "product_id": 6805262074063,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:40:48Z",
                "updated_at": "2021-08-15T18:40:48Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499687424207"
            }
        ]
    },
    {
        "id": 6805262139599,
        "title": "Example Hat 274",
        "handle": "274",
        "created_at": "2021-08-15T18:40:53Z",
        "updated_at": "2021-11-07T10:33:47Z",
        "options": [
            {
                "id": 8720157311183,
                "product_id": 6805262139599,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377141637327,
            "product_id": 6805262139599,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_64a4219c-24ea-4769-a38e-0295e4834e89.jpg?v=1629052853"
        },
        "images": [
            {
                "id": 29377141637327,
                "product_id": 6805262139599,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_64a4219c-24ea-4769-a38e-0295e4834e89.jpg?v=1629052853"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262139599",
        "status": "active",
        "variants": [
            {
                "id": 40499687489743,
                "product_id": 6805262139599,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:40:53Z",
                "updated_at": "2021-08-15T18:40:53Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499687489743"
            }
        ]
    },
    {
        "id": 6805262172367,
        "title": "Example Hat 275",
        "handle": "275",
        "created_at": "2021-08-15T18:40:57Z",
        "updated_at": "2021-11-07T10:33:47Z",
        "options": [
            {
                "id": 8720157343951,
                "product_id": 6805262172367,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377141670095,
            "product_id": 6805262172367,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_faf10edf-7a90-46ad-b9dd-25921ca011c9.jpg?v=1629052857"
        },
        "images": [
            {
                "id": 29377141670095,
                "product_id": 6805262172367,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_faf10edf-7a90-46ad-b9dd-25921ca011c9.jpg?v=1629052857"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262172367",
        "status": "active",
        "variants": [
            {
                "id": 40499687522511,
                "product_id": 6805262172367,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:40:57Z",
                "updated_at": "2021-08-15T18:40:57Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499687522511"
            }
        ]
    },
    {
        "id": 6805262237903,
        "title": "Example Hat 276",
        "handle": "276",
        "created_at": "2021-08-15T18:41:02Z",
        "updated_at": "2021-11-07T10:33:47Z",
        "options": [
            {
                "id": 8720157409487,
                "product_id": 6805262237903,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377141702863,
            "product_id": 6805262237903,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_159577f4-b6c5-4b20-b928-c1c93e0795cb.jpg?v=1629052862"
        },
        "images": [
            {
                "id": 29377141702863,
                "product_id": 6805262237903,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_159577f4-b6c5-4b20-b928-c1c93e0795cb.jpg?v=1629052862"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262237903",
        "status": "active",
        "variants": [
            {
                "id": 40499687588047,
                "product_id": 6805262237903,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:41:02Z",
                "updated_at": "2021-08-15T18:41:02Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499687588047"
            }
        ]
    },
    {
        "id": 6805262368975,
        "title": "Example Hat 277",
        "handle": "277",
        "created_at": "2021-08-15T18:41:07Z",
        "updated_at": "2021-11-07T10:33:47Z",
        "options": [
            {
                "id": 8720157573327,
                "product_id": 6805262368975,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377141768399,
            "product_id": 6805262368975,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b22b2b80-aeb8-4825-baa1-6c817124ef89.jpg?v=1629052867"
        },
        "images": [
            {
                "id": 29377141768399,
                "product_id": 6805262368975,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b22b2b80-aeb8-4825-baa1-6c817124ef89.jpg?v=1629052867"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262368975",
        "status": "active",
        "variants": [
            {
                "id": 40499688112335,
                "product_id": 6805262368975,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:41:07Z",
                "updated_at": "2021-08-15T18:41:07Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499688112335"
            }
        ]
    },
    {
        "id": 6805262401743,
        "title": "Example Hat 278",
        "handle": "278",
        "created_at": "2021-08-15T18:41:12Z",
        "updated_at": "2021-11-07T10:33:47Z",
        "options": [
            {
                "id": 8720157606095,
                "product_id": 6805262401743,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377142161615,
            "product_id": 6805262401743,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_84469014-d571-4f84-8ea7-f283b0ae1dcb.jpg?v=1629052873"
        },
        "images": [
            {
                "id": 29377142161615,
                "product_id": 6805262401743,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_84469014-d571-4f84-8ea7-f283b0ae1dcb.jpg?v=1629052873"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262401743",
        "status": "active",
        "variants": [
            {
                "id": 40499688145103,
                "product_id": 6805262401743,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:41:13Z",
                "updated_at": "2021-08-15T18:41:13Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499688145103"
            }
        ]
    },
    {
        "id": 6805262434511,
        "title": "Example Hat 279",
        "handle": "279",
        "created_at": "2021-08-15T18:41:17Z",
        "updated_at": "2021-11-07T10:33:48Z",
        "options": [
            {
                "id": 8720157638863,
                "product_id": 6805262434511,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377142358223,
            "product_id": 6805262434511,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b6ed394b-39a7-4781-8a75-a07ed8514b50.jpg?v=1629052877"
        },
        "images": [
            {
                "id": 29377142358223,
                "product_id": 6805262434511,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b6ed394b-39a7-4781-8a75-a07ed8514b50.jpg?v=1629052877"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262434511",
        "status": "active",
        "variants": [
            {
                "id": 40499688177871,
                "product_id": 6805262434511,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:41:18Z",
                "updated_at": "2021-08-15T18:41:18Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499688177871"
            }
        ]
    },
    {
        "id": 6805249818831,
        "title": "Example Hat 28",
        "handle": "28",
        "created_at": "2021-08-15T18:22:02Z",
        "updated_at": "2021-11-07T10:33:18Z",
        "options": [
            {
                "id": 8720142958799,
                "product_id": 6805249818831,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377103003855,
            "product_id": 6805249818831,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fa675a4d-5294-44eb-8777-682991dfee1f.jpg?v=1629051722"
        },
        "images": [
            {
                "id": 29377103003855,
                "product_id": 6805249818831,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fa675a4d-5294-44eb-8777-682991dfee1f.jpg?v=1629051722"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249818831",
        "status": "active",
        "variants": [
            {
                "id": 40499647250639,
                "product_id": 6805249818831,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:22:02Z",
                "updated_at": "2021-08-15T18:22:02Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499647250639"
            }
        ]
    },
    {
        "id": 6805262467279,
        "title": "Example Hat 280",
        "handle": "280",
        "created_at": "2021-08-15T18:41:22Z",
        "updated_at": "2021-11-07T10:33:48Z",
        "options": [
            {
                "id": 8720157671631,
                "product_id": 6805262467279,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377142522063,
            "product_id": 6805262467279,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ae7e90a8-dee0-418a-8642-5e412d87ea8f.jpg?v=1629052882"
        },
        "images": [
            {
                "id": 29377142522063,
                "product_id": 6805262467279,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ae7e90a8-dee0-418a-8642-5e412d87ea8f.jpg?v=1629052882"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262467279",
        "status": "active",
        "variants": [
            {
                "id": 40499688210639,
                "product_id": 6805262467279,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:41:23Z",
                "updated_at": "2021-08-15T18:41:23Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499688210639"
            }
        ]
    },
    {
        "id": 6805262532815,
        "title": "Example Hat 281",
        "handle": "281",
        "created_at": "2021-08-15T18:41:27Z",
        "updated_at": "2021-11-07T10:33:48Z",
        "options": [
            {
                "id": 8720157737167,
                "product_id": 6805262532815,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377142816975,
            "product_id": 6805262532815,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_aa98cef4-314a-49fd-af71-5945ec39725f.jpg?v=1629052887"
        },
        "images": [
            {
                "id": 29377142816975,
                "product_id": 6805262532815,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_aa98cef4-314a-49fd-af71-5945ec39725f.jpg?v=1629052887"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262532815",
        "status": "active",
        "variants": [
            {
                "id": 40499688308943,
                "product_id": 6805262532815,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:41:27Z",
                "updated_at": "2021-08-15T18:41:27Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499688308943"
            }
        ]
    },
    {
        "id": 6805262565583,
        "title": "Example Hat 282",
        "handle": "282",
        "created_at": "2021-08-15T18:41:32Z",
        "updated_at": "2021-11-07T10:33:48Z",
        "options": [
            {
                "id": 8720157769935,
                "product_id": 6805262565583,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377142849743,
            "product_id": 6805262565583,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a3d1bc63-c2df-43cb-bace-d662149d4f34.jpg?v=1629052892"
        },
        "images": [
            {
                "id": 29377142849743,
                "product_id": 6805262565583,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a3d1bc63-c2df-43cb-bace-d662149d4f34.jpg?v=1629052892"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262565583",
        "status": "active",
        "variants": [
            {
                "id": 40499688341711,
                "product_id": 6805262565583,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:41:32Z",
                "updated_at": "2021-08-15T18:41:32Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499688341711"
            }
        ]
    },
    {
        "id": 6805262631119,
        "title": "Example Hat 283",
        "handle": "283",
        "created_at": "2021-08-15T18:41:37Z",
        "updated_at": "2021-11-07T10:33:48Z",
        "options": [
            {
                "id": 8720157835471,
                "product_id": 6805262631119,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377143046351,
            "product_id": 6805262631119,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_cb438b58-017b-428e-a820-491713aa4b8c.jpg?v=1629052897"
        },
        "images": [
            {
                "id": 29377143046351,
                "product_id": 6805262631119,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_cb438b58-017b-428e-a820-491713aa4b8c.jpg?v=1629052897"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262631119",
        "status": "active",
        "variants": [
            {
                "id": 40499688407247,
                "product_id": 6805262631119,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:41:37Z",
                "updated_at": "2021-08-15T18:41:37Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499688407247"
            }
        ]
    },
    {
        "id": 6805262729423,
        "title": "Example Hat 284",
        "handle": "284",
        "created_at": "2021-08-15T18:41:42Z",
        "updated_at": "2021-11-07T10:33:48Z",
        "options": [
            {
                "id": 8720157966543,
                "product_id": 6805262729423,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377143111887,
            "product_id": 6805262729423,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4f8ba945-919b-4559-bd41-aacde96fa7fa.jpg?v=1629052902"
        },
        "images": [
            {
                "id": 29377143111887,
                "product_id": 6805262729423,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4f8ba945-919b-4559-bd41-aacde96fa7fa.jpg?v=1629052902"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262729423",
        "status": "active",
        "variants": [
            {
                "id": 40499688538319,
                "product_id": 6805262729423,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:41:42Z",
                "updated_at": "2021-08-15T18:41:42Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499688538319"
            }
        ]
    },
    {
        "id": 6805262762191,
        "title": "Example Hat 285",
        "handle": "285",
        "created_at": "2021-08-15T18:41:46Z",
        "updated_at": "2021-11-07T10:33:48Z",
        "options": [
            {
                "id": 8720157999311,
                "product_id": 6805262762191,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377143144655,
            "product_id": 6805262762191,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9c65c4f1-cf5c-4d42-9ad7-f3c8e1643d76.jpg?v=1629052907"
        },
        "images": [
            {
                "id": 29377143144655,
                "product_id": 6805262762191,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9c65c4f1-cf5c-4d42-9ad7-f3c8e1643d76.jpg?v=1629052907"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262762191",
        "status": "active",
        "variants": [
            {
                "id": 40499691454671,
                "product_id": 6805262762191,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:41:47Z",
                "updated_at": "2021-08-15T18:41:47Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499691454671"
            }
        ]
    },
    {
        "id": 6805262794959,
        "title": "Example Hat 286",
        "handle": "286",
        "created_at": "2021-08-15T18:41:51Z",
        "updated_at": "2021-11-07T10:33:48Z",
        "options": [
            {
                "id": 8720158032079,
                "product_id": 6805262794959,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377143210191,
            "product_id": 6805262794959,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8972770f-ce28-4d9c-8d59-464b26b63925.jpg?v=1629052911"
        },
        "images": [
            {
                "id": 29377143210191,
                "product_id": 6805262794959,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8972770f-ce28-4d9c-8d59-464b26b63925.jpg?v=1629052911"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262794959",
        "status": "active",
        "variants": [
            {
                "id": 40499691782351,
                "product_id": 6805262794959,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:41:52Z",
                "updated_at": "2021-08-15T18:41:52Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499691782351"
            }
        ]
    },
    {
        "id": 6805262827727,
        "title": "Example Hat 287",
        "handle": "287",
        "created_at": "2021-08-15T18:41:57Z",
        "updated_at": "2021-11-07T10:33:48Z",
        "options": [
            {
                "id": 8720158064847,
                "product_id": 6805262827727,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377143308495,
            "product_id": 6805262827727,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_17a3fa36-f387-465e-a87e-cd5e23831855.jpg?v=1629052917"
        },
        "images": [
            {
                "id": 29377143308495,
                "product_id": 6805262827727,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_17a3fa36-f387-465e-a87e-cd5e23831855.jpg?v=1629052917"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262827727",
        "status": "active",
        "variants": [
            {
                "id": 40499691815119,
                "product_id": 6805262827727,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:41:57Z",
                "updated_at": "2021-08-15T18:41:57Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499691815119"
            }
        ]
    },
    {
        "id": 6805262860495,
        "title": "Example Hat 288",
        "handle": "288",
        "created_at": "2021-08-15T18:42:01Z",
        "updated_at": "2021-11-07T10:33:48Z",
        "options": [
            {
                "id": 8720158097615,
                "product_id": 6805262860495,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377143570639,
            "product_id": 6805262860495,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f44528c4-e064-4a82-94e0-cd688cc9b1be.jpg?v=1629052921"
        },
        "images": [
            {
                "id": 29377143570639,
                "product_id": 6805262860495,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f44528c4-e064-4a82-94e0-cd688cc9b1be.jpg?v=1629052921"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262860495",
        "status": "active",
        "variants": [
            {
                "id": 40499691847887,
                "product_id": 6805262860495,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:42:01Z",
                "updated_at": "2021-08-15T18:42:01Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499691847887"
            }
        ]
    },
    {
        "id": 6805262926031,
        "title": "Example Hat 289",
        "handle": "289",
        "created_at": "2021-08-15T18:42:06Z",
        "updated_at": "2021-11-07T10:33:49Z",
        "options": [
            {
                "id": 8720158163151,
                "product_id": 6805262926031,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377143767247,
            "product_id": 6805262926031,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_92c18135-d6b0-4f09-98a3-83fa77bdabe3.jpg?v=1629052926"
        },
        "images": [
            {
                "id": 29377143767247,
                "product_id": 6805262926031,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_92c18135-d6b0-4f09-98a3-83fa77bdabe3.jpg?v=1629052926"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262926031",
        "status": "active",
        "variants": [
            {
                "id": 40499691946191,
                "product_id": 6805262926031,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:42:06Z",
                "updated_at": "2021-08-15T18:42:06Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499691946191"
            }
        ]
    },
    {
        "id": 6805249851599,
        "title": "Example Hat 29",
        "handle": "29",
        "created_at": "2021-08-15T18:22:06Z",
        "updated_at": "2021-11-07T10:33:18Z",
        "options": [
            {
                "id": 8720142991567,
                "product_id": 6805249851599,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377103134927,
            "product_id": 6805249851599,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b497a111-e508-4b77-aed6-f1f8ecdd260d.jpg?v=1629051726"
        },
        "images": [
            {
                "id": 29377103134927,
                "product_id": 6805249851599,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b497a111-e508-4b77-aed6-f1f8ecdd260d.jpg?v=1629051726"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249851599",
        "status": "active",
        "variants": [
            {
                "id": 40499647283407,
                "product_id": 6805249851599,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:22:06Z",
                "updated_at": "2021-08-15T18:22:06Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499647283407"
            }
        ]
    },
    {
        "id": 6805262958799,
        "title": "Example Hat 290",
        "handle": "290",
        "created_at": "2021-08-15T18:42:10Z",
        "updated_at": "2021-11-07T10:33:49Z",
        "options": [
            {
                "id": 8720158195919,
                "product_id": 6805262958799,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377144160463,
            "product_id": 6805262958799,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c2310d2a-8c37-4f22-a9f4-79c5aacbba61.jpg?v=1629052930"
        },
        "images": [
            {
                "id": 29377144160463,
                "product_id": 6805262958799,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c2310d2a-8c37-4f22-a9f4-79c5aacbba61.jpg?v=1629052930"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262958799",
        "status": "active",
        "variants": [
            {
                "id": 40499691978959,
                "product_id": 6805262958799,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:42:10Z",
                "updated_at": "2021-08-15T18:42:10Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499691978959"
            }
        ]
    },
    {
        "id": 6805262991567,
        "title": "Example Hat 291",
        "handle": "291",
        "created_at": "2021-08-15T18:42:14Z",
        "updated_at": "2021-11-07T10:33:49Z",
        "options": [
            {
                "id": 8720158228687,
                "product_id": 6805262991567,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377144357071,
            "product_id": 6805262991567,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fb97a45a-67f4-4f74-b007-a7f5dfe21fca.jpg?v=1629052934"
        },
        "images": [
            {
                "id": 29377144357071,
                "product_id": 6805262991567,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_fb97a45a-67f4-4f74-b007-a7f5dfe21fca.jpg?v=1629052934"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805262991567",
        "status": "active",
        "variants": [
            {
                "id": 40499692011727,
                "product_id": 6805262991567,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:42:14Z",
                "updated_at": "2021-08-15T18:42:14Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499692011727"
            }
        ]
    },
    {
        "id": 6805263024335,
        "title": "Example Hat 292",
        "handle": "292",
        "created_at": "2021-08-15T18:42:19Z",
        "updated_at": "2021-11-07T10:33:49Z",
        "options": [
            {
                "id": 8720158261455,
                "product_id": 6805263024335,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377144717519,
            "product_id": 6805263024335,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6a2f4751-1bbd-4cfc-9704-e9122c2fd133.jpg?v=1629052939"
        },
        "images": [
            {
                "id": 29377144717519,
                "product_id": 6805263024335,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6a2f4751-1bbd-4cfc-9704-e9122c2fd133.jpg?v=1629052939"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805263024335",
        "status": "active",
        "variants": [
            {
                "id": 40499692044495,
                "product_id": 6805263024335,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:42:19Z",
                "updated_at": "2021-08-15T18:42:19Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499692044495"
            }
        ]
    },
    {
        "id": 6805263089871,
        "title": "Example Hat 293",
        "handle": "293",
        "created_at": "2021-08-15T18:42:24Z",
        "updated_at": "2021-11-07T10:33:49Z",
        "options": [
            {
                "id": 8720158359759,
                "product_id": 6805263089871,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377145077967,
            "product_id": 6805263089871,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a415514f-14d4-4130-80f0-1efdef9f135b.jpg?v=1629052944"
        },
        "images": [
            {
                "id": 29377145077967,
                "product_id": 6805263089871,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a415514f-14d4-4130-80f0-1efdef9f135b.jpg?v=1629052944"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805263089871",
        "status": "active",
        "variants": [
            {
                "id": 40499692470479,
                "product_id": 6805263089871,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:42:24Z",
                "updated_at": "2021-08-15T18:42:24Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499692470479"
            }
        ]
    },
    {
        "id": 6805263122639,
        "title": "Example Hat 294",
        "handle": "294",
        "created_at": "2021-08-15T18:42:29Z",
        "updated_at": "2021-11-07T10:33:49Z",
        "options": [
            {
                "id": 8720158392527,
                "product_id": 6805263122639,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377145340111,
            "product_id": 6805263122639,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4b959fb7-b8ab-4e17-8805-202b78a7984a.jpg?v=1629052949"
        },
        "images": [
            {
                "id": 29377145340111,
                "product_id": 6805263122639,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4b959fb7-b8ab-4e17-8805-202b78a7984a.jpg?v=1629052949"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805263122639",
        "status": "active",
        "variants": [
            {
                "id": 40499692536015,
                "product_id": 6805263122639,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:42:29Z",
                "updated_at": "2021-08-15T18:42:29Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499692536015"
            }
        ]
    },
    {
        "id": 6805263155407,
        "title": "Example Hat 295",
        "handle": "295",
        "created_at": "2021-08-15T18:42:33Z",
        "updated_at": "2021-11-07T10:33:49Z",
        "options": [
            {
                "id": 8720158425295,
                "product_id": 6805263155407,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377145405647,
            "product_id": 6805263155407,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f9897f27-68c1-4bb0-bc8b-1bc548b1a55e.jpg?v=1629052953"
        },
        "images": [
            {
                "id": 29377145405647,
                "product_id": 6805263155407,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f9897f27-68c1-4bb0-bc8b-1bc548b1a55e.jpg?v=1629052953"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805263155407",
        "status": "active",
        "variants": [
            {
                "id": 40499692568783,
                "product_id": 6805263155407,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:42:33Z",
                "updated_at": "2021-08-15T18:42:33Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499692568783"
            }
        ]
    },
    {
        "id": 6805263188175,
        "title": "Example Hat 296",
        "handle": "296",
        "created_at": "2021-08-15T18:42:37Z",
        "updated_at": "2021-11-07T10:33:49Z",
        "options": [
            {
                "id": 8720158458063,
                "product_id": 6805263188175,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377145438415,
            "product_id": 6805263188175,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_874ec34b-3d93-4c70-b05d-51de1eecb3c5.jpg?v=1629052957"
        },
        "images": [
            {
                "id": 29377145438415,
                "product_id": 6805263188175,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_874ec34b-3d93-4c70-b05d-51de1eecb3c5.jpg?v=1629052957"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805263188175",
        "status": "active",
        "variants": [
            {
                "id": 40499692601551,
                "product_id": 6805263188175,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:42:37Z",
                "updated_at": "2021-08-15T18:42:37Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499692601551"
            }
        ]
    },
    {
        "id": 6805263220943,
        "title": "Example Hat 297",
        "handle": "297",
        "created_at": "2021-08-15T18:42:41Z",
        "updated_at": "2021-11-07T10:33:49Z",
        "options": [
            {
                "id": 8720158490831,
                "product_id": 6805263220943,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377145471183,
            "product_id": 6805263220943,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_eae42882-bff5-4002-a273-39e59604b695.jpg?v=1629052961"
        },
        "images": [
            {
                "id": 29377145471183,
                "product_id": 6805263220943,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_eae42882-bff5-4002-a273-39e59604b695.jpg?v=1629052961"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805263220943",
        "status": "active",
        "variants": [
            {
                "id": 40499692634319,
                "product_id": 6805263220943,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:42:41Z",
                "updated_at": "2021-08-15T18:42:41Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499692634319"
            }
        ]
    },
    {
        "id": 6805263286479,
        "title": "Example Hat 298",
        "handle": "298",
        "created_at": "2021-08-15T18:42:46Z",
        "updated_at": "2021-11-07T10:33:50Z",
        "options": [
            {
                "id": 8720158556367,
                "product_id": 6805263286479,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377145503951,
            "product_id": 6805263286479,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_09213f37-3ec0-4e81-a6be-4c0ad62f64a9.jpg?v=1629052966"
        },
        "images": [
            {
                "id": 29377145503951,
                "product_id": 6805263286479,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_09213f37-3ec0-4e81-a6be-4c0ad62f64a9.jpg?v=1629052966"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805263286479",
        "status": "active",
        "variants": [
            {
                "id": 40499692699855,
                "product_id": 6805263286479,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:42:46Z",
                "updated_at": "2021-08-15T18:42:46Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499692699855"
            }
        ]
    },
    {
        "id": 6805248868559,
        "title": "Example Hat 3",
        "handle": "3",
        "created_at": "2021-08-15T18:20:10Z",
        "updated_at": "2021-11-07T10:33:16Z",
        "options": [
            {
                "id": 8720141910223,
                "product_id": 6805248868559,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377097236687,
            "product_id": 6805248868559,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9f0c3e30-f077-497b-bd1a-f4aecb3447dc.jpg?v=1629051610"
        },
        "images": [
            {
                "id": 29377097236687,
                "product_id": 6805248868559,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9f0c3e30-f077-497b-bd1a-f4aecb3447dc.jpg?v=1629051610"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805248868559",
        "status": "active",
        "variants": [
            {
                "id": 40499643613391,
                "product_id": 6805248868559,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:20:10Z",
                "updated_at": "2021-08-15T18:20:10Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499643613391"
            }
        ]
    },
    {
        "id": 6805249884367,
        "title": "Example Hat 30",
        "handle": "30",
        "created_at": "2021-08-15T18:22:10Z",
        "updated_at": "2021-11-07T10:33:19Z",
        "options": [
            {
                "id": 8720143024335,
                "product_id": 6805249884367,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377103298767,
            "product_id": 6805249884367,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_73349169-87d1-4004-9169-8c2e1a4fcf74.jpg?v=1629051730"
        },
        "images": [
            {
                "id": 29377103298767,
                "product_id": 6805249884367,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_73349169-87d1-4004-9169-8c2e1a4fcf74.jpg?v=1629051730"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249884367",
        "status": "active",
        "variants": [
            {
                "id": 40499647316175,
                "product_id": 6805249884367,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:22:10Z",
                "updated_at": "2021-08-15T18:22:10Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499647316175"
            }
        ]
    },
    {
        "id": 6805249949903,
        "title": "Example Hat 31",
        "handle": "31",
        "created_at": "2021-08-15T18:22:14Z",
        "updated_at": "2021-11-07T10:33:19Z",
        "options": [
            {
                "id": 8720143122639,
                "product_id": 6805249949903,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377103593679,
            "product_id": 6805249949903,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4a1cee98-fc8d-4759-99d8-7c67ffe87ce2.jpg?v=1629051734"
        },
        "images": [
            {
                "id": 29377103593679,
                "product_id": 6805249949903,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4a1cee98-fc8d-4759-99d8-7c67ffe87ce2.jpg?v=1629051734"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249949903",
        "status": "active",
        "variants": [
            {
                "id": 40499648266447,
                "product_id": 6805249949903,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:22:14Z",
                "updated_at": "2021-08-15T18:22:14Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499648266447"
            }
        ]
    },
    {
        "id": 6805250015439,
        "title": "Example Hat 32",
        "handle": "32",
        "created_at": "2021-08-15T18:22:19Z",
        "updated_at": "2021-11-07T10:33:19Z",
        "options": [
            {
                "id": 8720143188175,
                "product_id": 6805250015439,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377103823055,
            "product_id": 6805250015439,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a84ad47c-32d2-4022-acc0-0db995f4f8ff.jpg?v=1629051739"
        },
        "images": [
            {
                "id": 29377103823055,
                "product_id": 6805250015439,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a84ad47c-32d2-4022-acc0-0db995f4f8ff.jpg?v=1629051739"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250015439",
        "status": "active",
        "variants": [
            {
                "id": 40499648430287,
                "product_id": 6805250015439,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:22:19Z",
                "updated_at": "2021-08-15T18:22:19Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499648430287"
            }
        ]
    },
    {
        "id": 6805250048207,
        "title": "Example Hat 33",
        "handle": "33",
        "created_at": "2021-08-15T18:22:23Z",
        "updated_at": "2021-11-07T10:33:19Z",
        "options": [
            {
                "id": 8720143220943,
                "product_id": 6805250048207,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377104249039,
            "product_id": 6805250048207,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5b253635-67fc-4caa-a544-96aae0b09d1c.jpg?v=1629051743"
        },
        "images": [
            {
                "id": 29377104249039,
                "product_id": 6805250048207,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5b253635-67fc-4caa-a544-96aae0b09d1c.jpg?v=1629051743"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250048207",
        "status": "active",
        "variants": [
            {
                "id": 40499648463055,
                "product_id": 6805250048207,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:22:23Z",
                "updated_at": "2021-08-15T18:22:23Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499648463055"
            }
        ]
    },
    {
        "id": 6805250080975,
        "title": "Example Hat 34",
        "handle": "34",
        "created_at": "2021-08-15T18:22:28Z",
        "updated_at": "2021-11-07T10:33:19Z",
        "options": [
            {
                "id": 8720143253711,
                "product_id": 6805250080975,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377104478415,
            "product_id": 6805250080975,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3e6032eb-5e55-462c-9bb9-d8f54f086aed.jpg?v=1629051748"
        },
        "images": [
            {
                "id": 29377104478415,
                "product_id": 6805250080975,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3e6032eb-5e55-462c-9bb9-d8f54f086aed.jpg?v=1629051748"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250080975",
        "status": "active",
        "variants": [
            {
                "id": 40499648495823,
                "product_id": 6805250080975,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:22:28Z",
                "updated_at": "2021-08-15T18:22:28Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499648495823"
            }
        ]
    },
    {
        "id": 6805250113743,
        "title": "Example Hat 35",
        "handle": "35",
        "created_at": "2021-08-15T18:22:32Z",
        "updated_at": "2021-11-07T10:33:19Z",
        "options": [
            {
                "id": 8720143286479,
                "product_id": 6805250113743,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377104642255,
            "product_id": 6805250113743,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_71695a1a-df50-4980-83e6-844deae5b995.jpg?v=1629051752"
        },
        "images": [
            {
                "id": 29377104642255,
                "product_id": 6805250113743,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_71695a1a-df50-4980-83e6-844deae5b995.jpg?v=1629051752"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250113743",
        "status": "active",
        "variants": [
            {
                "id": 40499648528591,
                "product_id": 6805250113743,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:22:32Z",
                "updated_at": "2021-08-15T18:22:32Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499648528591"
            }
        ]
    },
    {
        "id": 6805250146511,
        "title": "Example Hat 36",
        "handle": "36",
        "created_at": "2021-08-15T18:22:37Z",
        "updated_at": "2021-11-07T10:33:19Z",
        "options": [
            {
                "id": 8720143319247,
                "product_id": 6805250146511,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377104937167,
            "product_id": 6805250146511,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_93f06ab8-45ac-46a9-8752-cbf534c6fd48.jpg?v=1629051757"
        },
        "images": [
            {
                "id": 29377104937167,
                "product_id": 6805250146511,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_93f06ab8-45ac-46a9-8752-cbf534c6fd48.jpg?v=1629051757"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250146511",
        "status": "active",
        "variants": [
            {
                "id": 40499648561359,
                "product_id": 6805250146511,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:22:37Z",
                "updated_at": "2021-08-15T18:22:37Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499648561359"
            }
        ]
    },
    {
        "id": 6805250179279,
        "title": "Example Hat 37",
        "handle": "37",
        "created_at": "2021-08-15T18:22:41Z",
        "updated_at": "2021-11-07T10:33:19Z",
        "options": [
            {
                "id": 8720143352015,
                "product_id": 6805250179279,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377105133775,
            "product_id": 6805250179279,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4e80e040-7118-40ce-b7fd-9139949276ca.jpg?v=1629051761"
        },
        "images": [
            {
                "id": 29377105133775,
                "product_id": 6805250179279,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4e80e040-7118-40ce-b7fd-9139949276ca.jpg?v=1629051761"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250179279",
        "status": "active",
        "variants": [
            {
                "id": 40499648594127,
                "product_id": 6805250179279,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:22:41Z",
                "updated_at": "2021-08-15T18:22:41Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499648594127"
            }
        ]
    },
    {
        "id": 6805250212047,
        "title": "Example Hat 38",
        "handle": "38",
        "created_at": "2021-08-15T18:22:46Z",
        "updated_at": "2021-11-07T10:33:19Z",
        "options": [
            {
                "id": 8720143384783,
                "product_id": 6805250212047,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377105363151,
            "product_id": 6805250212047,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_999f9437-d360-4310-b4dd-03adaff42a26.jpg?v=1629051766"
        },
        "images": [
            {
                "id": 29377105363151,
                "product_id": 6805250212047,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_999f9437-d360-4310-b4dd-03adaff42a26.jpg?v=1629051766"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250212047",
        "status": "active",
        "variants": [
            {
                "id": 40499648626895,
                "product_id": 6805250212047,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:22:46Z",
                "updated_at": "2021-08-15T18:22:46Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499648626895"
            }
        ]
    },
    {
        "id": 6805250310351,
        "title": "Example Hat 39",
        "handle": "39",
        "created_at": "2021-08-15T18:22:50Z",
        "updated_at": "2021-11-07T10:33:19Z",
        "options": [
            {
                "id": 8720143548623,
                "product_id": 6805250310351,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377105559759,
            "product_id": 6805250310351,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_66c297f2-1424-479e-b4ab-88eecd82aa65.jpg?v=1629051770"
        },
        "images": [
            {
                "id": 29377105559759,
                "product_id": 6805250310351,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_66c297f2-1424-479e-b4ab-88eecd82aa65.jpg?v=1629051770"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250310351",
        "status": "active",
        "variants": [
            {
                "id": 40499649282255,
                "product_id": 6805250310351,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:22:50Z",
                "updated_at": "2021-08-15T18:22:50Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499649282255"
            }
        ]
    },
    {
        "id": 6805248901327,
        "title": "Example Hat 4",
        "handle": "4",
        "created_at": "2021-08-15T18:20:14Z",
        "updated_at": "2021-11-07T10:33:16Z",
        "options": [
            {
                "id": 8720141942991,
                "product_id": 6805248901327,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377097531599,
            "product_id": 6805248901327,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9e37f622-560d-4ad6-8f29-ad6ad1800b40.jpg?v=1629051614"
        },
        "images": [
            {
                "id": 29377097531599,
                "product_id": 6805248901327,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9e37f622-560d-4ad6-8f29-ad6ad1800b40.jpg?v=1629051614"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805248901327",
        "status": "active",
        "variants": [
            {
                "id": 40499643646159,
                "product_id": 6805248901327,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:20:14Z",
                "updated_at": "2021-08-15T18:20:14Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499643646159"
            }
        ]
    },
    {
        "id": 6805250343119,
        "title": "Example Hat 40",
        "handle": "40",
        "created_at": "2021-08-15T18:22:54Z",
        "updated_at": "2021-11-07T10:33:20Z",
        "options": [
            {
                "id": 8720143581391,
                "product_id": 6805250343119,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377106116815,
            "product_id": 6805250343119,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c329f107-4dc7-47a0-9b9c-57d35347f09a.jpg?v=1629051774"
        },
        "images": [
            {
                "id": 29377106116815,
                "product_id": 6805250343119,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_c329f107-4dc7-47a0-9b9c-57d35347f09a.jpg?v=1629051774"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250343119",
        "status": "active",
        "variants": [
            {
                "id": 40499649347791,
                "product_id": 6805250343119,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:22:54Z",
                "updated_at": "2021-08-15T18:22:54Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499649347791"
            }
        ]
    },
    {
        "id": 6805250375887,
        "title": "Example Hat 41",
        "handle": "41",
        "created_at": "2021-08-15T18:22:59Z",
        "updated_at": "2021-11-07T10:33:20Z",
        "options": [
            {
                "id": 8720143614159,
                "product_id": 6805250375887,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377106346191,
            "product_id": 6805250375887,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4e62e14c-68df-4298-8f35-4572a12c10c9.jpg?v=1629051779"
        },
        "images": [
            {
                "id": 29377106346191,
                "product_id": 6805250375887,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4e62e14c-68df-4298-8f35-4572a12c10c9.jpg?v=1629051779"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250375887",
        "status": "active",
        "variants": [
            {
                "id": 40499649413327,
                "product_id": 6805250375887,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:22:59Z",
                "updated_at": "2021-08-15T18:22:59Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499649413327"
            }
        ]
    },
    {
        "id": 6805250408655,
        "title": "Example Hat 42",
        "handle": "42",
        "created_at": "2021-08-15T18:23:03Z",
        "updated_at": "2021-11-07T10:33:20Z",
        "options": [
            {
                "id": 8720143646927,
                "product_id": 6805250408655,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377106542799,
            "product_id": 6805250408655,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_2363d207-d8f5-459c-a2be-b69efadf07a2.jpg?v=1629051783"
        },
        "images": [
            {
                "id": 29377106542799,
                "product_id": 6805250408655,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_2363d207-d8f5-459c-a2be-b69efadf07a2.jpg?v=1629051783"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250408655",
        "status": "active",
        "variants": [
            {
                "id": 40499649478863,
                "product_id": 6805250408655,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:23:03Z",
                "updated_at": "2021-08-15T18:23:03Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499649478863"
            }
        ]
    },
    {
        "id": 6805250441423,
        "title": "Example Hat 43",
        "handle": "43",
        "created_at": "2021-08-15T18:23:07Z",
        "updated_at": "2021-11-07T10:33:20Z",
        "options": [
            {
                "id": 8720143679695,
                "product_id": 6805250441423,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377106739407,
            "product_id": 6805250441423,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5fe6b65d-07a9-44ce-8a57-e0fa5f5ec148.jpg?v=1629051787"
        },
        "images": [
            {
                "id": 29377106739407,
                "product_id": 6805250441423,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5fe6b65d-07a9-44ce-8a57-e0fa5f5ec148.jpg?v=1629051787"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250441423",
        "status": "active",
        "variants": [
            {
                "id": 40499649544399,
                "product_id": 6805250441423,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:23:07Z",
                "updated_at": "2021-08-15T18:23:07Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499649544399"
            }
        ]
    },
    {
        "id": 6805250474191,
        "title": "Example Hat 44",
        "handle": "44",
        "created_at": "2021-08-15T18:23:12Z",
        "updated_at": "2021-11-07T10:33:20Z",
        "options": [
            {
                "id": 8720143712463,
                "product_id": 6805250474191,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377107001551,
            "product_id": 6805250474191,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8220e39c-d578-46fc-a53e-b0caf024e3d4.jpg?v=1629051792"
        },
        "images": [
            {
                "id": 29377107001551,
                "product_id": 6805250474191,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8220e39c-d578-46fc-a53e-b0caf024e3d4.jpg?v=1629051792"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250474191",
        "status": "active",
        "variants": [
            {
                "id": 40499649642703,
                "product_id": 6805250474191,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:23:12Z",
                "updated_at": "2021-08-15T18:23:12Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499649642703"
            }
        ]
    },
    {
        "id": 6805250506959,
        "title": "Example Hat 45",
        "handle": "45",
        "created_at": "2021-08-15T18:23:17Z",
        "updated_at": "2021-11-07T10:33:20Z",
        "options": [
            {
                "id": 8720143745231,
                "product_id": 6805250506959,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377107230927,
            "product_id": 6805250506959,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d4d5d149-f94d-4c9d-ae61-d2465c7d9caa.jpg?v=1629051797"
        },
        "images": [
            {
                "id": 29377107230927,
                "product_id": 6805250506959,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d4d5d149-f94d-4c9d-ae61-d2465c7d9caa.jpg?v=1629051797"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250506959",
        "status": "active",
        "variants": [
            {
                "id": 40499649708239,
                "product_id": 6805250506959,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:23:17Z",
                "updated_at": "2021-08-15T18:23:17Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499649708239"
            }
        ]
    },
    {
        "id": 6805250539727,
        "title": "Example Hat 46",
        "handle": "46",
        "created_at": "2021-08-15T18:23:22Z",
        "updated_at": "2021-11-07T10:33:20Z",
        "options": [
            {
                "id": 8720143777999,
                "product_id": 6805250539727,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377107493071,
            "product_id": 6805250539727,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_2905820d-27f7-48ab-bf11-a7cb063d5905.jpg?v=1629051802"
        },
        "images": [
            {
                "id": 29377107493071,
                "product_id": 6805250539727,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_2905820d-27f7-48ab-bf11-a7cb063d5905.jpg?v=1629051802"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250539727",
        "status": "active",
        "variants": [
            {
                "id": 40499649773775,
                "product_id": 6805250539727,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:23:22Z",
                "updated_at": "2021-08-15T18:23:22Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499649773775"
            }
        ]
    },
    {
        "id": 6805250605263,
        "title": "Example Hat 47",
        "handle": "47",
        "created_at": "2021-08-15T18:23:26Z",
        "updated_at": "2021-11-07T10:33:20Z",
        "options": [
            {
                "id": 8720143876303,
                "product_id": 6805250605263,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377107656911,
            "product_id": 6805250605263,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ac93a90a-7dea-44cb-bee8-815dd7d20053.jpg?v=1629051806"
        },
        "images": [
            {
                "id": 29377107656911,
                "product_id": 6805250605263,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ac93a90a-7dea-44cb-bee8-815dd7d20053.jpg?v=1629051806"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250605263",
        "status": "active",
        "variants": [
            {
                "id": 40499650625743,
                "product_id": 6805250605263,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:23:26Z",
                "updated_at": "2021-08-15T18:23:26Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499650625743"
            }
        ]
    },
    {
        "id": 6805250638031,
        "title": "Example Hat 48",
        "handle": "48",
        "created_at": "2021-08-15T18:23:31Z",
        "updated_at": "2021-11-07T10:33:20Z",
        "options": [
            {
                "id": 8720143909071,
                "product_id": 6805250638031,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377107886287,
            "product_id": 6805250638031,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8f877a7b-5625-49db-9d91-498d9b312fe0.jpg?v=1629051811"
        },
        "images": [
            {
                "id": 29377107886287,
                "product_id": 6805250638031,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8f877a7b-5625-49db-9d91-498d9b312fe0.jpg?v=1629051811"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250638031",
        "status": "active",
        "variants": [
            {
                "id": 40499650691279,
                "product_id": 6805250638031,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:23:31Z",
                "updated_at": "2021-08-15T18:23:31Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499650691279"
            }
        ]
    },
    {
        "id": 6805250670799,
        "title": "Example Hat 49",
        "handle": "49",
        "created_at": "2021-08-15T18:23:35Z",
        "updated_at": "2021-11-07T10:33:20Z",
        "options": [
            {
                "id": 8720143941839,
                "product_id": 6805250670799,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377108050127,
            "product_id": 6805250670799,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_7be5658e-3892-4433-bee2-d1369889849c.jpg?v=1629051815"
        },
        "images": [
            {
                "id": 29377108050127,
                "product_id": 6805250670799,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_7be5658e-3892-4433-bee2-d1369889849c.jpg?v=1629051815"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250670799",
        "status": "active",
        "variants": [
            {
                "id": 40499650756815,
                "product_id": 6805250670799,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:23:35Z",
                "updated_at": "2021-08-15T18:23:35Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499650756815"
            }
        ]
    },
    {
        "id": 6805248934095,
        "title": "Example Hat 5",
        "handle": "5",
        "created_at": "2021-08-15T18:20:18Z",
        "updated_at": "2021-11-07T10:33:16Z",
        "options": [
            {
                "id": 8720141975759,
                "product_id": 6805248934095,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377097728207,
            "product_id": 6805248934095,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8d8479f6-fb6c-4813-a8b2-3be1ed9dd235.jpg?v=1629051618"
        },
        "images": [
            {
                "id": 29377097728207,
                "product_id": 6805248934095,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8d8479f6-fb6c-4813-a8b2-3be1ed9dd235.jpg?v=1629051618"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805248934095",
        "status": "active",
        "variants": [
            {
                "id": 40499643678927,
                "product_id": 6805248934095,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:20:18Z",
                "updated_at": "2021-08-15T18:20:18Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499643678927"
            }
        ]
    },
    {
        "id": 6805250703567,
        "title": "Example Hat 50",
        "handle": "50",
        "created_at": "2021-08-15T18:23:39Z",
        "updated_at": "2021-11-07T10:33:21Z",
        "options": [
            {
                "id": 8720143974607,
                "product_id": 6805250703567,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377108246735,
            "product_id": 6805250703567,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e8ce7aaf-3b20-4f97-bec4-8c0988ed0a07.jpg?v=1629051819"
        },
        "images": [
            {
                "id": 29377108246735,
                "product_id": 6805250703567,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e8ce7aaf-3b20-4f97-bec4-8c0988ed0a07.jpg?v=1629051819"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250703567",
        "status": "active",
        "variants": [
            {
                "id": 40499650822351,
                "product_id": 6805250703567,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:23:39Z",
                "updated_at": "2021-08-15T18:23:39Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499650822351"
            }
        ]
    },
    {
        "id": 6805250736335,
        "title": "Example Hat 51",
        "handle": "51",
        "created_at": "2021-08-15T18:23:43Z",
        "updated_at": "2021-11-07T10:33:21Z",
        "options": [
            {
                "id": 8720144007375,
                "product_id": 6805250736335,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377108345039,
            "product_id": 6805250736335,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_44616f6a-fb93-4553-9790-2e2e9e9fa382.jpg?v=1629051824"
        },
        "images": [
            {
                "id": 29377108345039,
                "product_id": 6805250736335,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_44616f6a-fb93-4553-9790-2e2e9e9fa382.jpg?v=1629051824"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250736335",
        "status": "active",
        "variants": [
            {
                "id": 40499650887887,
                "product_id": 6805250736335,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:23:44Z",
                "updated_at": "2021-08-15T18:23:44Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499650887887"
            }
        ]
    },
    {
        "id": 6805250769103,
        "title": "Example Hat 52",
        "handle": "52",
        "created_at": "2021-08-15T18:23:48Z",
        "updated_at": "2021-11-07T10:33:21Z",
        "options": [
            {
                "id": 8720144040143,
                "product_id": 6805250769103,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377108476111,
            "product_id": 6805250769103,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a32eba46-37d7-49b0-99b1-b90e8cf9e884.jpg?v=1629051828"
        },
        "images": [
            {
                "id": 29377108476111,
                "product_id": 6805250769103,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a32eba46-37d7-49b0-99b1-b90e8cf9e884.jpg?v=1629051828"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250769103",
        "status": "active",
        "variants": [
            {
                "id": 40499650953423,
                "product_id": 6805250769103,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:23:48Z",
                "updated_at": "2021-08-15T18:23:48Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499650953423"
            }
        ]
    },
    {
        "id": 6805250834639,
        "title": "Example Hat 53",
        "handle": "53",
        "created_at": "2021-08-15T18:23:52Z",
        "updated_at": "2021-11-07T10:33:21Z",
        "options": [
            {
                "id": 8720144105679,
                "product_id": 6805250834639,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377108705487,
            "product_id": 6805250834639,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_92ffd3e9-9883-4541-ad01-6c62a0d8de66.jpg?v=1629051832"
        },
        "images": [
            {
                "id": 29377108705487,
                "product_id": 6805250834639,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_92ffd3e9-9883-4541-ad01-6c62a0d8de66.jpg?v=1629051832"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250834639",
        "status": "active",
        "variants": [
            {
                "id": 40499651051727,
                "product_id": 6805250834639,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:23:52Z",
                "updated_at": "2021-08-15T18:23:52Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499651051727"
            }
        ]
    },
    {
        "id": 6805250932943,
        "title": "Example Hat 54",
        "handle": "54",
        "created_at": "2021-08-15T18:23:56Z",
        "updated_at": "2021-11-07T10:33:21Z",
        "options": [
            {
                "id": 8720144236751,
                "product_id": 6805250932943,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377108803791,
            "product_id": 6805250932943,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6cb2b6e8-6b19-4499-a151-00a91ce9c629.jpg?v=1629051836"
        },
        "images": [
            {
                "id": 29377108803791,
                "product_id": 6805250932943,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6cb2b6e8-6b19-4499-a151-00a91ce9c629.jpg?v=1629051836"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250932943",
        "status": "active",
        "variants": [
            {
                "id": 40499651543247,
                "product_id": 6805250932943,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:23:56Z",
                "updated_at": "2021-08-15T18:23:56Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499651543247"
            }
        ]
    },
    {
        "id": 6805250965711,
        "title": "Example Hat 55",
        "handle": "55",
        "created_at": "2021-08-15T18:24:01Z",
        "updated_at": "2021-11-07T10:33:21Z",
        "options": [
            {
                "id": 8720144269519,
                "product_id": 6805250965711,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377109393615,
            "product_id": 6805250965711,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a88ba7a0-676c-4796-ad69-205ce056bf71.jpg?v=1629051841"
        },
        "images": [
            {
                "id": 29377109393615,
                "product_id": 6805250965711,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_a88ba7a0-676c-4796-ad69-205ce056bf71.jpg?v=1629051841"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805250965711",
        "status": "active",
        "variants": [
            {
                "id": 40499651641551,
                "product_id": 6805250965711,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:24:01Z",
                "updated_at": "2021-08-15T18:24:01Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499651641551"
            }
        ]
    },
    {
        "id": 6805251096783,
        "title": "Example Hat 56",
        "handle": "56",
        "created_at": "2021-08-15T18:24:05Z",
        "updated_at": "2021-11-07T10:33:21Z",
        "options": [
            {
                "id": 8720144400591,
                "product_id": 6805251096783,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377109754063,
            "product_id": 6805251096783,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5970c9e6-7c80-48f4-89cf-626d02e47964.jpg?v=1629051845"
        },
        "images": [
            {
                "id": 29377109754063,
                "product_id": 6805251096783,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5970c9e6-7c80-48f4-89cf-626d02e47964.jpg?v=1629051845"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251096783",
        "status": "active",
        "variants": [
            {
                "id": 40499652296911,
                "product_id": 6805251096783,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:24:05Z",
                "updated_at": "2021-08-15T18:24:05Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499652296911"
            }
        ]
    },
    {
        "id": 6805251129551,
        "title": "Example Hat 57",
        "handle": "57",
        "created_at": "2021-08-15T18:24:09Z",
        "updated_at": "2021-11-07T10:33:22Z",
        "options": [
            {
                "id": 8720144433359,
                "product_id": 6805251129551,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377110180047,
            "product_id": 6805251129551,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d342fc8d-71dd-4cf9-8cbf-5b45cc25bd08.jpg?v=1629051849"
        },
        "images": [
            {
                "id": 29377110180047,
                "product_id": 6805251129551,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d342fc8d-71dd-4cf9-8cbf-5b45cc25bd08.jpg?v=1629051849"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251129551",
        "status": "active",
        "variants": [
            {
                "id": 40499652362447,
                "product_id": 6805251129551,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:24:09Z",
                "updated_at": "2021-08-15T18:24:09Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499652362447"
            }
        ]
    },
    {
        "id": 6805251195087,
        "title": "Example Hat 58",
        "handle": "58",
        "created_at": "2021-08-15T18:24:15Z",
        "updated_at": "2021-11-07T10:33:22Z",
        "options": [
            {
                "id": 8720144531663,
                "product_id": 6805251195087,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377110999247,
            "product_id": 6805251195087,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_433f1272-7e75-422b-8b23-b0fc1ce01a4a.jpg?v=1629051855"
        },
        "images": [
            {
                "id": 29377110999247,
                "product_id": 6805251195087,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_433f1272-7e75-422b-8b23-b0fc1ce01a4a.jpg?v=1629051855"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251195087",
        "status": "active",
        "variants": [
            {
                "id": 40499652460751,
                "product_id": 6805251195087,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:24:16Z",
                "updated_at": "2021-08-15T18:24:16Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499652460751"
            }
        ]
    },
    {
        "id": 6805251260623,
        "title": "Example Hat 59",
        "handle": "59",
        "created_at": "2021-08-15T18:24:21Z",
        "updated_at": "2021-11-07T10:33:22Z",
        "options": [
            {
                "id": 8720144629967,
                "product_id": 6805251260623,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377111523535,
            "product_id": 6805251260623,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_73f0cdb2-2f3b-434e-97cc-5b8e18290d0c.jpg?v=1629051861"
        },
        "images": [
            {
                "id": 29377111523535,
                "product_id": 6805251260623,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_73f0cdb2-2f3b-434e-97cc-5b8e18290d0c.jpg?v=1629051861"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251260623",
        "status": "active",
        "variants": [
            {
                "id": 40499652919503,
                "product_id": 6805251260623,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:24:21Z",
                "updated_at": "2021-08-15T18:24:21Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499652919503"
            }
        ]
    },
    {
        "id": 6805248966863,
        "title": "Example Hat 6",
        "handle": "6",
        "created_at": "2021-08-15T18:20:24Z",
        "updated_at": "2021-11-07T10:33:16Z",
        "options": [
            {
                "id": 8720142008527,
                "product_id": 6805248966863,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377097924815,
            "product_id": 6805248966863,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_2cb2979f-e9ae-4869-bd0f-ee94f8182004.jpg?v=1629051624"
        },
        "images": [
            {
                "id": 29377097924815,
                "product_id": 6805248966863,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_2cb2979f-e9ae-4869-bd0f-ee94f8182004.jpg?v=1629051624"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805248966863",
        "status": "active",
        "variants": [
            {
                "id": 40499643711695,
                "product_id": 6805248966863,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:20:24Z",
                "updated_at": "2021-08-15T18:20:24Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499643711695"
            }
        ]
    },
    {
        "id": 6805251293391,
        "title": "Example Hat 60",
        "handle": "60",
        "created_at": "2021-08-15T18:24:25Z",
        "updated_at": "2021-11-07T10:33:22Z",
        "options": [
            {
                "id": 8720144662735,
                "product_id": 6805251293391,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377111752911,
            "product_id": 6805251293391,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ea566686-37db-47df-b224-ab072977c464.jpg?v=1629051865"
        },
        "images": [
            {
                "id": 29377111752911,
                "product_id": 6805251293391,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ea566686-37db-47df-b224-ab072977c464.jpg?v=1629051865"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251293391",
        "status": "active",
        "variants": [
            {
                "id": 40499652952271,
                "product_id": 6805251293391,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:24:25Z",
                "updated_at": "2021-08-15T18:24:25Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499652952271"
            }
        ]
    },
    {
        "id": 6805251358927,
        "title": "Example Hat 61",
        "handle": "61",
        "created_at": "2021-08-15T18:24:29Z",
        "updated_at": "2021-11-07T10:33:22Z",
        "options": [
            {
                "id": 8720144728271,
                "product_id": 6805251358927,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377112047823,
            "product_id": 6805251358927,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_0a65aa34-c665-4ff2-9919-4caed6e105ec.jpg?v=1629051869"
        },
        "images": [
            {
                "id": 29377112047823,
                "product_id": 6805251358927,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_0a65aa34-c665-4ff2-9919-4caed6e105ec.jpg?v=1629051869"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251358927",
        "status": "active",
        "variants": [
            {
                "id": 40499653017807,
                "product_id": 6805251358927,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:24:29Z",
                "updated_at": "2021-08-15T18:24:29Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653017807"
            }
        ]
    },
    {
        "id": 6805251424463,
        "title": "Example Hat 62",
        "handle": "62",
        "created_at": "2021-08-15T18:24:33Z",
        "updated_at": "2021-11-07T10:33:22Z",
        "options": [
            {
                "id": 8720144793807,
                "product_id": 6805251424463,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377112277199,
            "product_id": 6805251424463,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9d680450-595c-4a70-a656-704c88634de5.jpg?v=1629051873"
        },
        "images": [
            {
                "id": 29377112277199,
                "product_id": 6805251424463,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9d680450-595c-4a70-a656-704c88634de5.jpg?v=1629051873"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251424463",
        "status": "active",
        "variants": [
            {
                "id": 40499653083343,
                "product_id": 6805251424463,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:24:33Z",
                "updated_at": "2021-08-15T18:24:33Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653083343"
            }
        ]
    },
    {
        "id": 6805251457231,
        "title": "Example Hat 63",
        "handle": "63",
        "created_at": "2021-08-15T18:24:37Z",
        "updated_at": "2021-11-07T10:33:22Z",
        "options": [
            {
                "id": 8720144826575,
                "product_id": 6805251457231,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377112506575,
            "product_id": 6805251457231,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_89d4671b-bc0e-42ee-9c32-5429e437403a.jpg?v=1629051877"
        },
        "images": [
            {
                "id": 29377112506575,
                "product_id": 6805251457231,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_89d4671b-bc0e-42ee-9c32-5429e437403a.jpg?v=1629051877"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251457231",
        "status": "active",
        "variants": [
            {
                "id": 40499653116111,
                "product_id": 6805251457231,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:24:37Z",
                "updated_at": "2021-08-15T18:24:37Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653116111"
            }
        ]
    },
    {
        "id": 6805251489999,
        "title": "Example Hat 64",
        "handle": "64",
        "created_at": "2021-08-15T18:24:42Z",
        "updated_at": "2021-11-07T10:33:22Z",
        "options": [
            {
                "id": 8720144859343,
                "product_id": 6805251489999,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377112768719,
            "product_id": 6805251489999,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_badfb61f-ffd3-43fd-b618-da5ec8f0ea46.jpg?v=1629051882"
        },
        "images": [
            {
                "id": 29377112768719,
                "product_id": 6805251489999,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_badfb61f-ffd3-43fd-b618-da5ec8f0ea46.jpg?v=1629051882"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251489999",
        "status": "active",
        "variants": [
            {
                "id": 40499653148879,
                "product_id": 6805251489999,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:24:42Z",
                "updated_at": "2021-08-15T18:24:42Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653148879"
            }
        ]
    },
    {
        "id": 6805251522767,
        "title": "Example Hat 65",
        "handle": "65",
        "created_at": "2021-08-15T18:24:46Z",
        "updated_at": "2021-11-07T10:33:22Z",
        "options": [
            {
                "id": 8720144892111,
                "product_id": 6805251522767,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377112965327,
            "product_id": 6805251522767,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_74d15d13-0c06-406a-85d9-681b18ad41b2.jpg?v=1629051886"
        },
        "images": [
            {
                "id": 29377112965327,
                "product_id": 6805251522767,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_74d15d13-0c06-406a-85d9-681b18ad41b2.jpg?v=1629051886"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251522767",
        "status": "active",
        "variants": [
            {
                "id": 40499653181647,
                "product_id": 6805251522767,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:24:46Z",
                "updated_at": "2021-08-15T18:24:46Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653181647"
            }
        ]
    },
    {
        "id": 6805251555535,
        "title": "Example Hat 66",
        "handle": "66",
        "created_at": "2021-08-15T18:24:50Z",
        "updated_at": "2021-11-07T10:33:22Z",
        "options": [
            {
                "id": 8720144924879,
                "product_id": 6805251555535,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377113063631,
            "product_id": 6805251555535,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1a1b4be2-10ce-4fc0-9ec2-24473faec04c.jpg?v=1629051891"
        },
        "images": [
            {
                "id": 29377113063631,
                "product_id": 6805251555535,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_1a1b4be2-10ce-4fc0-9ec2-24473faec04c.jpg?v=1629051891"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251555535",
        "status": "active",
        "variants": [
            {
                "id": 40499653214415,
                "product_id": 6805251555535,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:24:51Z",
                "updated_at": "2021-08-15T18:24:51Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653214415"
            }
        ]
    },
    {
        "id": 6805251621071,
        "title": "Example Hat 67",
        "handle": "67",
        "created_at": "2021-08-15T18:24:55Z",
        "updated_at": "2021-11-07T10:33:23Z",
        "options": [
            {
                "id": 8720145055951,
                "product_id": 6805251621071,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377113456847,
            "product_id": 6805251621071,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_00c0ed20-9162-46bb-ad60-004d82e07854.jpg?v=1629051895"
        },
        "images": [
            {
                "id": 29377113456847,
                "product_id": 6805251621071,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_00c0ed20-9162-46bb-ad60-004d82e07854.jpg?v=1629051895"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251621071",
        "status": "active",
        "variants": [
            {
                "id": 40499653607631,
                "product_id": 6805251621071,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:24:55Z",
                "updated_at": "2021-08-15T18:24:55Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653607631"
            }
        ]
    },
    {
        "id": 6805251653839,
        "title": "Example Hat 68",
        "handle": "68",
        "created_at": "2021-08-15T18:24:59Z",
        "updated_at": "2021-11-07T10:33:23Z",
        "options": [
            {
                "id": 8720145088719,
                "product_id": 6805251653839,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377113850063,
            "product_id": 6805251653839,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ad764a9a-903e-4d1c-9813-4024920a2f88.jpg?v=1629051899"
        },
        "images": [
            {
                "id": 29377113850063,
                "product_id": 6805251653839,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ad764a9a-903e-4d1c-9813-4024920a2f88.jpg?v=1629051899"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251653839",
        "status": "active",
        "variants": [
            {
                "id": 40499653640399,
                "product_id": 6805251653839,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:24:59Z",
                "updated_at": "2021-08-15T18:24:59Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653640399"
            }
        ]
    },
    {
        "id": 6805251686607,
        "title": "Example Hat 69",
        "handle": "69",
        "created_at": "2021-08-15T18:25:04Z",
        "updated_at": "2021-11-07T10:33:23Z",
        "options": [
            {
                "id": 8720145121487,
                "product_id": 6805251686607,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377113948367,
            "product_id": 6805251686607,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_019903b9-46e0-4ba2-81d6-0a4cc386ae38.jpg?v=1629051904"
        },
        "images": [
            {
                "id": 29377113948367,
                "product_id": 6805251686607,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_019903b9-46e0-4ba2-81d6-0a4cc386ae38.jpg?v=1629051904"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251686607",
        "status": "active",
        "variants": [
            {
                "id": 40499653673167,
                "product_id": 6805251686607,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:25:04Z",
                "updated_at": "2021-08-15T18:25:04Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653673167"
            }
        ]
    },
    {
        "id": 6805248999631,
        "title": "Example Hat 7",
        "handle": "7",
        "created_at": "2021-08-15T18:20:28Z",
        "updated_at": "2021-11-07T10:33:16Z",
        "options": [
            {
                "id": 8720142041295,
                "product_id": 6805248999631,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377098023119,
            "product_id": 6805248999631,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_cf318ed4-0b27-4659-9c33-e40cbd3e4a9e.jpg?v=1629051628"
        },
        "images": [
            {
                "id": 29377098023119,
                "product_id": 6805248999631,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_cf318ed4-0b27-4659-9c33-e40cbd3e4a9e.jpg?v=1629051628"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805248999631",
        "status": "active",
        "variants": [
            {
                "id": 40499643744463,
                "product_id": 6805248999631,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:20:29Z",
                "updated_at": "2021-08-15T18:20:29Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499643744463"
            }
        ]
    },
    {
        "id": 6805251719375,
        "title": "Example Hat 70",
        "handle": "70",
        "created_at": "2021-08-15T18:25:08Z",
        "updated_at": "2021-11-07T10:33:23Z",
        "options": [
            {
                "id": 8720145154255,
                "product_id": 6805251719375,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377113981135,
            "product_id": 6805251719375,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3d7edbdc-5eb5-4a8c-b090-77a438d8f2d4.jpg?v=1629051908"
        },
        "images": [
            {
                "id": 29377113981135,
                "product_id": 6805251719375,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3d7edbdc-5eb5-4a8c-b090-77a438d8f2d4.jpg?v=1629051908"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251719375",
        "status": "active",
        "variants": [
            {
                "id": 40499653705935,
                "product_id": 6805251719375,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:25:08Z",
                "updated_at": "2021-08-15T18:25:08Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653705935"
            }
        ]
    },
    {
        "id": 6805251784911,
        "title": "Example Hat 71",
        "handle": "71",
        "created_at": "2021-08-15T18:25:13Z",
        "updated_at": "2021-11-07T10:33:23Z",
        "options": [
            {
                "id": 8720145219791,
                "product_id": 6805251784911,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377114046671,
            "product_id": 6805251784911,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_aa92aa70-91cc-440d-924a-c2357a66d291.jpg?v=1629051913"
        },
        "images": [
            {
                "id": 29377114046671,
                "product_id": 6805251784911,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_aa92aa70-91cc-440d-924a-c2357a66d291.jpg?v=1629051913"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251784911",
        "status": "active",
        "variants": [
            {
                "id": 40499653771471,
                "product_id": 6805251784911,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:25:13Z",
                "updated_at": "2021-08-15T18:25:13Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653771471"
            }
        ]
    },
    {
        "id": 6805251817679,
        "title": "Example Hat 72",
        "handle": "72",
        "created_at": "2021-08-15T18:25:17Z",
        "updated_at": "2021-11-07T10:33:23Z",
        "options": [
            {
                "id": 8720145252559,
                "product_id": 6805251817679,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377114276047,
            "product_id": 6805251817679,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_bff7cd69-8428-4717-9d9f-562804a47d0f.jpg?v=1629051917"
        },
        "images": [
            {
                "id": 29377114276047,
                "product_id": 6805251817679,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_bff7cd69-8428-4717-9d9f-562804a47d0f.jpg?v=1629051917"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251817679",
        "status": "active",
        "variants": [
            {
                "id": 40499653804239,
                "product_id": 6805251817679,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:25:17Z",
                "updated_at": "2021-08-15T18:25:17Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653804239"
            }
        ]
    },
    {
        "id": 6805251883215,
        "title": "Example Hat 73",
        "handle": "73",
        "created_at": "2021-08-15T18:25:22Z",
        "updated_at": "2021-11-07T10:33:23Z",
        "options": [
            {
                "id": 8720145318095,
                "product_id": 6805251883215,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377114505423,
            "product_id": 6805251883215,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8f174bae-888e-40dc-bcf8-8de85c0d8d0d.jpg?v=1629051922"
        },
        "images": [
            {
                "id": 29377114505423,
                "product_id": 6805251883215,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8f174bae-888e-40dc-bcf8-8de85c0d8d0d.jpg?v=1629051922"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251883215",
        "status": "active",
        "variants": [
            {
                "id": 40499653902543,
                "product_id": 6805251883215,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:25:22Z",
                "updated_at": "2021-08-15T18:25:22Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653902543"
            }
        ]
    },
    {
        "id": 6805251915983,
        "title": "Example Hat 74",
        "handle": "74",
        "created_at": "2021-08-15T18:25:26Z",
        "updated_at": "2021-11-07T10:33:23Z",
        "options": [
            {
                "id": 8720145350863,
                "product_id": 6805251915983,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377114734799,
            "product_id": 6805251915983,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_97b4ad9b-9f14-44c8-8969-7a36f45e4b97.jpg?v=1629051926"
        },
        "images": [
            {
                "id": 29377114734799,
                "product_id": 6805251915983,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_97b4ad9b-9f14-44c8-8969-7a36f45e4b97.jpg?v=1629051926"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251915983",
        "status": "active",
        "variants": [
            {
                "id": 40499653935311,
                "product_id": 6805251915983,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:25:26Z",
                "updated_at": "2021-08-15T18:25:26Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653935311"
            }
        ]
    },
    {
        "id": 6805251948751,
        "title": "Example Hat 75",
        "handle": "75",
        "created_at": "2021-08-15T18:25:30Z",
        "updated_at": "2021-11-07T10:33:23Z",
        "options": [
            {
                "id": 8720145383631,
                "product_id": 6805251948751,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377114865871,
            "product_id": 6805251948751,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8f624930-c62e-43ba-bfe0-a553e43e4809.jpg?v=1629051931"
        },
        "images": [
            {
                "id": 29377114865871,
                "product_id": 6805251948751,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8f624930-c62e-43ba-bfe0-a553e43e4809.jpg?v=1629051931"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805251948751",
        "status": "active",
        "variants": [
            {
                "id": 40499653968079,
                "product_id": 6805251948751,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:25:31Z",
                "updated_at": "2021-08-15T18:25:31Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499653968079"
            }
        ]
    },
    {
        "id": 6805252014287,
        "title": "Example Hat 76",
        "handle": "76",
        "created_at": "2021-08-15T18:25:35Z",
        "updated_at": "2021-11-07T10:33:23Z",
        "options": [
            {
                "id": 8720145481935,
                "product_id": 6805252014287,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377114931407,
            "product_id": 6805252014287,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ad0c6789-bfa1-4411-b81e-192b034fee58.jpg?v=1629051935"
        },
        "images": [
            {
                "id": 29377114931407,
                "product_id": 6805252014287,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ad0c6789-bfa1-4411-b81e-192b034fee58.jpg?v=1629051935"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252014287",
        "status": "active",
        "variants": [
            {
                "id": 40499654394063,
                "product_id": 6805252014287,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:25:35Z",
                "updated_at": "2021-08-15T18:25:35Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499654394063"
            }
        ]
    },
    {
        "id": 6805252047055,
        "title": "Example Hat 77",
        "handle": "77",
        "created_at": "2021-08-15T18:25:40Z",
        "updated_at": "2021-11-07T10:33:24Z",
        "options": [
            {
                "id": 8720145514703,
                "product_id": 6805252047055,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377115029711,
            "product_id": 6805252047055,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_02441fcf-8cf1-42cd-87a1-d6a4bce3834d.jpg?v=1629051940"
        },
        "images": [
            {
                "id": 29377115029711,
                "product_id": 6805252047055,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_02441fcf-8cf1-42cd-87a1-d6a4bce3834d.jpg?v=1629051940"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252047055",
        "status": "active",
        "variants": [
            {
                "id": 40499654426831,
                "product_id": 6805252047055,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:25:40Z",
                "updated_at": "2021-08-15T18:25:40Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499654426831"
            }
        ]
    },
    {
        "id": 6805252079823,
        "title": "Example Hat 78",
        "handle": "78",
        "created_at": "2021-08-15T18:25:44Z",
        "updated_at": "2021-11-07T10:33:24Z",
        "options": [
            {
                "id": 8720145547471,
                "product_id": 6805252079823,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377115160783,
            "product_id": 6805252079823,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_2f18e46f-ab1c-4c99-9458-84ef6508615f.jpg?v=1629051944"
        },
        "images": [
            {
                "id": 29377115160783,
                "product_id": 6805252079823,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_2f18e46f-ab1c-4c99-9458-84ef6508615f.jpg?v=1629051944"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252079823",
        "status": "active",
        "variants": [
            {
                "id": 40499654492367,
                "product_id": 6805252079823,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:25:44Z",
                "updated_at": "2021-08-15T18:25:44Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499654492367"
            }
        ]
    },
    {
        "id": 6805252112591,
        "title": "Example Hat 79",
        "handle": "79",
        "created_at": "2021-08-15T18:25:49Z",
        "updated_at": "2021-11-07T10:33:24Z",
        "options": [
            {
                "id": 8720145580239,
                "product_id": 6805252112591,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377115324623,
            "product_id": 6805252112591,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_52181b08-b3b2-4d87-8737-d305624cc3cc.jpg?v=1629051949"
        },
        "images": [
            {
                "id": 29377115324623,
                "product_id": 6805252112591,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_52181b08-b3b2-4d87-8737-d305624cc3cc.jpg?v=1629051949"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252112591",
        "status": "active",
        "variants": [
            {
                "id": 40499654525135,
                "product_id": 6805252112591,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:25:49Z",
                "updated_at": "2021-08-15T18:25:49Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499654525135"
            }
        ]
    },
    {
        "id": 6805249032399,
        "title": "Example Hat 8",
        "handle": "8",
        "created_at": "2021-08-15T18:20:32Z",
        "updated_at": "2021-11-07T10:33:16Z",
        "options": [
            {
                "id": 8720142074063,
                "product_id": 6805249032399,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377098186959,
            "product_id": 6805249032399,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d0e2ad04-1ef1-46d5-9fec-775f47cea1c3.jpg?v=1629051633"
        },
        "images": [
            {
                "id": 29377098186959,
                "product_id": 6805249032399,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d0e2ad04-1ef1-46d5-9fec-775f47cea1c3.jpg?v=1629051633"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249032399",
        "status": "active",
        "variants": [
            {
                "id": 40499643777231,
                "product_id": 6805249032399,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:20:33Z",
                "updated_at": "2021-08-15T18:20:33Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499643777231"
            }
        ]
    },
    {
        "id": 6805252145359,
        "title": "Example Hat 80",
        "handle": "80",
        "created_at": "2021-08-15T18:25:54Z",
        "updated_at": "2021-11-07T10:33:24Z",
        "options": [
            {
                "id": 8720145613007,
                "product_id": 6805252145359,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377115455695,
            "product_id": 6805252145359,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f552341f-f132-4856-9310-cf778d04378c.jpg?v=1629051954"
        },
        "images": [
            {
                "id": 29377115455695,
                "product_id": 6805252145359,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_f552341f-f132-4856-9310-cf778d04378c.jpg?v=1629051954"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252145359",
        "status": "active",
        "variants": [
            {
                "id": 40499654557903,
                "product_id": 6805252145359,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:25:54Z",
                "updated_at": "2021-08-15T18:25:54Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499654557903"
            }
        ]
    },
    {
        "id": 6805252178127,
        "title": "Example Hat 81",
        "handle": "81",
        "created_at": "2021-08-15T18:25:58Z",
        "updated_at": "2021-11-07T10:33:24Z",
        "options": [
            {
                "id": 8720145645775,
                "product_id": 6805252178127,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377115783375,
            "product_id": 6805252178127,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8be16b98-3172-4555-a54c-627e8835b5ff.jpg?v=1629051958"
        },
        "images": [
            {
                "id": 29377115783375,
                "product_id": 6805252178127,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_8be16b98-3172-4555-a54c-627e8835b5ff.jpg?v=1629051958"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252178127",
        "status": "active",
        "variants": [
            {
                "id": 40499654590671,
                "product_id": 6805252178127,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:25:58Z",
                "updated_at": "2021-08-15T18:25:58Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499654590671"
            }
        ]
    },
    {
        "id": 6805252210895,
        "title": "Example Hat 82",
        "handle": "82",
        "created_at": "2021-08-15T18:26:03Z",
        "updated_at": "2021-11-07T10:33:24Z",
        "options": [
            {
                "id": 8720145678543,
                "product_id": 6805252210895,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377116045519,
            "product_id": 6805252210895,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_7f3390eb-74a4-44e3-8356-66ece290fa3d.jpg?v=1629051963"
        },
        "images": [
            {
                "id": 29377116045519,
                "product_id": 6805252210895,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_7f3390eb-74a4-44e3-8356-66ece290fa3d.jpg?v=1629051963"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252210895",
        "status": "active",
        "variants": [
            {
                "id": 40499654623439,
                "product_id": 6805252210895,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:26:03Z",
                "updated_at": "2021-08-15T18:26:03Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499654623439"
            }
        ]
    },
    {
        "id": 6805252243663,
        "title": "Example Hat 83",
        "handle": "83",
        "created_at": "2021-08-15T18:26:07Z",
        "updated_at": "2021-11-07T10:33:24Z",
        "options": [
            {
                "id": 8720145711311,
                "product_id": 6805252243663,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377116176591,
            "product_id": 6805252243663,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6c95ba49-152c-40b7-b036-ceacb6717a8d.jpg?v=1629051967"
        },
        "images": [
            {
                "id": 29377116176591,
                "product_id": 6805252243663,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_6c95ba49-152c-40b7-b036-ceacb6717a8d.jpg?v=1629051967"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252243663",
        "status": "active",
        "variants": [
            {
                "id": 40499654656207,
                "product_id": 6805252243663,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:26:08Z",
                "updated_at": "2021-08-15T18:26:08Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499654656207"
            }
        ]
    },
    {
        "id": 6805252309199,
        "title": "Example Hat 84",
        "handle": "84",
        "created_at": "2021-08-15T18:26:12Z",
        "updated_at": "2021-11-07T10:33:24Z",
        "options": [
            {
                "id": 8720145776847,
                "product_id": 6805252309199,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377116340431,
            "product_id": 6805252309199,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_bade87be-29c3-4505-bde0-d23687e31834.jpg?v=1629051972"
        },
        "images": [
            {
                "id": 29377116340431,
                "product_id": 6805252309199,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_bade87be-29c3-4505-bde0-d23687e31834.jpg?v=1629051972"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252309199",
        "status": "active",
        "variants": [
            {
                "id": 40499654721743,
                "product_id": 6805252309199,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:26:12Z",
                "updated_at": "2021-08-15T18:26:12Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499654721743"
            }
        ]
    },
    {
        "id": 6805252341967,
        "title": "Example Hat 85",
        "handle": "85",
        "created_at": "2021-08-15T18:26:17Z",
        "updated_at": "2021-11-07T10:33:24Z",
        "options": [
            {
                "id": 8720145809615,
                "product_id": 6805252341967,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377116537039,
            "product_id": 6805252341967,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_309e5e8f-ed92-4a89-8e2f-78e12dffb93e.jpg?v=1629051977"
        },
        "images": [
            {
                "id": 29377116537039,
                "product_id": 6805252341967,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_309e5e8f-ed92-4a89-8e2f-78e12dffb93e.jpg?v=1629051977"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252341967",
        "status": "active",
        "variants": [
            {
                "id": 40499654754511,
                "product_id": 6805252341967,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:26:17Z",
                "updated_at": "2021-08-15T18:26:17Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499654754511"
            }
        ]
    },
    {
        "id": 6805252407503,
        "title": "Example Hat 86",
        "handle": "86",
        "created_at": "2021-08-15T18:26:21Z",
        "updated_at": "2021-11-07T10:33:24Z",
        "options": [
            {
                "id": 8720145875151,
                "product_id": 6805252407503,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377116635343,
            "product_id": 6805252407503,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5644993e-2857-41b4-9ffd-1425d2b1490b.jpg?v=1629051982"
        },
        "images": [
            {
                "id": 29377116635343,
                "product_id": 6805252407503,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_5644993e-2857-41b4-9ffd-1425d2b1490b.jpg?v=1629051982"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252407503",
        "status": "active",
        "variants": [
            {
                "id": 40499654820047,
                "product_id": 6805252407503,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:26:22Z",
                "updated_at": "2021-08-15T18:26:22Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499654820047"
            }
        ]
    },
    {
        "id": 6805252440271,
        "title": "Example Hat 87",
        "handle": "87",
        "created_at": "2021-08-15T18:26:26Z",
        "updated_at": "2021-11-07T10:33:25Z",
        "options": [
            {
                "id": 8720145907919,
                "product_id": 6805252440271,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377116930255,
            "product_id": 6805252440271,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_857b7b14-018b-47e0-a4e2-41a1686d10d1.jpg?v=1629051986"
        },
        "images": [
            {
                "id": 29377116930255,
                "product_id": 6805252440271,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_857b7b14-018b-47e0-a4e2-41a1686d10d1.jpg?v=1629051986"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252440271",
        "status": "active",
        "variants": [
            {
                "id": 40499654918351,
                "product_id": 6805252440271,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:26:26Z",
                "updated_at": "2021-08-15T18:26:26Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499654918351"
            }
        ]
    },
    {
        "id": 6805252505807,
        "title": "Example Hat 88",
        "handle": "88",
        "created_at": "2021-08-15T18:26:31Z",
        "updated_at": "2021-11-07T10:33:25Z",
        "options": [
            {
                "id": 8720146006223,
                "product_id": 6805252505807,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377117126863,
            "product_id": 6805252505807,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4285e604-b8ef-4835-bf02-9f54d4d72632.jpg?v=1629051991"
        },
        "images": [
            {
                "id": 29377117126863,
                "product_id": 6805252505807,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4285e604-b8ef-4835-bf02-9f54d4d72632.jpg?v=1629051991"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252505807",
        "status": "active",
        "variants": [
            {
                "id": 40499655278799,
                "product_id": 6805252505807,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:26:31Z",
                "updated_at": "2021-08-15T18:26:31Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499655278799"
            }
        ]
    },
    {
        "id": 6805252538575,
        "title": "Example Hat 89",
        "handle": "89",
        "created_at": "2021-08-15T18:26:35Z",
        "updated_at": "2021-11-07T10:33:25Z",
        "options": [
            {
                "id": 8720146038991,
                "product_id": 6805252538575,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377117552847,
            "product_id": 6805252538575,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_54fcb68c-f451-4659-9002-14daab53d516.jpg?v=1629051995"
        },
        "images": [
            {
                "id": 29377117552847,
                "product_id": 6805252538575,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_54fcb68c-f451-4659-9002-14daab53d516.jpg?v=1629051995"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252538575",
        "status": "active",
        "variants": [
            {
                "id": 40499655344335,
                "product_id": 6805252538575,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:26:35Z",
                "updated_at": "2021-08-15T18:26:35Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499655344335"
            }
        ]
    },
    {
        "id": 6805249065167,
        "title": "Example Hat 9",
        "handle": "9",
        "created_at": "2021-08-15T18:20:37Z",
        "updated_at": "2021-11-07T10:33:16Z",
        "options": [
            {
                "id": 8720142106831,
                "product_id": 6805249065167,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377098416335,
            "product_id": 6805249065167,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ff517d54-fdac-4a5a-aab3-2a1ec05b4782.jpg?v=1629051637"
        },
        "images": [
            {
                "id": 29377098416335,
                "product_id": 6805249065167,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_ff517d54-fdac-4a5a-aab3-2a1ec05b4782.jpg?v=1629051637"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805249065167",
        "status": "active",
        "variants": [
            {
                "id": 40499643809999,
                "product_id": 6805249065167,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:20:37Z",
                "updated_at": "2021-08-15T18:20:37Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499643809999"
            }
        ]
    },
    {
        "id": 6805252571343,
        "title": "Example Hat 90",
        "handle": "90",
        "created_at": "2021-08-15T18:26:39Z",
        "updated_at": "2021-11-07T10:33:25Z",
        "options": [
            {
                "id": 8720146071759,
                "product_id": 6805252571343,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377117651151,
            "product_id": 6805252571343,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_70a27b01-9455-4908-95cf-aec82657d93b.jpg?v=1629051999"
        },
        "images": [
            {
                "id": 29377117651151,
                "product_id": 6805252571343,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_70a27b01-9455-4908-95cf-aec82657d93b.jpg?v=1629051999"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252571343",
        "status": "active",
        "variants": [
            {
                "id": 40499655409871,
                "product_id": 6805252571343,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:26:39Z",
                "updated_at": "2021-08-15T18:26:39Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499655409871"
            }
        ]
    },
    {
        "id": 6805252604111,
        "title": "Example Hat 91",
        "handle": "91",
        "created_at": "2021-08-15T18:26:44Z",
        "updated_at": "2021-11-07T10:33:25Z",
        "options": [
            {
                "id": 8720146104527,
                "product_id": 6805252604111,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377117716687,
            "product_id": 6805252604111,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_aec85a27-83cf-4490-bc0f-cddf6c20c755.jpg?v=1629052004"
        },
        "images": [
            {
                "id": 29377117716687,
                "product_id": 6805252604111,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_aec85a27-83cf-4490-bc0f-cddf6c20c755.jpg?v=1629052004"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252604111",
        "status": "active",
        "variants": [
            {
                "id": 40499655475407,
                "product_id": 6805252604111,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:26:44Z",
                "updated_at": "2021-08-15T18:26:44Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499655475407"
            }
        ]
    },
    {
        "id": 6805252636879,
        "title": "Example Hat 92",
        "handle": "92",
        "created_at": "2021-08-15T18:26:48Z",
        "updated_at": "2021-11-07T10:33:25Z",
        "options": [
            {
                "id": 8720146137295,
                "product_id": 6805252636879,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377117847759,
            "product_id": 6805252636879,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d5b58051-db38-4975-935f-2a0b96769e8f.jpg?v=1629052008"
        },
        "images": [
            {
                "id": 29377117847759,
                "product_id": 6805252636879,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_d5b58051-db38-4975-935f-2a0b96769e8f.jpg?v=1629052008"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252636879",
        "status": "active",
        "variants": [
            {
                "id": 40499655508175,
                "product_id": 6805252636879,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:26:48Z",
                "updated_at": "2021-08-15T18:26:48Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499655508175"
            }
        ]
    },
    {
        "id": 6805252669647,
        "title": "Example Hat 93",
        "handle": "93",
        "created_at": "2021-08-15T18:26:52Z",
        "updated_at": "2021-11-07T10:33:25Z",
        "options": [
            {
                "id": 8720146170063,
                "product_id": 6805252669647,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377118044367,
            "product_id": 6805252669647,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4a6cd384-4a59-4a67-846e-3c991f1ec402.jpg?v=1629052012"
        },
        "images": [
            {
                "id": 29377118044367,
                "product_id": 6805252669647,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4a6cd384-4a59-4a67-846e-3c991f1ec402.jpg?v=1629052012"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252669647",
        "status": "active",
        "variants": [
            {
                "id": 40499655540943,
                "product_id": 6805252669647,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:26:52Z",
                "updated_at": "2021-08-15T18:26:52Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499655540943"
            }
        ]
    },
    {
        "id": 6805252702415,
        "title": "Example Hat 94",
        "handle": "94",
        "created_at": "2021-08-15T18:26:57Z",
        "updated_at": "2021-11-07T10:33:25Z",
        "options": [
            {
                "id": 8720146202831,
                "product_id": 6805252702415,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377118175439,
            "product_id": 6805252702415,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_313f01d5-00ff-4c08-b567-ac9cf5e12f91.jpg?v=1629052017"
        },
        "images": [
            {
                "id": 29377118175439,
                "product_id": 6805252702415,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_313f01d5-00ff-4c08-b567-ac9cf5e12f91.jpg?v=1629052017"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252702415",
        "status": "active",
        "variants": [
            {
                "id": 40499655573711,
                "product_id": 6805252702415,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:26:57Z",
                "updated_at": "2021-08-15T18:26:57Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499655573711"
            }
        ]
    },
    {
        "id": 6805252800719,
        "title": "Example Hat 95",
        "handle": "95",
        "created_at": "2021-08-15T18:27:02Z",
        "updated_at": "2021-11-07T10:33:25Z",
        "options": [
            {
                "id": 8720146366671,
                "product_id": 6805252800719,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377118568655,
            "product_id": 6805252800719,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4feb599f-a379-4bc8-8476-777d7803f01c.jpg?v=1629052022"
        },
        "images": [
            {
                "id": 29377118568655,
                "product_id": 6805252800719,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_4feb599f-a379-4bc8-8476-777d7803f01c.jpg?v=1629052022"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252800719",
        "status": "active",
        "variants": [
            {
                "id": 40499656294607,
                "product_id": 6805252800719,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:27:02Z",
                "updated_at": "2021-08-15T18:27:02Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499656294607"
            }
        ]
    },
    {
        "id": 6805252833487,
        "title": "Example Hat 96",
        "handle": "96",
        "created_at": "2021-08-15T18:27:06Z",
        "updated_at": "2021-11-07T10:33:26Z",
        "options": [
            {
                "id": 8720146399439,
                "product_id": 6805252833487,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377118863567,
            "product_id": 6805252833487,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9c25d2a9-fe0d-409c-8d7f-a440190f1520.jpg?v=1629052026"
        },
        "images": [
            {
                "id": 29377118863567,
                "product_id": 6805252833487,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_9c25d2a9-fe0d-409c-8d7f-a440190f1520.jpg?v=1629052026"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252833487",
        "status": "active",
        "variants": [
            {
                "id": 40499656327375,
                "product_id": 6805252833487,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:27:07Z",
                "updated_at": "2021-08-15T18:27:07Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499656327375"
            }
        ]
    },
    {
        "id": 6805252866255,
        "title": "Example Hat 97",
        "handle": "97",
        "created_at": "2021-08-15T18:27:11Z",
        "updated_at": "2021-11-07T10:33:26Z",
        "options": [
            {
                "id": 8720146432207,
                "product_id": 6805252866255,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377118994639,
            "product_id": 6805252866255,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3849b3e2-944d-40ec-ab75-635c9628f9ae.jpg?v=1629052031"
        },
        "images": [
            {
                "id": 29377118994639,
                "product_id": 6805252866255,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_3849b3e2-944d-40ec-ab75-635c9628f9ae.jpg?v=1629052031"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252866255",
        "status": "active",
        "variants": [
            {
                "id": 40499656360143,
                "product_id": 6805252866255,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:27:11Z",
                "updated_at": "2021-08-15T18:27:11Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499656360143"
            }
        ]
    },
    {
        "id": 6805252899023,
        "title": "Example Hat 98",
        "handle": "98",
        "created_at": "2021-08-15T18:27:15Z",
        "updated_at": "2021-11-07T10:33:26Z",
        "options": [
            {
                "id": 8720146464975,
                "product_id": 6805252899023,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377119092943,
            "product_id": 6805252899023,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b244e15b-134f-436d-84fb-12e3aded434d.jpg?v=1629052035"
        },
        "images": [
            {
                "id": 29377119092943,
                "product_id": 6805252899023,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_b244e15b-134f-436d-84fb-12e3aded434d.jpg?v=1629052035"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252899023",
        "status": "active",
        "variants": [
            {
                "id": 40499656392911,
                "product_id": 6805252899023,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:27:15Z",
                "updated_at": "2021-08-15T18:27:15Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499656392911"
            }
        ]
    },
    {
        "id": 6805252997327,
        "title": "Example Hat 99",
        "handle": "99",
        "created_at": "2021-08-15T18:27:23Z",
        "updated_at": "2021-11-07T10:33:26Z",
        "options": [
            {
                "id": 8720146628815,
                "product_id": 6805252997327,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377119453391,
            "product_id": 6805252997327,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_74a6844e-8b52-451a-8703-cfae24be2d6f.jpg?v=1629052043"
        },
        "images": [
            {
                "id": 29377119453391,
                "product_id": 6805252997327,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_74a6844e-8b52-451a-8703-cfae24be2d6f.jpg?v=1629052043"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805252997327",
        "status": "active",
        "variants": [
            {
                "id": 40499657048271,
                "product_id": 6805252997327,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "17.99",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:27:23Z",
                "updated_at": "2021-08-15T18:27:23Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499657048271"
            }
        ]
    },
    {
        "id": 6627892199631,
        "title": "Extended Warranty",
        "handle": "extended-warranty",
        "created_at": "2021-04-17T11:31:04Z",
        "updated_at": "2021-11-07T10:33:15Z",
        "options": [
            {
                "id": 8506418888911,
                "product_id": 6627892199631,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "image": {
            "id": 28429491536079,
            "product_id": 6627892199631,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/shield.png?v=1618659064"
        },
        "images": [
            {
                "id": 28429491536079,
                "product_id": 6627892199631,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/shield.png?v=1618659064"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6627892199631",
        "status": "active",
        "variants": [
            {
                "id": 39515828453583,
                "product_id": 6627892199631,
                "title": "Default Title",
                "inventory_policy": "continue",
                "price": "0",
                "option1": "Default Title",
                "created_at": "2021-04-17T11:31:04Z",
                "updated_at": "2021-07-27T23:03:02Z",
                "inventory_quantity": -7,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39515828453583"
            }
        ]
    },
    {
        "id": 6542539555023,
        "title": "falling night",
        "handle": "falling-night",
        "created_at": "2021-03-07T05:33:47Z",
        "updated_at": "2021-11-07T10:33:14Z",
        "options": [
            {
                "id": 8412910026959,
                "product_id": 6542539555023,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "image": {},
        "admin_graphql_api_id": "gid://shopify/Product/6542539555023",
        "status": "active",
        "variants": [
            {
                "id": 39272894365903,
                "product_id": 6542539555023,
                "title": "Default Title",
                "inventory_policy": "deny",
                "price": "7",
                "option1": "Default Title",
                "created_at": "2021-03-07T05:33:48Z",
                "updated_at": "2021-03-07T05:33:48Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39272894365903"
            }
        ]
    },
    {
        "id": 7067750432975,
        "title": "Flip Flops - Blue",
        "handle": "eco-flip",
        "created_at": "2022-07-18T22:45:09Z",
        "updated_at": "2022-12-03T12:32:43Z",
        "options": [
            {
                "id": 9047979196623,
                "product_id": 7067750432975,
                "name": "Size",
                "position": 1,
                "values": [
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12"
                ]
            },
            {
                "id": 9047979229391,
                "product_id": 7067750432975,
                "name": "Color",
                "position": 2,
                "values": [
                    "Blue"
                ]
            }
        ],
        "image": {
            "id": 31048572371151,
            "product_id": 7067750432975,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/Neemans-ClassicBlue-Recycled-Rubber-Eco-Flips-FrontRightLogo-Comfortable-Flip-Flops_700x.progressive_48ce9a29-7f25-4b9b-be1d-0e3afd5b3a87.jpg?v=1660399618"
        },
        "images": [
            {
                "id": 31048572371151,
                "product_id": 7067750432975,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/Neemans-ClassicBlue-Recycled-Rubber-Eco-Flips-FrontRightLogo-Comfortable-Flip-Flops_700x.progressive_48ce9a29-7f25-4b9b-be1d-0e3afd5b3a87.jpg?v=1660399618"
            },
            {
                "id": 31048572403919,
                "product_id": 7067750432975,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/ND-EcoFlips-LegShots_M_WebOptimized_-ClassicBlue_700x.progressive_fc8d1017-a176-4528-a099-e52c471ff253.jpg?v=1660399618"
            },
            {
                "id": 31048572436687,
                "product_id": 7067750432975,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/Neemans-ClassicBlue-Recycled-Rubber-Eco-Flips-FrontRightTiltLogoAir-Comfortable-Flip-Flops_700x.progressive_32e7192c-2db5-4312-884e-87c8a23f6198.jpg?v=1660399618"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/7067750432975",
        "status": "active",
        "variants": [
            {
                "id": 41931711054031,
                "product_id": 7067750432975,
                "title": "7 / Blue",
                "inventory_policy": "deny",
                "price": "700",
                "compare_at_price": "100",
                "inventory_management": "shopify",
                "option1": "7",
                "option2": "Blue",
                "created_at": "2022-07-18T22:45:10Z",
                "updated_at": "2022-12-01T23:26:56Z",
                "inventory_quantity": 996,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711054031"
            },
            {
                "id": 41931711086799,
                "product_id": 7067750432975,
                "title": "8 / Blue",
                "inventory_policy": "deny",
                "price": "800",
                "compare_at_price": "100",
                "inventory_management": "shopify",
                "option1": "8",
                "option2": "Blue",
                "created_at": "2022-07-18T22:45:10Z",
                "updated_at": "2022-12-01T23:26:56Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711086799"
            },
            {
                "id": 41931711119567,
                "product_id": 7067750432975,
                "title": "9 / Blue",
                "inventory_policy": "deny",
                "price": "800",
                "compare_at_price": "100",
                "inventory_management": "shopify",
                "option1": "9",
                "option2": "Blue",
                "created_at": "2022-07-18T22:45:10Z",
                "updated_at": "2022-12-01T23:26:56Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711119567"
            },
            {
                "id": 41931711152335,
                "product_id": 7067750432975,
                "title": "10 / Blue",
                "inventory_policy": "deny",
                "price": "800",
                "compare_at_price": "100",
                "inventory_management": "shopify",
                "option1": "10",
                "option2": "Blue",
                "created_at": "2022-07-18T22:45:10Z",
                "updated_at": "2022-12-01T23:26:56Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711152335"
            },
            {
                "id": 41931711185103,
                "product_id": 7067750432975,
                "title": "11 / Blue",
                "inventory_policy": "deny",
                "price": "800",
                "compare_at_price": "100",
                "inventory_management": "shopify",
                "option1": "11",
                "option2": "Blue",
                "created_at": "2022-07-18T22:45:10Z",
                "updated_at": "2022-12-01T23:26:56Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711185103"
            },
            {
                "id": 41931711217871,
                "product_id": 7067750432975,
                "title": "12 / Blue",
                "inventory_policy": "deny",
                "price": "8",
                "compare_at_price": "100",
                "inventory_management": "shopify",
                "option1": "12",
                "option2": "Blue",
                "created_at": "2022-07-18T22:45:10Z",
                "updated_at": "2022-07-19T00:13:16Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711217871"
            }
        ]
    },
    {
        "id": 6805253030095,
        "title": "Free Product",
        "handle": "100",
        "created_at": "2021-08-15T18:27:28Z",
        "updated_at": "2022-07-17T23:13:22Z",
        "options": [
            {
                "id": 8720146661583,
                "product_id": 6805253030095,
                "name": "Title",
                "position": 1,
                "values": [
                    "Grey"
                ]
            }
        ],
        "image": {
            "id": 29377120075983,
            "product_id": 6805253030095,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e1e4a94c-ed5a-4657-b05e-c7726423a7ad.jpg?v=1629052048"
        },
        "images": [
            {
                "id": 29377120075983,
                "product_id": 6805253030095,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/kids-beanie_e1e4a94c-ed5a-4657-b05e-c7726423a7ad.jpg?v=1629052048"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6805253030095",
        "status": "active",
        "variants": [
            {
                "id": 40499657081039,
                "product_id": 6805253030095,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "0",
                "compare_at_price": "22.99",
                "option1": "Grey",
                "created_at": "2021-08-15T18:27:28Z",
                "updated_at": "2022-07-17T23:13:22Z",
                "inventory_quantity": -3,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40499657081039"
            }
        ]
    },
    {
        "id": 7080137883855,
        "title": "Full Moon Kit",
        "handle": "full-moon-kit",
        "created_at": "2022-08-13T14:06:47Z",
        "updated_at": "2022-08-13T14:22:54Z",
        "options": [
            {
                "id": 9062315524303,
                "product_id": 7080137883855,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "image": {
            "id": 31048571257039,
            "product_id": 7080137883855,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/Screenshot2022-08-10170842.png?v=1660399607"
        },
        "images": [
            {
                "id": 31048571257039,
                "product_id": 7080137883855,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/Screenshot2022-08-10170842.png?v=1660399607"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/7080137883855",
        "status": "active",
        "variants": [
            {
                "id": 41980037890255,
                "product_id": 7080137883855,
                "title": "Default Title",
                "inventory_policy": "deny",
                "price": "200",
                "compare_at_price": "250",
                "option1": "Default Title",
                "created_at": "2022-08-13T14:06:47Z",
                "updated_at": "2022-08-13T14:22:54Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41980037890255"
            }
        ]
    },
    {
        "id": 7067750662351,
        "title": "Leather Shoes",
        "handle": "leather-shoe-black",
        "created_at": "2022-07-18T22:45:27Z",
        "updated_at": "2022-10-12T08:52:10Z",
        "options": [
            {
                "id": 9047979589839,
                "product_id": 7067750662351,
                "name": "Size",
                "position": 1,
                "values": [
                    "7",
                    "8",
                    "9",
                    "10",
                    "11"
                ]
            }
        ],
        "image": {
            "id": 31048574402767,
            "product_id": 7067750662351,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/leathershoe2_fd3cca9e-3d46-4e0b-a128-7682b4e726ad.jpg?v=1660399638"
        },
        "images": [
            {
                "id": 31048574402767,
                "product_id": 7067750662351,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/leathershoe2_fd3cca9e-3d46-4e0b-a128-7682b4e726ad.jpg?v=1660399638"
            },
            {
                "id": 31048574435535,
                "product_id": 7067750662351,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/leathershoe_83f20a3c-0082-4593-a9b6-0e18bd3bdaf3.jpg?v=1660399638"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/7067750662351",
        "status": "active",
        "variants": [
            {
                "id": 41931712135375,
                "product_id": 7067750662351,
                "title": "7",
                "inventory_policy": "deny",
                "price": "40",
                "inventory_management": "shopify",
                "option1": "7",
                "created_at": "2022-07-18T22:45:27Z",
                "updated_at": "2022-10-12T08:45:36Z",
                "inventory_quantity": 996,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712135375"
            },
            {
                "id": 41931712168143,
                "product_id": 7067750662351,
                "title": "8",
                "inventory_policy": "deny",
                "price": "40",
                "inventory_management": "shopify",
                "option1": "8",
                "created_at": "2022-07-18T22:45:27Z",
                "updated_at": "2022-07-19T00:13:21Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712168143"
            },
            {
                "id": 41931712200911,
                "product_id": 7067750662351,
                "title": "9",
                "inventory_policy": "deny",
                "price": "40",
                "inventory_management": "shopify",
                "option1": "9",
                "created_at": "2022-07-18T22:45:27Z",
                "updated_at": "2022-07-19T00:13:20Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712200911"
            },
            {
                "id": 41931712233679,
                "product_id": 7067750662351,
                "title": "10",
                "inventory_policy": "deny",
                "price": "40",
                "inventory_management": "shopify",
                "option1": "10",
                "created_at": "2022-07-18T22:45:27Z",
                "updated_at": "2022-07-19T00:13:21Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712233679"
            },
            {
                "id": 41931712266447,
                "product_id": 7067750662351,
                "title": "11",
                "inventory_policy": "deny",
                "price": "40",
                "inventory_management": "shopify",
                "option1": "11",
                "created_at": "2022-07-18T22:45:27Z",
                "updated_at": "2022-07-19T00:13:25Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712266447"
            }
        ]
    },
    {
        "id": 6542539620559,
        "title": "lively leaf",
        "handle": "lively-leaf",
        "created_at": "2021-03-07T05:33:50Z",
        "updated_at": "2021-11-07T10:33:14Z",
        "options": [
            {
                "id": 8412910092495,
                "product_id": 6542539620559,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "image": {},
        "admin_graphql_api_id": "gid://shopify/Product/6542539620559",
        "status": "active",
        "variants": [
            {
                "id": 39272894431439,
                "product_id": 6542539620559,
                "title": "Default Title",
                "inventory_policy": "deny",
                "price": "1",
                "option1": "Default Title",
                "created_at": "2021-03-07T05:33:50Z",
                "updated_at": "2021-03-07T05:33:50Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39272894431439"
            }
        ]
    },
    {
        "id": 6926117667023,
        "title": "new test debut",
        "handle": "new-test-debut",
        "created_at": "2021-11-22T15:08:42Z",
        "updated_at": "2022-06-27T04:21:23Z",
        "options": [
            {
                "id": 8868679745743,
                "product_id": 6926117667023,
                "name": "Title",
                "position": 1,
                "values": [
                    "Necklace - 2 Peas",
                    "Necklace -  3 Peas",
                    "Necklace - 4 Peas"
                ]
            }
        ],
        "image": {
            "id": 30037662761167,
            "product_id": 6926117667023,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/asset_1342_transformation_4024.png?v=1637593731",
            "variant_ids": [
                40998178980047
            ]
        },
        "images": [
            {
                "id": 30037662761167,
                "product_id": 6926117667023,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/asset_1342_transformation_4024.png?v=1637593731",
                "variant_ids": [
                    40998178980047
                ]
            },
            {
                "id": 30037662826703,
                "product_id": 6926117667023,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/asset_1342_transformation_3807.jpg?v=1637593733"
            },
            {
                "id": 30037663154383,
                "product_id": 6926117667023,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/asset_1342_transformation_4060.png?v=1637593735"
            },
            {
                "id": 30037663219919,
                "product_id": 6926117667023,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/asset_1342_transformation_4066.png?v=1637593738"
            },
            {
                "id": 30037663285455,
                "product_id": 6926117667023,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/asset_1343_transformation_4026.png?v=1637593741",
                "variant_ids": [
                    40998179012815
                ]
            },
            {
                "id": 30037663809743,
                "product_id": 6926117667023,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/asset_1343_transformation_4068.png?v=1637593743"
            },
            {
                "id": 30037664006351,
                "product_id": 6926117667023,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/asset_1343_transformation_4027.png?v=1637593746"
            },
            {
                "id": 30037664104655,
                "product_id": 6926117667023,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/asset_1347_transformation_4028.png?v=1637593748",
                "variant_ids": [
                    40998179045583
                ]
            },
            {
                "id": 30037664137423,
                "product_id": 6926117667023,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/asset_1347_transformation_4029.png?v=1637593750"
            },
            {
                "id": 30037664432335,
                "product_id": 6926117667023,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/asset_1347_transformation_4071.png?v=1637593753"
            },
            {
                "id": 30037664530639,
                "product_id": 6926117667023,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/asset_1347_transformation_5042.png?v=1637593755"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6926117667023",
        "status": "active",
        "variants": [
            {
                "id": 40998178980047,
                "product_id": 6926117667023,
                "title": "Necklace - 2 Peas",
                "inventory_policy": "deny",
                "price": "54.95",
                "compare_at_price": "64.95",
                "option1": "Necklace - 2 Peas",
                "created_at": "2021-11-22T15:08:42Z",
                "updated_at": "2021-11-22T15:08:54Z",
                "image_id": 30037662761167,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40998178980047"
            },
            {
                "id": 40998179012815,
                "product_id": 6926117667023,
                "title": "Necklace -  3 Peas",
                "inventory_policy": "deny",
                "price": "59.95",
                "compare_at_price": "69.95",
                "option1": "Necklace -  3 Peas",
                "created_at": "2021-11-22T15:08:42Z",
                "updated_at": "2021-11-22T15:09:01Z",
                "image_id": 30037663285455,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40998179012815"
            },
            {
                "id": 40998179045583,
                "product_id": 6926117667023,
                "title": "Necklace - 4 Peas",
                "inventory_policy": "deny",
                "price": "64.95",
                "compare_at_price": "74.95",
                "option1": "Necklace - 4 Peas",
                "created_at": "2021-11-22T15:08:42Z",
                "updated_at": "2021-11-22T15:09:08Z",
                "image_id": 30037664104655,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40998179045583"
            }
        ]
    },
    {
        "id": 6542539587791,
        "title": "old shadow",
        "handle": "old-shadow",
        "created_at": "2021-03-07T05:33:49Z",
        "updated_at": "2021-11-07T10:33:14Z",
        "options": [
            {
                "id": 8412910059727,
                "product_id": 6542539587791,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "image": {},
        "admin_graphql_api_id": "gid://shopify/Product/6542539587791",
        "status": "active",
        "variants": [
            {
                "id": 39272894398671,
                "product_id": 6542539587791,
                "title": "Default Title",
                "inventory_policy": "deny",
                "price": "2",
                "option1": "Default Title",
                "created_at": "2021-03-07T05:33:49Z",
                "updated_at": "2021-03-07T05:33:49Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39272894398671"
            }
        ]
    },
    {
        "id": 6926117699791,
        "title": "Package Protection",
        "handle": "package-protection",
        "created_at": "2021-11-22T15:08:43Z",
        "updated_at": "2022-06-27T13:57:15Z",
        "options": [
            {
                "id": 8868679778511,
                "product_id": 6926117699791,
                "name": "Title",
                "position": 1,
                "values": [
                    "Insurance for total less $100",
                    "Insurance for total more $100",
                    "Insurance for total more $200",
                    "Insurance for total more $300",
                    "Insurance for total more $400",
                    "Insurance for total more $500"
                ]
            }
        ],
        "image": {},
        "admin_graphql_api_id": "gid://shopify/Product/6926117699791",
        "status": "active",
        "variants": [
            {
                "id": 40998179078351,
                "product_id": 6926117699791,
                "title": "Insurance for total less $100",
                "inventory_policy": "deny",
                "price": "2.98",
                "compare_at_price": "0",
                "option1": "Insurance for total less $100",
                "created_at": "2021-11-22T15:08:43Z",
                "updated_at": "2021-11-22T15:08:51Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40998179078351"
            },
            {
                "id": 40998179111119,
                "product_id": 6926117699791,
                "title": "Insurance for total more $100",
                "inventory_policy": "deny",
                "price": "3.98",
                "compare_at_price": "0",
                "option1": "Insurance for total more $100",
                "created_at": "2021-11-22T15:08:43Z",
                "updated_at": "2021-11-22T15:08:54Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40998179111119"
            },
            {
                "id": 40998179143887,
                "product_id": 6926117699791,
                "title": "Insurance for total more $200",
                "inventory_policy": "deny",
                "price": "4.98",
                "compare_at_price": "0",
                "option1": "Insurance for total more $200",
                "created_at": "2021-11-22T15:08:43Z",
                "updated_at": "2021-11-22T15:08:56Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40998179143887"
            },
            {
                "id": 40998179176655,
                "product_id": 6926117699791,
                "title": "Insurance for total more $300",
                "inventory_policy": "deny",
                "price": "5.98",
                "compare_at_price": "0",
                "option1": "Insurance for total more $300",
                "created_at": "2021-11-22T15:08:43Z",
                "updated_at": "2021-11-22T15:08:58Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40998179176655"
            },
            {
                "id": 40998179209423,
                "product_id": 6926117699791,
                "title": "Insurance for total more $400",
                "inventory_policy": "deny",
                "price": "6.98",
                "compare_at_price": "0",
                "option1": "Insurance for total more $400",
                "created_at": "2021-11-22T15:08:43Z",
                "updated_at": "2021-11-22T15:09:01Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40998179209423"
            },
            {
                "id": 40998179242191,
                "product_id": 6926117699791,
                "title": "Insurance for total more $500",
                "inventory_policy": "deny",
                "price": "7.98",
                "compare_at_price": "0",
                "option1": "Insurance for total more $500",
                "created_at": "2021-11-22T15:08:43Z",
                "updated_at": "2021-11-22T15:09:03Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/40998179242191"
            }
        ]
    },
    {
        "id": 7067750695119,
        "title": "Premium Trainers",
        "handle": "premium-trainers",
        "created_at": "2022-07-18T22:45:31Z",
        "updated_at": "2022-08-13T14:07:23Z",
        "options": [
            {
                "id": 9047979622607,
                "product_id": 7067750695119,
                "name": "Size",
                "position": 1,
                "values": [
                    "7",
                    "8",
                    "9",
                    "10"
                ]
            }
        ],
        "image": {
            "id": 31048574533839,
            "product_id": 7067750695119,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/runningshoes1_8de8358b-1636-4b81-ab78-f6618f8156c7.jpg?v=1660399642"
        },
        "images": [
            {
                "id": 31048574533839,
                "product_id": 7067750695119,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/runningshoes1_8de8358b-1636-4b81-ab78-f6618f8156c7.jpg?v=1660399642"
            },
            {
                "id": 31048574566607,
                "product_id": 7067750695119,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/runnginshoes2_2762b050-ae64-4fec-bf4f-a84859669090.jpg?v=1660399642"
            },
            {
                "id": 31048574599375,
                "product_id": 7067750695119,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/runningshoes3_fe4dadac-659c-4042-b985-5f0c61163603.jpg?v=1660399643"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/7067750695119",
        "status": "active",
        "variants": [
            {
                "id": 41931712299215,
                "product_id": 7067750695119,
                "title": "7",
                "inventory_policy": "deny",
                "price": "75",
                "inventory_management": "shopify",
                "option1": "7",
                "created_at": "2022-07-18T22:45:31Z",
                "updated_at": "2022-07-19T14:09:40Z",
                "inventory_quantity": 999,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712299215"
            },
            {
                "id": 41931712331983,
                "product_id": 7067750695119,
                "title": "8",
                "inventory_policy": "deny",
                "price": "75",
                "inventory_management": "shopify",
                "option1": "8",
                "created_at": "2022-07-18T22:45:31Z",
                "updated_at": "2022-07-19T00:13:31Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712331983"
            },
            {
                "id": 41931712364751,
                "product_id": 7067750695119,
                "title": "9",
                "inventory_policy": "deny",
                "price": "75",
                "inventory_management": "shopify",
                "option1": "9",
                "created_at": "2022-07-18T22:45:31Z",
                "updated_at": "2022-07-19T00:13:31Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712364751"
            },
            {
                "id": 41931712397519,
                "product_id": 7067750695119,
                "title": "10",
                "inventory_policy": "deny",
                "price": "75",
                "inventory_management": "shopify",
                "option1": "10",
                "created_at": "2022-07-18T22:45:31Z",
                "updated_at": "2022-07-19T00:13:31Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712397519"
            }
        ]
    },
    {
        "id": 7067750760655,
        "title": "Premium Trekking Shoes",
        "handle": "bundle-popup-demo-premium-trekking-shoes",
        "created_at": "2022-07-18T22:45:36Z",
        "updated_at": "2022-08-13T14:07:29Z",
        "options": [
            {
                "id": 9047979688143,
                "product_id": 7067750760655,
                "name": "Size",
                "position": 1,
                "values": [
                    "7",
                    "8",
                    "9"
                ]
            }
        ],
        "image": {
            "id": 31048574992591,
            "product_id": 7067750760655,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/trek1_c385d319-7f19-455c-8180-d804c2461780.jpg?v=1660399649"
        },
        "images": [
            {
                "id": 31048574992591,
                "product_id": 7067750760655,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/trek1_c385d319-7f19-455c-8180-d804c2461780.jpg?v=1660399649"
            },
            {
                "id": 31048575025359,
                "product_id": 7067750760655,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/trek2_4f67a2b2-0000-47e6-98fe-e2e01c8d17ff.jpg?v=1660399649"
            },
            {
                "id": 31048575058127,
                "product_id": 7067750760655,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/trek3_3a371553-5603-4e7e-9172-b7a2170586ef.jpg?v=1660399649"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/7067750760655",
        "status": "active",
        "variants": [
            {
                "id": 41931712594127,
                "product_id": 7067750760655,
                "title": "7",
                "inventory_policy": "deny",
                "price": "120",
                "inventory_management": "shopify",
                "option1": "7",
                "created_at": "2022-07-18T22:45:36Z",
                "updated_at": "2022-07-19T00:13:36Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712594127"
            },
            {
                "id": 41931712626895,
                "product_id": 7067750760655,
                "title": "8",
                "inventory_policy": "deny",
                "price": "120",
                "inventory_management": "shopify",
                "option1": "8",
                "created_at": "2022-07-18T22:45:36Z",
                "updated_at": "2022-07-19T00:13:35Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712626895"
            },
            {
                "id": 41931712659663,
                "product_id": 7067750760655,
                "title": "9",
                "inventory_policy": "deny",
                "price": "120",
                "inventory_management": "shopify",
                "option1": "9",
                "created_at": "2022-07-18T22:45:36Z",
                "updated_at": "2022-07-19T00:13:36Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712659663"
            }
        ]
    },
    {
        "id": 6709698461903,
        "title": "product 3 options",
        "handle": "product-3-options",
        "created_at": "2021-06-05T18:19:59Z",
        "updated_at": "2023-01-16T23:25:08Z",
        "options": [
            {
                "id": 8597954461903,
                "product_id": 6709698461903,
                "name": "Size",
                "position": 1,
                "values": [
                    "S",
                    "L",
                    "M",
                    "XL"
                ]
            },
            {
                "id": 8597954494671,
                "product_id": 6709698461903,
                "name": "Color",
                "position": 2,
                "values": [
                    "RED",
                    "GREEN",
                    "BLUE",
                    "YELLOW"
                ]
            },
            {
                "id": 8597954527439,
                "product_id": 6709698461903,
                "name": "Material",
                "position": 3,
                "values": [
                    "COTTON",
                    "POLYESTER"
                ]
            }
        ],
        "image": {
            "id": 28856648990927,
            "product_id": 6709698461903,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/4cce130c-3ce4-438b-a031-4b49edebaee21536839916849-US-Polo-Assn-Men-Yellow-Solid-Polo-Collar-T-shirt-81536839916696-2_c7389782-34ac-4d4b-aa18-8423feead3b5.jpg?v=1622917205"
        },
        "images": [
            {
                "id": 28856648990927,
                "product_id": 6709698461903,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/4cce130c-3ce4-438b-a031-4b49edebaee21536839916849-US-Polo-Assn-Men-Yellow-Solid-Polo-Collar-T-shirt-81536839916696-2_c7389782-34ac-4d4b-aa18-8423feead3b5.jpg?v=1622917205"
            },
            {
                "id": 28856648892623,
                "product_id": 6709698461903,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/7710f75d-8214-4e5f-8179-a714c86783571536839916834-US-Polo-Assn-Men-Yellow-Solid-Polo-Collar-T-shirt-81536839916696-3_b32b30c9-d9d3-4161-aeb0-edf5f34888bb.jpg?v=1622917205"
            },
            {
                "id": 28856648925391,
                "product_id": 6709698461903,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/41522a0f-cd95-4033-b731-33f32a90de321536839916815-US-Polo-Assn-Men-Yellow-Solid-Polo-Collar-T-shirt-81536839916696-4_1db20299-8f86-471b-be6e-4d49ae92d33f.jpg?v=1622917205"
            },
            {
                "id": 28856648859855,
                "product_id": 6709698461903,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/Asset12_1.png?v=1622917205"
            },
            {
                "id": 28856648958159,
                "product_id": 6709698461903,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/Asset12.png?v=1622917205"
            },
            {
                "id": 28856649023695,
                "product_id": 6709698461903,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/cab1c97f-edde-4a41-9fbd-79a5a97449351536839916869-US-Polo-Assn-Men-Yellow-Solid-Polo-Collar-T-shirt-81536839916696-1_e85c2db9-173f-4dbb-b6c1-fa0e942d29b9.jpg?v=1622917206"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6709698461903",
        "status": "active",
        "variants": [
            {
                "id": 39861790539983,
                "product_id": 6709698461903,
                "title": "S / RED / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "option1": "S",
                "option2": "RED",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:19:59Z",
                "updated_at": "2023-01-16T23:21:26Z",
                "inventory_quantity": -41,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790539983"
            },
            {
                "id": 39861790572751,
                "product_id": 6709698461903,
                "title": "S / RED / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "S",
                "option2": "RED",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:19:59Z",
                "updated_at": "2021-08-12T21:09:54Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790572751"
            },
            {
                "id": 39861790605519,
                "product_id": 6709698461903,
                "title": "S / GREEN / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "S",
                "option2": "GREEN",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:19:59Z",
                "updated_at": "2021-10-12T11:11:13Z",
                "inventory_quantity": 49,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790605519"
            },
            {
                "id": 39861790638287,
                "product_id": 6709698461903,
                "title": "S / GREEN / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "S",
                "option2": "GREEN",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:19:59Z",
                "updated_at": "2021-08-12T21:09:54Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790638287"
            },
            {
                "id": 39861790671055,
                "product_id": 6709698461903,
                "title": "S / BLUE / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "S",
                "option2": "BLUE",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:19:59Z",
                "updated_at": "2021-08-31T13:41:55Z",
                "inventory_quantity": 49,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790671055"
            },
            {
                "id": 39861790703823,
                "product_id": 6709698461903,
                "title": "S / BLUE / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "S",
                "option2": "BLUE",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:19:59Z",
                "updated_at": "2021-08-12T21:09:54Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790703823"
            },
            {
                "id": 39861790736591,
                "product_id": 6709698461903,
                "title": "S / YELLOW / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "S",
                "option2": "YELLOW",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:19:59Z",
                "updated_at": "2021-08-12T21:09:54Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790736591"
            },
            {
                "id": 39861790769359,
                "product_id": 6709698461903,
                "title": "S / YELLOW / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "S",
                "option2": "YELLOW",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:19:59Z",
                "updated_at": "2021-08-12T21:09:54Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790769359"
            },
            {
                "id": 39861790802127,
                "product_id": 6709698461903,
                "title": "L / RED / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "L",
                "option2": "RED",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:19:59Z",
                "updated_at": "2021-10-05T17:18:41Z",
                "inventory_quantity": 49,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790802127"
            },
            {
                "id": 39861790834895,
                "product_id": 6709698461903,
                "title": "L / RED / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "L",
                "option2": "RED",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:19:59Z",
                "updated_at": "2021-08-12T21:09:54Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790834895"
            },
            {
                "id": 39861790867663,
                "product_id": 6709698461903,
                "title": "L / GREEN / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "L",
                "option2": "GREEN",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:54Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790867663"
            },
            {
                "id": 39861790900431,
                "product_id": 6709698461903,
                "title": "L / GREEN / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "L",
                "option2": "GREEN",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-10-12T11:45:24Z",
                "inventory_quantity": 40,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790900431"
            },
            {
                "id": 39861790933199,
                "product_id": 6709698461903,
                "title": "L / BLUE / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "L",
                "option2": "BLUE",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:54Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790933199"
            },
            {
                "id": 39861790965967,
                "product_id": 6709698461903,
                "title": "L / BLUE / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "L",
                "option2": "BLUE",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:54Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790965967"
            },
            {
                "id": 39861790998735,
                "product_id": 6709698461903,
                "title": "L / YELLOW / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "L",
                "option2": "YELLOW",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861790998735"
            },
            {
                "id": 39861791031503,
                "product_id": 6709698461903,
                "title": "L / YELLOW / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "L",
                "option2": "YELLOW",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791031503"
            },
            {
                "id": 39861791064271,
                "product_id": 6709698461903,
                "title": "M / RED / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "RED",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791064271"
            },
            {
                "id": 39861791097039,
                "product_id": 6709698461903,
                "title": "M / RED / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "RED",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791097039"
            },
            {
                "id": 39861791129807,
                "product_id": 6709698461903,
                "title": "M / GREEN / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "GREEN",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791129807"
            },
            {
                "id": 39861791162575,
                "product_id": 6709698461903,
                "title": "M / GREEN / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "GREEN",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791162575"
            },
            {
                "id": 39861791195343,
                "product_id": 6709698461903,
                "title": "M / BLUE / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "BLUE",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791195343"
            },
            {
                "id": 39861791228111,
                "product_id": 6709698461903,
                "title": "M / BLUE / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "BLUE",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791228111"
            },
            {
                "id": 39861791260879,
                "product_id": 6709698461903,
                "title": "M / YELLOW / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "YELLOW",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791260879"
            },
            {
                "id": 39861791293647,
                "product_id": 6709698461903,
                "title": "M / YELLOW / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "YELLOW",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791293647"
            },
            {
                "id": 39861791326415,
                "product_id": 6709698461903,
                "title": "XL / RED / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "XL",
                "option2": "RED",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-10-04T15:52:25Z",
                "inventory_quantity": 47,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791326415"
            },
            {
                "id": 39861791359183,
                "product_id": 6709698461903,
                "title": "XL / RED / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "XL",
                "option2": "RED",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791359183"
            },
            {
                "id": 39861791391951,
                "product_id": 6709698461903,
                "title": "XL / GREEN / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "XL",
                "option2": "GREEN",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791391951"
            },
            {
                "id": 39861791424719,
                "product_id": 6709698461903,
                "title": "XL / GREEN / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "XL",
                "option2": "GREEN",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791424719"
            },
            {
                "id": 39861791457487,
                "product_id": 6709698461903,
                "title": "XL / BLUE / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "XL",
                "option2": "BLUE",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791457487"
            },
            {
                "id": 39861791490255,
                "product_id": 6709698461903,
                "title": "XL / BLUE / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "XL",
                "option2": "BLUE",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791490255"
            },
            {
                "id": 39861791523023,
                "product_id": 6709698461903,
                "title": "XL / YELLOW / COTTON",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "XL",
                "option2": "YELLOW",
                "option3": "COTTON",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791523023"
            },
            {
                "id": 39861791555791,
                "product_id": 6709698461903,
                "title": "XL / YELLOW / POLYESTER",
                "inventory_policy": "deny",
                "price": "1234",
                "compare_at_price": "3000",
                "inventory_management": "shopify",
                "option1": "XL",
                "option2": "YELLOW",
                "option3": "POLYESTER",
                "created_at": "2021-06-05T18:20:00Z",
                "updated_at": "2021-08-12T21:09:55Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39861791555791"
            }
        ]
    },
    {
        "id": 6619564441807,
        "title": "product with 2 options",
        "handle": "product-with-2-options",
        "created_at": "2021-04-15T15:21:55Z",
        "updated_at": "2023-01-16T23:25:05Z",
        "options": [
            {
                "id": 8497728291023,
                "product_id": 6619564441807,
                "name": "Size",
                "position": 1,
                "values": [
                    "S",
                    "M",
                    "L",
                    "XL"
                ]
            },
            {
                "id": 8497728323791,
                "product_id": 6619564441807,
                "name": "Color",
                "position": 2,
                "values": [
                    "red",
                    "blue",
                    "green"
                ]
            }
        ],
        "image": {
            "id": 28569811714255,
            "product_id": 6619564441807,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/output-onlinetexttools_1.png?v=1619205706"
        },
        "images": [
            {
                "id": 28569811714255,
                "product_id": 6619564441807,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/output-onlinetexttools_1.png?v=1619205706"
            },
            {
                "id": 28569811747023,
                "product_id": 6619564441807,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/output-onlinetexttools.png?v=1619205707"
            },
            {
                "id": 28569811812559,
                "product_id": 6619564441807,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/1757880671.png?v=1619205708",
                "variant_ids": [
                    39495602077903
                ]
            },
            {
                "id": 28569818136783,
                "product_id": 6619564441807,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/output-onlinetexttools_3.png?v=1619205794",
                "variant_ids": [
                    39495602110671
                ]
            },
            {
                "id": 28569819775183,
                "product_id": 6619564441807,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/output-onlinetexttools_573146fe-4833-4fa3-8ec6-52f50a99f4bd.png?v=1619205815"
            },
            {
                "id": 28569820954831,
                "product_id": 6619564441807,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/output-onlinetexttools_3_ef9f7e57-b9e3-4584-a564-f5754738010a.png?v=1619205829"
            },
            {
                "id": 28569821446351,
                "product_id": 6619564441807,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/output-onlinetexttools_1_91f1c4f4-a539-40bd-a057-9542acf25824.png?v=1619205835"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6619564441807",
        "status": "active",
        "variants": [
            {
                "id": 39495602077903,
                "product_id": 6619564441807,
                "title": "S / red",
                "inventory_policy": "deny",
                "price": "1000",
                "inventory_management": "shopify",
                "option1": "S",
                "option2": "red",
                "created_at": "2021-04-15T15:21:55Z",
                "updated_at": "2023-01-16T23:21:26Z",
                "image_id": 28569811812559,
                "inventory_quantity": 1094,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39495602077903"
            },
            {
                "id": 39495602110671,
                "product_id": 6619564441807,
                "title": "S / blue",
                "inventory_policy": "deny",
                "price": "1000",
                "inventory_management": "shopify",
                "option1": "S",
                "option2": "blue",
                "created_at": "2021-04-15T15:21:55Z",
                "updated_at": "2021-10-28T19:12:51Z",
                "image_id": 28569818136783,
                "inventory_quantity": 1116,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39495602110671"
            },
            {
                "id": 39495602143439,
                "product_id": 6619564441807,
                "title": "S / green",
                "inventory_policy": "deny",
                "price": "1000",
                "inventory_management": "shopify",
                "option1": "S",
                "option2": "green",
                "created_at": "2021-04-15T15:21:55Z",
                "updated_at": "2021-04-18T07:29:32Z",
                "inventory_quantity": 15,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39495602143439"
            },
            {
                "id": 39495602176207,
                "product_id": 6619564441807,
                "title": "M / red",
                "inventory_policy": "deny",
                "price": "1000",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "red",
                "created_at": "2021-04-15T15:21:55Z",
                "updated_at": "2021-12-01T10:40:02Z",
                "inventory_quantity": 9,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39495602176207"
            },
            {
                "id": 39495602208975,
                "product_id": 6619564441807,
                "title": "M / blue",
                "inventory_policy": "deny",
                "price": "1000",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "blue",
                "created_at": "2021-04-15T15:21:55Z",
                "updated_at": "2021-04-18T07:29:32Z",
                "inventory_quantity": 14,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39495602208975"
            },
            {
                "id": 39495602241743,
                "product_id": 6619564441807,
                "title": "M / green",
                "inventory_policy": "deny",
                "price": "1000",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "green",
                "created_at": "2021-04-15T15:21:55Z",
                "updated_at": "2021-04-18T07:29:32Z",
                "inventory_quantity": 8,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39495602241743"
            },
            {
                "id": 39495602274511,
                "product_id": 6619564441807,
                "title": "L / red",
                "inventory_policy": "deny",
                "price": "1000",
                "inventory_management": "shopify",
                "option1": "L",
                "option2": "red",
                "created_at": "2021-04-15T15:21:55Z",
                "updated_at": "2021-12-01T10:40:02Z",
                "inventory_quantity": 11114,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39495602274511"
            },
            {
                "id": 39495602307279,
                "product_id": 6619564441807,
                "title": "L / blue",
                "inventory_policy": "deny",
                "price": "1000",
                "inventory_management": "shopify",
                "option1": "L",
                "option2": "blue",
                "created_at": "2021-04-15T15:21:55Z",
                "updated_at": "2021-04-18T07:29:32Z",
                "inventory_quantity": 5,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39495602307279"
            },
            {
                "id": 39495602340047,
                "product_id": 6619564441807,
                "title": "L / green",
                "inventory_policy": "deny",
                "price": "1000",
                "inventory_management": "shopify",
                "option1": "L",
                "option2": "green",
                "created_at": "2021-04-15T15:21:55Z",
                "updated_at": "2021-10-28T19:12:49Z",
                "inventory_quantity": 11111,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39495602340047"
            },
            {
                "id": 39495602372815,
                "product_id": 6619564441807,
                "title": "XL / red",
                "inventory_policy": "deny",
                "price": "1000",
                "inventory_management": "shopify",
                "option1": "XL",
                "option2": "red",
                "created_at": "2021-04-15T15:21:55Z",
                "updated_at": "2021-04-18T07:29:32Z",
                "inventory_quantity": 10,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39495602372815"
            },
            {
                "id": 39495602405583,
                "product_id": 6619564441807,
                "title": "XL / blue",
                "inventory_policy": "deny",
                "price": "1000",
                "inventory_management": "shopify",
                "option1": "XL",
                "option2": "blue",
                "created_at": "2021-04-15T15:21:55Z",
                "updated_at": "2021-04-18T07:29:32Z",
                "inventory_quantity": 20,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39495602405583"
            },
            {
                "id": 39495602471119,
                "product_id": 6619564441807,
                "title": "XL / green",
                "inventory_policy": "deny",
                "price": "1000",
                "inventory_management": "shopify",
                "option1": "XL",
                "option2": "green",
                "created_at": "2021-04-15T15:21:55Z",
                "updated_at": "2021-04-18T07:29:32Z",
                "inventory_quantity": 50,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39495602471119"
            }
        ]
    },
    {
        "id": 6631636369615,
        "title": "product with one option",
        "handle": "product-with-one-option",
        "created_at": "2021-04-18T07:27:40Z",
        "updated_at": "2021-12-01T10:40:04Z",
        "options": [
            {
                "id": 8510294687951,
                "product_id": 6631636369615,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "image": {},
        "admin_graphql_api_id": "gid://shopify/Product/6631636369615",
        "status": "active",
        "variants": [
            {
                "id": 39525064343759,
                "product_id": 6631636369615,
                "title": "Default Title",
                "inventory_policy": "deny",
                "price": "10000",
                "inventory_management": "shopify",
                "option1": "Default Title",
                "created_at": "2021-04-18T07:27:40Z",
                "updated_at": "2021-12-01T10:40:03Z",
                "inventory_quantity": 999,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39525064343759"
            }
        ]
    },
    {
        "id": 7067750564047,
        "title": "Red Sneakers",
        "handle": "kids-sneakers",
        "created_at": "2022-07-18T22:45:22Z",
        "updated_at": "2022-08-13T14:07:12Z",
        "options": [
            {
                "id": 9047979458767,
                "product_id": 7067750564047,
                "name": "Size",
                "position": 1,
                "values": [
                    "8",
                    "9",
                    "10"
                ]
            },
            {
                "id": 9047979491535,
                "product_id": 7067750564047,
                "name": "Color",
                "position": 2,
                "values": [
                    "Red"
                ]
            }
        ],
        "image": {
            "id": 31048573518031,
            "product_id": 7067750564047,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/redsneakers_c119f3df-2a34-4360-8f4c-6ada5b620b6c.jpg?v=1660399632"
        },
        "images": [
            {
                "id": 31048573518031,
                "product_id": 7067750564047,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/redsneakers_c119f3df-2a34-4360-8f4c-6ada5b620b6c.jpg?v=1660399632"
            },
            {
                "id": 31048573550799,
                "product_id": 7067750564047,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/redsneakers_2_f85ea1d9-a4c8-4b1f-b1c4-82fce0d0fafe.jpg?v=1660399632"
            },
            {
                "id": 31048573583567,
                "product_id": 7067750564047,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/redsneakers_3_3817be11-a8b5-4589-948f-a35bdf40a64e.jpg?v=1660399632"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/7067750564047",
        "status": "active",
        "variants": [
            {
                "id": 41931711742159,
                "product_id": 7067750564047,
                "title": "8 / Red",
                "inventory_policy": "deny",
                "price": "35",
                "inventory_management": "shopify",
                "option1": "8",
                "option2": "Red",
                "created_at": "2022-07-18T22:45:22Z",
                "updated_at": "2022-07-19T12:52:09Z",
                "inventory_quantity": 999,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711742159"
            },
            {
                "id": 41931711774927,
                "product_id": 7067750564047,
                "title": "9 / Red",
                "inventory_policy": "deny",
                "price": "35",
                "inventory_management": "shopify",
                "option1": "9",
                "option2": "Red",
                "created_at": "2022-07-18T22:45:22Z",
                "updated_at": "2022-07-19T00:13:51Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711774927"
            },
            {
                "id": 41931711807695,
                "product_id": 7067750564047,
                "title": "10 / Red",
                "inventory_policy": "deny",
                "price": "35",
                "inventory_management": "shopify",
                "option1": "10",
                "option2": "Red",
                "created_at": "2022-07-18T22:45:22Z",
                "updated_at": "2022-07-19T00:13:51Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711807695"
            }
        ]
    },
    {
        "id": 7067750400207,
        "title": "Running Shoes",
        "handle": "cotton-classic-sneaker",
        "created_at": "2022-07-18T22:45:06Z",
        "updated_at": "2022-08-13T14:06:55Z",
        "options": [
            {
                "id": 9047979131087,
                "product_id": 7067750400207,
                "name": "Size",
                "position": 1,
                "values": [
                    "8",
                    "9"
                ]
            },
            {
                "id": 9047979163855,
                "product_id": 7067750400207,
                "name": "Color",
                "position": 2,
                "values": [
                    "Black",
                    "Blue"
                ]
            }
        ],
        "image": {
            "id": 31048571912399,
            "product_id": 7067750400207,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/Shoes3_dda9ea13-c492-4908-9740-c595e3dbe31a.png?v=1660399614"
        },
        "images": [
            {
                "id": 31048571912399,
                "product_id": 7067750400207,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/Shoes3_dda9ea13-c492-4908-9740-c595e3dbe31a.png?v=1660399614"
            },
            {
                "id": 31048571945167,
                "product_id": 7067750400207,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/Shoes2_ede265b7-cbc1-4788-b43e-b6380d9f47bf.png?v=1660399614"
            },
            {
                "id": 31048571977935,
                "product_id": 7067750400207,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/shoes6_3f350fc9-f5dd-4454-bf1a-86dfc4ef4455.png?v=1660399614"
            },
            {
                "id": 31048572010703,
                "product_id": 7067750400207,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/shoes4_1f0950e5-1e22-4e29-bfbc-74d73d68f96f.png?v=1660399614"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/7067750400207",
        "status": "active",
        "variants": [
            {
                "id": 41931710922959,
                "product_id": 7067750400207,
                "title": "8 / Black",
                "inventory_policy": "deny",
                "price": "550.99",
                "compare_at_price": "200",
                "inventory_management": "shopify",
                "option1": "8",
                "option2": "Black",
                "created_at": "2022-07-18T22:45:07Z",
                "updated_at": "2022-07-19T00:13:51Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931710922959"
            },
            {
                "id": 41931710955727,
                "product_id": 7067750400207,
                "title": "8 / Blue",
                "inventory_policy": "deny",
                "price": "550.99",
                "compare_at_price": "200",
                "inventory_management": "shopify",
                "option1": "8",
                "option2": "Blue",
                "created_at": "2022-07-18T22:45:07Z",
                "updated_at": "2022-07-19T00:14:40Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931710955727"
            },
            {
                "id": 41931710988495,
                "product_id": 7067750400207,
                "title": "9 / Black",
                "inventory_policy": "deny",
                "price": "550.99",
                "compare_at_price": "200",
                "inventory_management": "shopify",
                "option1": "9",
                "option2": "Black",
                "created_at": "2022-07-18T22:45:07Z",
                "updated_at": "2022-07-19T00:14:46Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931710988495"
            },
            {
                "id": 41931711021263,
                "product_id": 7067750400207,
                "title": "9 / Blue",
                "inventory_policy": "deny",
                "price": "550.99",
                "compare_at_price": "200",
                "inventory_management": "shopify",
                "option1": "9",
                "option2": "Blue",
                "created_at": "2022-07-18T22:45:07Z",
                "updated_at": "2022-07-19T00:14:45Z",
                "inventory_quantity": 9991000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711021263"
            }
        ]
    },
    {
        "id": 7080137916623,
        "title": "Sample product - No inventory tracked",
        "handle": "sample-product-no-inventory-tracked",
        "created_at": "2022-08-13T14:06:48Z",
        "updated_at": "2022-08-13T14:06:48Z",
        "options": [
            {
                "id": 9062315557071,
                "product_id": 7080137916623,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "image": {},
        "admin_graphql_api_id": "gid://shopify/Product/7080137916623",
        "status": "draft",
        "variants": [
            {
                "id": 41980037923023,
                "product_id": 7080137916623,
                "title": "Default Title",
                "inventory_policy": "deny",
                "price": "100",
                "compare_at_price": "150",
                "option1": "Default Title",
                "created_at": "2022-08-13T14:06:48Z",
                "updated_at": "2022-08-13T14:06:48Z",
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41980037923023"
            }
        ]
    },
    {
        "id": 7067750596815,
        "title": "Shoe Polish with Brush",
        "handle": "shoe-polish-with-brush",
        "created_at": "2022-07-18T22:45:23Z",
        "updated_at": "2022-12-01T23:26:01Z",
        "options": [
            {
                "id": 9047979524303,
                "product_id": 7067750596815,
                "name": "Color",
                "position": 1,
                "values": [
                    "Black",
                    "Grey",
                    "White",
                    "Blue"
                ]
            }
        ],
        "image": {
            "id": 31048574140623,
            "product_id": 7067750596815,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/shoepolishwithbrush_9c86a090-ee76-4585-afff-06ff09b829cc.jpg?v=1660399634"
        },
        "images": [
            {
                "id": 31048574140623,
                "product_id": 7067750596815,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/shoepolishwithbrush_9c86a090-ee76-4585-afff-06ff09b829cc.jpg?v=1660399634"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/7067750596815",
        "status": "active",
        "variants": [
            {
                "id": 41931711840463,
                "product_id": 7067750596815,
                "title": "Black",
                "inventory_policy": "deny",
                "price": "250",
                "compare_at_price": "18",
                "inventory_management": "shopify",
                "option1": "Black",
                "created_at": "2022-07-18T22:45:23Z",
                "updated_at": "2022-12-01T23:26:01Z",
                "inventory_quantity": 995,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711840463"
            },
            {
                "id": 41931711873231,
                "product_id": 7067750596815,
                "title": "Grey",
                "inventory_policy": "deny",
                "price": "250",
                "compare_at_price": "18",
                "inventory_management": "shopify",
                "option1": "Grey",
                "created_at": "2022-07-18T22:45:23Z",
                "updated_at": "2022-12-01T23:26:01Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711873231"
            },
            {
                "id": 41931711905999,
                "product_id": 7067750596815,
                "title": "White",
                "inventory_policy": "deny",
                "price": "250",
                "compare_at_price": "18",
                "inventory_management": "shopify",
                "option1": "White",
                "created_at": "2022-07-18T22:45:23Z",
                "updated_at": "2022-12-01T23:26:01Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711905999"
            },
            {
                "id": 41931711938767,
                "product_id": 7067750596815,
                "title": "Blue",
                "inventory_policy": "deny",
                "price": "15",
                "compare_at_price": "18",
                "inventory_management": "shopify",
                "option1": "Blue",
                "created_at": "2022-07-18T22:45:24Z",
                "updated_at": "2022-07-19T00:14:41Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711938767"
            }
        ]
    },
    {
        "id": 7067750629583,
        "title": "Sneaker in-sole",
        "handle": "special-sneaker-in-sole",
        "created_at": "2022-07-18T22:45:25Z",
        "updated_at": "2022-08-13T14:07:16Z",
        "options": [
            {
                "id": 9047979557071,
                "product_id": 7067750629583,
                "name": "Size",
                "position": 1,
                "values": [
                    "7",
                    "8",
                    "9",
                    "10",
                    "11"
                ]
            }
        ],
        "image": {
            "id": 31048574173391,
            "product_id": 7067750629583,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/sneakerinsole_64470740-0ac7-4662-b852-3e18e9ed7852.jpg?v=1660399636"
        },
        "images": [
            {
                "id": 31048574173391,
                "product_id": 7067750629583,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/sneakerinsole_64470740-0ac7-4662-b852-3e18e9ed7852.jpg?v=1660399636"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/7067750629583",
        "status": "active",
        "variants": [
            {
                "id": 41931711971535,
                "product_id": 7067750629583,
                "title": "7",
                "inventory_policy": "deny",
                "price": "8",
                "inventory_management": "shopify",
                "option1": "7",
                "created_at": "2022-07-18T22:45:25Z",
                "updated_at": "2022-07-19T00:14:36Z",
                "inventory_quantity": 998,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711971535"
            },
            {
                "id": 41931712004303,
                "product_id": 7067750629583,
                "title": "8",
                "inventory_policy": "deny",
                "price": "8",
                "inventory_management": "shopify",
                "option1": "8",
                "created_at": "2022-07-18T22:45:25Z",
                "updated_at": "2022-07-19T00:14:36Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712004303"
            },
            {
                "id": 41931712037071,
                "product_id": 7067750629583,
                "title": "9",
                "inventory_policy": "deny",
                "price": "8",
                "inventory_management": "shopify",
                "option1": "9",
                "created_at": "2022-07-18T22:45:25Z",
                "updated_at": "2022-07-19T00:14:36Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712037071"
            },
            {
                "id": 41931712069839,
                "product_id": 7067750629583,
                "title": "10",
                "inventory_policy": "deny",
                "price": "8",
                "inventory_management": "shopify",
                "option1": "10",
                "created_at": "2022-07-18T22:45:25Z",
                "updated_at": "2022-07-19T00:14:36Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712069839"
            },
            {
                "id": 41931712102607,
                "product_id": 7067750629583,
                "title": "11",
                "inventory_policy": "deny",
                "price": "8",
                "inventory_management": "shopify",
                "option1": "11",
                "created_at": "2022-07-18T22:45:25Z",
                "updated_at": "2022-07-19T00:14:36Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712102607"
            }
        ]
    },
    {
        "id": 7067750531279,
        "title": "Socks",
        "handle": "socks",
        "created_at": "2022-07-18T22:45:19Z",
        "updated_at": "2022-08-13T14:07:08Z",
        "options": [
            {
                "id": 9047979393231,
                "product_id": 7067750531279,
                "name": "Size",
                "position": 1,
                "values": [
                    "S",
                    "M",
                    "L"
                ]
            }
        ],
        "image": {
            "id": 31048573255887,
            "product_id": 7067750531279,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/socks_2297cd06-c34f-4e3e-b7d0-b70c055a7567.jpg?v=1660399628"
        },
        "images": [
            {
                "id": 31048573255887,
                "product_id": 7067750531279,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/socks_2297cd06-c34f-4e3e-b7d0-b70c055a7567.jpg?v=1660399628"
            },
            {
                "id": 31048573288655,
                "product_id": 7067750531279,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/socks3_c2c56d89-2a2e-4312-9d8e-990ceb100b45.jpg?v=1660399628"
            },
            {
                "id": 31048573321423,
                "product_id": 7067750531279,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/socks4_e7749261-87ee-4bdf-a4f4-27eb7615724f.jpg?v=1660399628"
            },
            {
                "id": 31048573354191,
                "product_id": 7067750531279,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/socks2_31892736-58a8-4fd4-b4aa-e0a70f971e90.jpg?v=1660399628"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/7067750531279",
        "status": "active",
        "variants": [
            {
                "id": 41931711611087,
                "product_id": 7067750531279,
                "title": "S",
                "inventory_policy": "deny",
                "price": "20",
                "inventory_management": "shopify",
                "option1": "S",
                "created_at": "2022-07-18T22:45:19Z",
                "updated_at": "2022-07-20T11:02:46Z",
                "inventory_quantity": 996,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711611087"
            },
            {
                "id": 41931711643855,
                "product_id": 7067750531279,
                "title": "M",
                "inventory_policy": "deny",
                "price": "20",
                "inventory_management": "shopify",
                "option1": "M",
                "created_at": "2022-07-18T22:45:19Z",
                "updated_at": "2022-07-19T00:14:31Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711643855"
            },
            {
                "id": 41931711676623,
                "product_id": 7067750531279,
                "title": "L",
                "inventory_policy": "deny",
                "price": "20",
                "inventory_management": "shopify",
                "option1": "L",
                "created_at": "2022-07-18T22:45:19Z",
                "updated_at": "2022-07-19T00:14:21Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711676623"
            }
        ]
    },
    {
        "id": 6548623589583,
        "title": "test",
        "handle": "test",
        "created_at": "2021-03-14T22:06:10Z",
        "updated_at": "2022-07-20T11:00:01Z",
        "options": [
            {
                "id": 8419911434447,
                "product_id": 6548623589583,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "image": {},
        "admin_graphql_api_id": "gid://shopify/Product/6548623589583",
        "status": "active",
        "variants": [
            {
                "id": 39293339861199,
                "product_id": 6548623589583,
                "title": "Default Title",
                "inventory_policy": "deny",
                "price": "100",
                "inventory_management": "shopify",
                "option1": "Default Title",
                "created_at": "2021-03-14T22:06:10Z",
                "updated_at": "2022-07-20T10:57:46Z",
                "inventory_quantity": 112224,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39293339861199"
            }
        ]
    },
    {
        "id": 6548623655119,
        "title": "test2",
        "handle": "test2",
        "created_at": "2021-03-14T22:06:55Z",
        "updated_at": "2022-07-19T00:14:26Z",
        "options": [
            {
                "id": 8419911532751,
                "product_id": 6548623655119,
                "name": "Title",
                "position": 1,
                "values": [
                    "Default Title"
                ]
            }
        ],
        "image": {},
        "admin_graphql_api_id": "gid://shopify/Product/6548623655119",
        "status": "active",
        "variants": [
            {
                "id": 39293340123343,
                "product_id": 6548623655119,
                "title": "Default Title",
                "inventory_policy": "deny",
                "price": "0",
                "inventory_management": "shopify",
                "option1": "Default Title",
                "created_at": "2021-03-14T22:06:55Z",
                "updated_at": "2022-07-19T00:14:26Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39293340123343"
            }
        ]
    },
    {
        "id": 7144743600335,
        "title": "To Delete",
        "handle": "to-delete",
        "created_at": "2022-11-30T15:11:26Z",
        "updated_at": "2022-11-30T15:11:35Z",
        "options": [
            {
                "id": 9137304731855,
                "product_id": 7144743600335,
                "name": "Color",
                "position": 1,
                "values": [
                    "A",
                    "B",
                    "C"
                ]
            }
        ],
        "image": {},
        "admin_graphql_api_id": "gid://shopify/Product/7144743600335",
        "status": "active",
        "variants": [
            {
                "id": 42547306070223,
                "product_id": 7144743600335,
                "title": "A",
                "inventory_policy": "continue",
                "price": "100",
                "compare_at_price": "2000",
                "inventory_management": "shopify",
                "option1": "A",
                "created_at": "2022-11-30T15:11:27Z",
                "updated_at": "2022-11-30T15:11:27Z",
                "inventory_quantity": 1110,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/42547306070223"
            },
            {
                "id": 42547306102991,
                "product_id": 7144743600335,
                "title": "B",
                "inventory_policy": "continue",
                "price": "100",
                "compare_at_price": "2000",
                "inventory_management": "shopify",
                "option1": "B",
                "created_at": "2022-11-30T15:11:27Z",
                "updated_at": "2022-11-30T15:11:27Z",
                "inventory_quantity": 1111,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/42547306102991"
            },
            {
                "id": 42547306135759,
                "product_id": 7144743600335,
                "title": "C",
                "inventory_policy": "continue",
                "price": "100",
                "compare_at_price": "2000",
                "inventory_management": "shopify",
                "option1": "C",
                "created_at": "2022-11-30T15:11:27Z",
                "updated_at": "2022-11-30T15:11:27Z",
                "inventory_quantity": 1111,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/42547306135759"
            }
        ]
    },
    {
        "id": 7067750727887,
        "title": "Women's Sneakers",
        "handle": "cross-sell-popup-demo-womens-sneakers",
        "created_at": "2022-07-18T22:45:33Z",
        "updated_at": "2022-10-12T08:52:10Z",
        "options": [
            {
                "id": 9047979655375,
                "product_id": 7067750727887,
                "name": "Size",
                "position": 1,
                "values": [
                    "6",
                    "7",
                    "8",
                    "9"
                ]
            }
        ],
        "image": {
            "id": 31048574828751,
            "product_id": 7067750727887,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/womens2_e8ad6e80-f096-47e5-b4a3-402d75b8197e.jpg?v=1660399646"
        },
        "images": [
            {
                "id": 31048574828751,
                "product_id": 7067750727887,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/womens2_e8ad6e80-f096-47e5-b4a3-402d75b8197e.jpg?v=1660399646"
            },
            {
                "id": 31048574861519,
                "product_id": 7067750727887,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/womens3_f00d699f-74d4-4c7f-a619-ee34e2355697.jpg?v=1660399646"
            },
            {
                "id": 31048574894287,
                "product_id": 7067750727887,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/WomensShoes1_0e378763-feca-4d89-8001-7811ebfeee84.jpg?v=1660399646"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/7067750727887",
        "status": "active",
        "variants": [
            {
                "id": 41931712430287,
                "product_id": 7067750727887,
                "title": "6",
                "inventory_policy": "deny",
                "price": "28",
                "inventory_management": "shopify",
                "option1": "6",
                "created_at": "2022-07-18T22:45:33Z",
                "updated_at": "2022-10-12T08:45:36Z",
                "inventory_quantity": 996,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712430287"
            },
            {
                "id": 41931712463055,
                "product_id": 7067750727887,
                "title": "7",
                "inventory_policy": "deny",
                "price": "28",
                "inventory_management": "shopify",
                "option1": "7",
                "created_at": "2022-07-18T22:45:33Z",
                "updated_at": "2022-07-19T00:14:56Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712463055"
            },
            {
                "id": 41931712495823,
                "product_id": 7067750727887,
                "title": "8",
                "inventory_policy": "deny",
                "price": "28",
                "inventory_management": "shopify",
                "option1": "8",
                "created_at": "2022-07-18T22:45:33Z",
                "updated_at": "2022-07-19T00:14:55Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712495823"
            },
            {
                "id": 41931712528591,
                "product_id": 7067750727887,
                "title": "9",
                "inventory_policy": "deny",
                "price": "28",
                "inventory_management": "shopify",
                "option1": "9",
                "created_at": "2022-07-18T22:45:33Z",
                "updated_at": "2022-07-19T00:14:56Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931712528591"
            }
        ]
    },
    {
        "id": 7067750465743,
        "title": "Wool Joggers",
        "handle": "wool-joggers-made-with-natural-recycled-materials",
        "created_at": "2022-07-18T22:45:13Z",
        "updated_at": "2022-08-13T14:07:02Z",
        "options": [
            {
                "id": 9047979262159,
                "product_id": 7067750465743,
                "name": "Size",
                "position": 1,
                "values": [
                    "S",
                    "M"
                ]
            },
            {
                "id": 9047979294927,
                "product_id": 7067750465743,
                "name": "Color",
                "position": 2,
                "values": [
                    "White",
                    "Red"
                ]
            },
            {
                "id": 9047979327695,
                "product_id": 7067750465743,
                "name": "Material",
                "position": 3,
                "values": [
                    "Cotton",
                    "Syntax"
                ]
            }
        ],
        "image": {
            "id": 31048573026511,
            "product_id": 7067750465743,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/whiteshoes3_75509c6e-b96d-4723-97e5-ee7655150257.png?v=1660399622"
        },
        "images": [
            {
                "id": 31048573026511,
                "product_id": 7067750465743,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/whiteshoes3_75509c6e-b96d-4723-97e5-ee7655150257.png?v=1660399622"
            },
            {
                "id": 31048573059279,
                "product_id": 7067750465743,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/whiteshoes2_34467fb6-d9b7-4475-b171-dc32d0474b9f.png?v=1660399622"
            },
            {
                "id": 31048573092047,
                "product_id": 7067750465743,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/whiteshoes_b6b42955-b769-4905-9763-0c90576320dc.png?v=1660399622"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/7067750465743",
        "status": "active",
        "variants": [
            {
                "id": 41931711250639,
                "product_id": 7067750465743,
                "title": "S / White / Cotton",
                "inventory_policy": "deny",
                "price": "50",
                "compare_at_price": "330",
                "inventory_management": "shopify",
                "option1": "S",
                "option2": "White",
                "option3": "Cotton",
                "created_at": "2022-07-18T22:45:14Z",
                "updated_at": "2022-07-19T00:14:56Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711250639"
            },
            {
                "id": 41931711283407,
                "product_id": 7067750465743,
                "title": "S / White / Syntax",
                "inventory_policy": "deny",
                "price": "50",
                "compare_at_price": "330",
                "inventory_management": "shopify",
                "option1": "S",
                "option2": "White",
                "option3": "Syntax",
                "created_at": "2022-07-18T22:45:14Z",
                "updated_at": "2022-07-19T00:14:55Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711283407"
            },
            {
                "id": 41931711316175,
                "product_id": 7067750465743,
                "title": "S / Red / Cotton",
                "inventory_policy": "deny",
                "price": "50",
                "compare_at_price": "330",
                "inventory_management": "shopify",
                "option1": "S",
                "option2": "Red",
                "option3": "Cotton",
                "created_at": "2022-07-18T22:45:14Z",
                "updated_at": "2022-07-19T00:14:56Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711316175"
            },
            {
                "id": 41931711348943,
                "product_id": 7067750465743,
                "title": "S / Red / Syntax",
                "inventory_policy": "deny",
                "price": "50",
                "compare_at_price": "330",
                "inventory_management": "shopify",
                "option1": "S",
                "option2": "Red",
                "option3": "Syntax",
                "created_at": "2022-07-18T22:45:14Z",
                "updated_at": "2022-07-19T00:15:03Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711348943"
            },
            {
                "id": 41931711381711,
                "product_id": 7067750465743,
                "title": "M / White / Cotton",
                "inventory_policy": "deny",
                "price": "50",
                "compare_at_price": "330",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "White",
                "option3": "Cotton",
                "created_at": "2022-07-18T22:45:14Z",
                "updated_at": "2022-07-19T00:15:02Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711381711"
            },
            {
                "id": 41931711414479,
                "product_id": 7067750465743,
                "title": "M / White / Syntax",
                "inventory_policy": "deny",
                "price": "50",
                "compare_at_price": "330",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "White",
                "option3": "Syntax",
                "created_at": "2022-07-18T22:45:14Z",
                "updated_at": "2022-07-19T00:15:11Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711414479"
            },
            {
                "id": 41931711447247,
                "product_id": 7067750465743,
                "title": "M / Red / Cotton",
                "inventory_policy": "deny",
                "price": "50",
                "compare_at_price": "330",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "Red",
                "option3": "Cotton",
                "created_at": "2022-07-18T22:45:14Z",
                "updated_at": "2022-07-19T00:15:10Z",
                "inventory_quantity": 10001000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711447247"
            },
            {
                "id": 41931711480015,
                "product_id": 7067750465743,
                "title": "M / Red / Syntax",
                "inventory_policy": "deny",
                "price": "50",
                "compare_at_price": "330",
                "inventory_management": "shopify",
                "option1": "M",
                "option2": "Red",
                "option3": "Syntax",
                "created_at": "2022-07-18T22:45:14Z",
                "updated_at": "2022-07-19T00:15:11Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711480015"
            }
        ]
    },
    {
        "id": 7067750498511,
        "title": "Wool Loafers",
        "handle": "wool-loafers",
        "created_at": "2022-07-18T22:45:15Z",
        "updated_at": "2022-08-13T14:07:04Z",
        "options": [
            {
                "id": 9047979360463,
                "product_id": 7067750498511,
                "name": "Color",
                "position": 1,
                "values": [
                    "Blue",
                    "Brown",
                    "Black"
                ]
            }
        ],
        "image": {
            "id": 31048573223119,
            "product_id": 7067750498511,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/Neemans_M_Wool_Loafer_Aqua_Blue_Creative_FrontView_700x.progressive_e3100668-e88f-43be-8c26-83bed562a890.jpg?v=1660399624"
        },
        "images": [
            {
                "id": 31048573223119,
                "product_id": 7067750498511,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/Neemans_M_Wool_Loafer_Aqua_Blue_Creative_FrontView_700x.progressive_e3100668-e88f-43be-8c26-83bed562a890.jpg?v=1660399624"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/7067750498511",
        "status": "active",
        "variants": [
            {
                "id": 41931711512783,
                "product_id": 7067750498511,
                "title": "Blue",
                "inventory_policy": "deny",
                "price": "300",
                "compare_at_price": "350",
                "inventory_management": "shopify",
                "option1": "Blue",
                "created_at": "2022-07-18T22:45:15Z",
                "updated_at": "2022-07-19T00:15:11Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711512783"
            },
            {
                "id": 41931711545551,
                "product_id": 7067750498511,
                "title": "Brown",
                "inventory_policy": "deny",
                "price": "100",
                "compare_at_price": "350",
                "inventory_management": "shopify",
                "option1": "Brown",
                "created_at": "2022-07-18T22:45:15Z",
                "updated_at": "2022-07-19T00:15:11Z",
                "inventory_quantity": 997,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711545551"
            },
            {
                "id": 41931711578319,
                "product_id": 7067750498511,
                "title": "Black",
                "inventory_policy": "deny",
                "price": "200",
                "compare_at_price": "350",
                "inventory_management": "shopify",
                "option1": "Black",
                "created_at": "2022-07-18T22:45:15Z",
                "updated_at": "2022-07-19T00:15:11Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931711578319"
            }
        ]
    },
    {
        "id": 7067750367439,
        "title": "Wool Loafers - 0$",
        "handle": "wool-loafers-0",
        "created_at": "2022-07-18T22:45:02Z",
        "updated_at": "2022-07-19T00:15:21Z",
        "options": [
            {
                "id": 9047979098319,
                "product_id": 7067750367439,
                "name": "Color",
                "position": 1,
                "values": [
                    "Blue",
                    "Brown",
                    "Black"
                ]
            }
        ],
        "image": {},
        "admin_graphql_api_id": "gid://shopify/Product/7067750367439",
        "status": "active",
        "variants": [
            {
                "id": 41931710824655,
                "product_id": 7067750367439,
                "title": "Blue",
                "inventory_policy": "deny",
                "price": "0",
                "compare_at_price": "350",
                "inventory_management": "shopify",
                "option1": "Blue",
                "created_at": "2022-07-18T22:45:02Z",
                "updated_at": "2022-07-19T00:15:21Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931710824655"
            },
            {
                "id": 41931710857423,
                "product_id": 7067750367439,
                "title": "Brown",
                "inventory_policy": "deny",
                "price": "0",
                "compare_at_price": "350",
                "inventory_management": "shopify",
                "option1": "Brown",
                "created_at": "2022-07-18T22:45:02Z",
                "updated_at": "2022-07-19T00:15:20Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931710857423"
            },
            {
                "id": 41931710890191,
                "product_id": 7067750367439,
                "title": "Black",
                "inventory_policy": "deny",
                "price": "0",
                "compare_at_price": "350",
                "inventory_management": "shopify",
                "option1": "Black",
                "created_at": "2022-07-18T22:45:02Z",
                "updated_at": "2022-07-19T00:15:20Z",
                "inventory_quantity": 1000,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/41931710890191"
            }
        ]
    },
    {
        "id": 6673087594703,
        "title": "Yellow Polo T-Shirt",
        "handle": "yellow-polo-t-shirt",
        "created_at": "2021-05-03T16:44:45Z",
        "updated_at": "2021-11-07T10:33:15Z",
        "options": [
            {
                "id": 8554401497295,
                "product_id": 6673087594703,
                "name": "Size",
                "position": 1,
                "values": [
                    "S",
                    "M"
                ]
            }
        ],
        "image": {
            "id": 28726880075983,
            "product_id": 6673087594703,
            "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/4cce130c-3ce4-438b-a031-4b49edebaee21536839916849-US-Polo-Assn-Men-Yellow-Solid-Polo-Collar-T-shirt-81536839916696-2.jpg?v=1620060287",
            "variant_ids": [
                39639678615759
            ]
        },
        "images": [
            {
                "id": 28726880075983,
                "product_id": 6673087594703,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/4cce130c-3ce4-438b-a031-4b49edebaee21536839916849-US-Polo-Assn-Men-Yellow-Solid-Polo-Collar-T-shirt-81536839916696-2.jpg?v=1620060287",
                "variant_ids": [
                    39639678615759
                ]
            },
            {
                "id": 28726880108751,
                "product_id": 6673087594703,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/7710f75d-8214-4e5f-8179-a714c86783571536839916834-US-Polo-Assn-Men-Yellow-Solid-Polo-Collar-T-shirt-81536839916696-3.jpg?v=1620060288"
            },
            {
                "id": 28726880043215,
                "product_id": 6673087594703,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/41522a0f-cd95-4033-b731-33f32a90de321536839916815-US-Polo-Assn-Men-Yellow-Solid-Polo-Collar-T-shirt-81536839916696-4.jpg?v=1620060288",
                "variant_ids": [
                    39639678648527
                ]
            },
            {
                "id": 28726880010447,
                "product_id": 6673087594703,
                "src": "https://cdn.shopify.com/s/files/1/0506/8439/5727/products/cab1c97f-edde-4a41-9fbd-79a5a97449351536839916869-US-Polo-Assn-Men-Yellow-Solid-Polo-Collar-T-shirt-81536839916696-1.jpg?v=1620060288"
            }
        ],
        "admin_graphql_api_id": "gid://shopify/Product/6673087594703",
        "status": "active",
        "variants": [
            {
                "id": 39639678615759,
                "product_id": 6673087594703,
                "title": "S",
                "inventory_policy": "deny",
                "price": "1320",
                "inventory_management": "shopify",
                "option1": "S",
                "created_at": "2021-05-03T16:44:45Z",
                "updated_at": "2021-05-27T20:04:25Z",
                "image_id": 28726880075983,
                "inventory_quantity": 10,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39639678615759"
            },
            {
                "id": 39639678648527,
                "product_id": 6673087594703,
                "title": "M",
                "inventory_policy": "deny",
                "price": "1320",
                "inventory_management": "shopify",
                "option1": "M",
                "created_at": "2021-05-03T16:44:45Z",
                "updated_at": "2021-05-27T20:04:25Z",
                "image_id": 28726880043215,
                "inventory_quantity": 10,
                "admin_graphql_api_id": "gid://shopify/ProductVariant/39639678648527"
            }
        ]
    }
]