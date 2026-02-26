import {Product,Category} from '../models/intfaces';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' }
];

export const PRODUCTS: Product[] = [
  // --- SMARTPHONES (Category ID: 1) ---
  {
    id: 101,
    category: CATEGORIES[0],
    name: 'Apple iPhone 16 Pro Max 256GB Gold',
    description: 'Новейший флагман Apple с титановым корпусом и улучшенной камерой.',
    price: 695000,
    rating: 5.0,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=preview-large',
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123729348/'
  },
  {
    id: 102,
    category: CATEGORIES[0],
    name: 'Samsung Galaxy S24 Ultra 512GB Grey',
    description: 'Смартфон с AI-функциями и встроенным стилусом S Pen.',
    price: 545000,
    rating: 4.9,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=preview-large',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-512-gb-seryi-116043556/'
  },
  {
    id: 103,
    category: CATEGORIES[0],
    name: 'Xiaomi Redmi Note 13 Pro 8/256GB Black',
    description: 'Отличное соотношение цены и качества с камерой 200 Мп.',
    price: 135000,
    rating: 4.8,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=preview-large',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-8-gb-256-gb-chernyi-115938806/'
  },
  {
    id: 104,
    category: CATEGORIES[0],
    name: 'Google Pixel 8 Pro 12/128GB Blue',
    description: 'Лучший опыт чистого Android и непревзойденные алгоритмы фото.',
    price: 380000,
    rating: 4.7,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/h67/63603038289950.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-128-gb-goluboi-113791632/'
  },
  {
    id: 105,
    category: CATEGORIES[0],
    name: 'Apple iPhone 13 128GB Midnight',
    description: 'Классика, которая остается актуальной и мощной.',
    price: 275000,
    rating: 5.0,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
  },

  // --- LAPTOPS (Category ID: 2) ---
  {
    id: 201,
    category: CATEGORIES[1],
    name: 'Apple MacBook Air 13 M2 8/256GB Space Grey',
    description: 'Тонкий, легкий и невероятно производительный ноутбук.',
    price: 460000,
    rating: 5.0,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxy3-105534032/'
  },
  {
    id: 202,
    category: CATEGORIES[1],
    name: 'ASUS ROG Strix G16 Gray',
    description: 'Мощный игровой ноутбук с RTX 4060 для любых задач.',
    price: 650000,
    rating: 4.9,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pea/p02/60815937.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-g614ju-n3155-90nr0cb1-m00ba0-seryi-110034444/'
  },
  {
    id: 203,
    category: CATEGORIES[1],
    name: 'Lenovo IdeaPad 3 15ITL6 Grey',
    description: 'Надежный ноутбук для учебы и офисной работы.',
    price: 185000,
    rating: 4.6,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h80/he3/86365220208670.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h80058rk-seryi-102099411/'
  },
  {
    id: 204,
    category: CATEGORIES[1],
    name: 'Acer Nitro 5 AN515 Black',
    description: 'Популярное решение для геймеров начального уровня.',
    price: 340000,
    rating: 4.8,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h3f/h46/84777684598814.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-58-nh-qfjer-004-chernyi-116562544/'
  },
  {
    id: 205,
    category: CATEGORIES[1],
    name: 'HP Victus 15-fb0011ur Silver',
    description: 'Стильный дизайн и хорошая система охлаждения.',
    price: 310000,
    rating: 4.7,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/hcc/85983814680606.png?format=preview-large',
    link: 'https://kaspi.kz/shop/p/hp-victus-15-fb0011ur-6f4m0ea-serebristyi-106038148/'
  },

  // --- HEADPHONES (Category ID: 3) ---
  {
    id: 301,
    category: CATEGORIES[2],
    name: 'Apple AirPods Pro 2 with USB-C',
    description: 'Лучшее шумоподавление и экосистема Apple.',
    price: 115000,
    rating: 5.0,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg',
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-magsafe-case-usb-c-belyi-113398320/'
  },
  {
    id: 302,
    category: CATEGORIES[2],
    name: 'Sony WH-1000XM5 Black',
    description: 'Лидер в индустрии полноразмерных наушников с ANC.',
    price: 155000,
    rating: 4.9,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105221445/'
  },
  {
    id: 303,
    category: CATEGORIES[2],
    name: 'Marshall Major IV Black',
    description: 'Легендарный звук и до 80 часов работы без подзарядки.',
    price: 65000,
    rating: 4.9,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-101036327/'
  },
  {
    id: 304,
    category: CATEGORIES[2],
    name: 'Samsung Galaxy Buds3 Pro Silver',
    description: 'Новый дизайн и кристально чистый звук от Samsung.',
    price: 95000,
    rating: 4.8,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p1f/p7d/53123420.png?format=preview-large',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds3-pro-serebristyi-121404169/'
  },
  {
    id: 305,
    category: CATEGORIES[2],
    name: 'HyperX Cloud II Red',
    description: 'Классика игровых гарнитур с виртуальным звуком 7.1.',
    price: 45000,
    rating: 4.8,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h72/he2/63770832764958.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/hyperx-cloud-ii-khx-hscp-rd-krasnyi-1000084/'
  },

  // --- TABLETS (Category ID: 4) ---
  {
    id: 401,
    category: CATEGORIES[3],
    name: 'Apple iPad Air 2024 11 M2 128GB Grey',
    description: 'Мощный чип M2 теперь в iPad Air.',
    price: 345000,
    rating: 5.0,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hdb/86223792013342.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-11-wi-fi-128gb-seryi-119330107/'
  },
  {
    id: 402,
    category: CATEGORIES[3],
    name: 'Samsung Galaxy Tab S9 FE Grey',
    description: 'Защита от воды и комплектный S Pen.',
    price: 180000,
    rating: 4.9,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pda/pb2/17047878.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-fe-10-9-6-gb-128-gb-seryi-113359678/'
  },
  {
    id: 403,
    category: CATEGORIES[3],
    name: 'Xiaomi Pad 6 8/256GB Blue',
    description: 'Отличный экран 144 Гц и мощный процессор.',
    price: 155000,
    rating: 4.9,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-8-gb-256-gb-goluboi-110884241/'
  },
  {
    id: 404,
    category: CATEGORIES[3],
    name: 'Apple iPad Pro 2024 11 M4 256GB Black',
    description: 'Самый тонкий Apple продукт с невероятным OLED дисплеем.',
    price: 520000,
    rating: 5.0,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=preview-large',
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2024-11-wi-fi-256gb-chernyi-119329188/'
  },
  {
    id: 405,
    category: CATEGORIES[3],
    name: 'Lenovo Tab P11 Gen 2 Grey',
    description: 'Хороший планшет для медиа и работы с документами.',
    price: 125000,
    rating: 4.7,
    like: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p2b/p29/43598687.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-2nd-gen-11-5-6-gb-128-gb-seryi-109919519/'
  }
];
