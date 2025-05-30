// product.js:

const products = [
  {
    name: "Rose Plant",
    description: "Exclusive Rose Plant to make your garden smell amazing!",
    price: 39.99,
    discountPrice: 34.99,
    countInStock: 20,
    sku: "OX-SH-001",
    category: "Plants",
    brand: "10Club",
    colors: ["Red", "Blue", "Yellow", "Pink"],
    collections: "Plants",
    images: [
      {
        url: "https://media.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000014513379-1000014513378_02-2100.jpg",
        altText: "Rose Plant",
      },
      {
        url: "https://media.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000014513379-1000014513378_02-2100.jpg",
        altText: "Rose Plant",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Neem Fungicides",
    description:
      "Use our best-seller neem plant fungicide to protect your neem plants from diseases!",
    price: 29.99,
    discountPrice: 24.99,
    countInStock: 35,
    sku: "SLIM-SH-002",
    category: "Fungicides",
    brand: "Kyari",
    colors: ["White"],
    collections: "Fungicides",
    images: [
      {
        url: "https://www.gandhisgardentokitchen.com/product-images/m0g78jqMD0+-1-.jpg/1481995000000260381/600x600",
        altText: "Neem Fungicides",
      },
      {
        url: "https://www.gandhisgardentokitchen.com/product-images/m0g78jqMD0+-1-.jpg/1481995000000260381/600x600",
        altText: "Neem Fungicides",
      },
    ],
    rating: 4.8,
    numReviews: 15,
  },
  {
    name: "Feebex Fertilizer",
    description:
      "Do you have plants at Home? Want to protect them? Say no more! Use our Fertilizers to take care of them",
    price: 49.99,
    discountPrice: 44.99,
    countInStock: 15,
    sku: "CAS-DEN-003",
    category: "Fertilizers",
    brand: "Tehniyan",
    colors: ["White"],
    collections: "Fertilizers",
    images: [
      {
        url: "https://www.bhg.com/thmb/gyJ4LC37eq-8u2tkkM016J1B7jw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Fertilizing-plants-0440837aeee64749832645ba62572f95.jpg",
        altText: "Feebex Fertilizer",
      },
      {
        url: "https://www.bhg.com/thmb/gyJ4LC37eq-8u2tkkM016J1B7jw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Fertilizing-plants-0440837aeee64749832645ba62572f95.jpg",
        altText: "Feebex Fertilizer",
      },
    ],
    rating: 4.6,
    numReviews: 8,
  },
  {
    name: "Sunflower Seeds",
    description: "Decorate your garden with our exclusive sunflower seeds!!!!!",
    price: 29.99,
    discountPrice: 22.99,
    countInStock: 25,
    sku: "PRNT-RES-004",
    category: "Seeds",
    brand: "BombayGreens",
    colors: ["Brown", "White"],
    collections: "Seeds",
    images: [
      {
        url: "https://www.andersonintl.com/wp-content/uploads/2022/08/Sunflower-1024x575.jpg",
        altText: "Sunflower Seeds",
      },
      {
        url: "https://www.andersonintl.com/wp-content/uploads/2022/08/Sunflower-1024x575.jpg",
        altText: "Sunflower Seeds",
      },
    ],
    rating: 4.4,
    numReviews: 10,
  },
  {
    name: "Aloe Vera Plant",
    description:
      "The best Aloe Vera Plant in the Country is here! Buy 1 Get 1 free!",
    price: 34.99,
    discountPrice: 29.99,
    countInStock: 30,
    sku: "SLIM-EIR-005",
    category: "Plants",
    brand: "Kyari",
    colors: ["White"],
    collections: "Plants",
    images: [
      {
        url: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/aloe-vera/133346/Aloe-Vera-fibreclay-pot-desk_c6832acb27c72430f782d679cd672ef1.webp",
        altText: "Aloe Vera Plant",
      },
      {
        url: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/aloe-vera/133346/Aloe-Vera-fibreclay-pot-desk_c6832acb27c72430f782d679cd672ef1.webp",
        altText: "Aloe Vera Plant",
      },
    ],
    rating: 5,
    numReviews: 14,
  },
  {
    name: "Fastex Fertilizer",
    description: "Fasten your plant growth with our Fastex Fertilizer!",
    price: 24.99,
    discountPrice: 19.99,
    countInStock: 50,
    sku: "POLO-TSH-006",
    category: "Fertilizers",
    brand: "10Club",
    colors: ["White"],
    collections: "Fertilizers",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/81IxGAVvbtS.jpg",
        altText: "Fastex Fertilizer",
      },
      {
        url: "https://m.media-amazon.com/images/I/81IxGAVvbtS.jpg",
        altText: "Fastex Fertilizer",
      },
    ],
    rating: 4.3,
    numReviews: 22,
  },
  {
    name: "Chilli Fungicides",
    description:
      "Want hot chillies? Get our fungicides to protect your chilli plants!",
    price: 19.99,
    discountPrice: 15.99,
    countInStock: 40,
    sku: "OVS-GRF-007",
    category: "Fungicides",
    brand: "Tehniyan",
    colors: ["Red", "Green"],
    collections: "Fungicides",
    images: [
      {
        url: "https://lilaagrotech.com/wp-content/uploads/2018/05/Chilli-Spcl.webp",
        altText: "Chilli Fungicides",
      },
    ],
    rating: 4.6,
    numReviews: 30,
  },
  {
    name: "Tomato Seeds",
    description:
      "Get brightning and super fresh tomatoes picked just for you straight from the farms of Assam!",
    price: 22.99,
    discountPrice: 18.99,
    countInStock: 35,
    sku: "REG-HEN-008",
    category: "Seeds",
    brand: "Tehniyan",
    colors: ["Red", "Green"],
    collections: "Seeds",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0722/2059/files/saaho-tomato-to-3251-file-4075.jpg?v=1740119408",
        altText: "Tomato Seeds",
      },
    ],
    rating: 4.5,
    numReviews: 25,
  },
  {
    name: "Tulsi Plant",
    description:
      "Experience a cozy and vibrant environment in your house with these tulsi plants!",
    price: 27.99,
    discountPrice: 22.99,
    countInStock: 20,
    sku: "LST-THR-009",
    category: "Plants",
    brand: "10Club",
    colors: ["Green"],
    collections: "Plants",
    images: [
      {
        url: "https://cdn.storehippo.com/s/6176774ef575bbd2b3331c8a/ms.files/uploads/tulsi%203.png",
        altText: "Tulsi Plant",
      },
    ],
    rating: 4.4,
    numReviews: 18,
  },
  {
    name: "Chilli Seeds",
    description:
      "Have your own chillies at home daily without any limit! Grow, pluck and eat!",
    price: 14.99,
    discountPrice: 11.99,
    countInStock: 60,
    sku: "VNECK-CLS-010",
    category: "Seeds",
    brand: "Kyari",
    colors: ["Red"],
    collections: "Seeds",
    images: [
      {
        url: "https://www.urbanplant.in/cdn/shop/files/BulletGreenChillicopy.webp?v=1691587112",
        altText: "Chilli Seeds",
      },
    ],
    rating: 4.7,
    numReviews: 28,
  },
  {
    name: "Lemon Seeds",
    description:
      "Get squishy, sour and yummyyy lemons at your house, get a Lemon seed today!",
    price: 40,
    discountPrice: 35,
    countInStock: 20,
    sku: "BW-001",
    category: "Seeds",
    brand: "Tehniyan",
    colors: ["Green", "Yellow"],
    collections: "Seeds",
    images: [
      {
        url: "https://img3.exportersindia.com/product_images/bc-full/2023/10/6877019/kagzi-lemon-seed-1696594940-5792842.jpg",
        altText: "Lemon Seeds",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Lemon Plant",
    description: "Get a lemon plant today! Decorate your garden!",
    price: 45,
    discountPrice: 40,
    countInStock: 15,
    sku: "BW-002",
    category: "Plants",
    brand: "BombayGreens",
    colors: ["Green"],
    collections: "Plants",
    images: [
      {
        url: "https://www.springhillnursery.com/cdn/shop/files/Meyer_Lemons.webp",
        altText: "Lemon Plant",
      },
    ],
    rating: 4.7,
    numReviews: 20,
  },
  {
    name: "Lemon Fungicides",
    description: "Get a lemon fungicide today to protect your lemon plant!",
    price: 35,
    discountPrice: 30,
    countInStock: 25,
    sku: "BW-003",
    category: "Fungicides",
    brand: "Ugaoo",
    colors: ["Black"],
    collections: "Fungicides",
    images: [
      {
        url: "https://cdn.prod.website-files.com/628ee8cd8f04ca5405cebd16/64f9a4e9e02b05b13fe6d24f_searles-root-rot-systemic-fungicide-Product%20Image.webp",
        altText: "Lemon Fungicides",
      },
    ],
    rating: 4.3,
    numReviews: 18,
  },
  {
    name: "Lemon Plant Fertilizer",
    description:
      "Get your lemon plants the best protection with our fungicides!",
    price: 60,
    discountPrice: 50,
    countInStock: 30,
    sku: "BW-004",
    category: "Fertilizers",
    brand: "10Club",
    colors: ["Yellow"],
    collections: "Fertilizers",
    images: [
      {
        url: "https://images.meesho.com/images/products/435842869/il7dm_512.webp",
        altText: "Lemon Plant Fertilizer",
      },
    ],
    rating: 4.6,
    numReviews: 22,
  },
  {
    name: "Hibiscus Fertilizer",
    description: "The best hibiscus fertilizer available in market today!",
    price: 55,
    discountPrice: 48,
    countInStock: 40,
    sku: "BW-005",
    category: "Fertilizers",
    brand: "Kyari",
    colors: ["Black", "White"],
    collections: "Fertilizers",
    images: [
      {
        url: "https://sansargreen.com/wp-content/uploads/2024/03/Hibiscus-Food_Sansar-Agro.webp",
        altText: "Hibiscus Fertilizer",
      },
    ],
    rating: 4.8,
    numReviews: 15,
  },
  {
    name: "Marigold Plant",
    description: "Feel all goldy goldy with these beautiful marigold plant!",
    price: 40,
    discountPrice: 35,
    countInStock: 20,
    sku: "BW-006",
    category: "Plants",
    brand: "Kyari",
    colors: ["Yellow", "Orange"],
    collections: "Plants",
    images: [
      {
        url: "https://5.imimg.com/data5/ECOM/Default/2023/11/364389936/OJ/OH/TG/203190808/setof2marigoldin4inchnurserypot89.jpg",
        altText: "Marigold Plant",
      },
    ],
    rating: 4.2,
    numReviews: 17,
  },
  {
    name: "Marigold Fungicides",
    description:
      "The best marigold plant fungicide to protect your plant everyday!",
    price: 65,
    discountPrice: 55,
    countInStock: 15,
    sku: "BW-007",
    category: "Fungicides",
    brand: "10Club",
    colors: ["Red", "Black"],
    collections: "Fungicides",
    images: [
      {
        url: "https://www.shutterstock.com/image-photo/color-fungicide-coating-marigold-seeds-260nw-1332948443.jpg",
        altText: "Marigold Fungicides",
      },
    ],
    rating: 4.7,
    numReviews: 10,
  },
  {
    name: "Hibiscus Fungicide",
    description: "Best Hibiscus Plant Fungicide is here!",
    price: 50,
    discountPrice: 45,
    countInStock: 25,
    sku: "BW-008",
    category: "Fungicides",
    brand: "Ugaoo",
    colors: ["Brown", "Black"],
    collections: "Fungicides",
    images: [
      {
        url: "https://cdn.domyown.com/images/thumbnails/1542-Fung-onil-Bonide-16oz/1542-Fung-onil-Bonide-16oz.jpg.thumb_280x280.jpg",
        altText: "Hibiscus Fungicides",
      },
    ],
    rating: 4.5,
    numReviews: 13,
  },
  {
    name: "Marigold Seeds",
    description: "Best seeds to have magnificent marigold plants!",
    price: 35,
    discountPrice: 30,
    countInStock: 35,
    sku: "BW-009",
    category: "Seeds",
    brand: "BombayGreens",
    colors: ["Gray", "Black"],
    collections: "Seeds",
    images: [
      {
        url: "https://5.imimg.com/data5/BT/UX/YB/SELLER-46512637/marigold-seeds-kolkatti--500x500.jpg",
        altText: "Marigold Seeds",
      },
    ],
    rating: 4.3,
    numReviews: 14,
  },
  {
    name: "Marigold Fertilizer",
    description: "One of the top fertilizers available today in the market!.",
    price: 70,
    discountPrice: 60,
    countInStock: 20,
    sku: "BW-010",
    category: "Fertilizers",
    brand: "Eha",
    colors: ["Black", "Navy"],
    collections: "Fertilizers",
    images: [
      {
        url: "https://images.meesho.com/images/products/411496336/njelh_512.webp",
        altText: "Marigold Fertilizer",
      },
    ],
    rating: 4.9,
    numReviews: 8,
  },
  {
    name: "Marigold Plant Pot",
    description:
      "Decorate your house with the best marigold plant in the market today!",
    price: 40,
    discountPrice: 35,
    countInStock: 25,
    sku: "TW-W-001",
    category: "Plants",
    brand: "Tehniyan",
    colors: ["White", "Red", "Yellow"],
    collections: "Plants",
    images: [
      {
        url: "https://images.meesho.com/images/products/411496336/njelh_512.webp",
        altText: "Marigold Plant Pot",
      },
    ],
    rating: 4.6,
    numReviews: 15,
  },
  {
    name: "Hibiscus Flower Pot",
    description: "Get our BEST SELLER Hibiscus Flower Pot!",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "TW-W-002",
    category: "Plants",
    brand: "Eha",
    colors: ["White", "Pink", "Red"],
    collections: "Plants",
    images: [
      {
        url: "https://costafarms.com/cdn/shop/articles/Costa-Farms-Tricolor-HibisQs-Hibiscus-Bowl.jpg?v=1741704141",
        altText: "Hibiscus Flower Pot",
      },
    ],
    rating: 4.7,
    numReviews: 20,
  },
  {
    name: "Tomato Plant",
    description: "Decorate your home with the plants and have tomatoes to eat!",
    price: 25,
    discountPrice: 20,
    countInStock: 50,
    sku: "TW-W-003",
    category: "Plants",
    brand: "10Club",
    colors: ["Red"],
    collections: "Plants",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/71MwMz52+EL._AC_UF1000,1000_QL80_.jpg",
        altText: "Tomato Plant",
      },
    ],
    rating: 4.5,
    numReviews: 25,
  },
  {
    name: "Coriander Plant Fertilizer",
    description:
      "Coriander is used highest in Indian households and many times they are not hygienic enough.Get our freshly picked coriander fertilizer to protect your plants!",
    price: 45,
    discountPrice: 40,
    countInStock: 35,
    sku: "TW-W-004",
    category: "Fertilizers",
    brand: "Eha",
    colors: ["Green"],
    collections: "Fertilizers",
    images: [
      {
        url: "https://sansargreen.com/wp-content/uploads/2024/03/NPK-Coriander-Plant.webp",
        altText: "Coriander Plant Fertilizer",
      },
    ],
    rating: 4.7,
    numReviews: 18,
  },
  {
    name: "Coriander Seeds",
    description: "One of the best available coriander seeds in market today!",
    price: 35,
    discountPrice: 30,
    countInStock: 40,
    sku: "TW-W-005",
    category: "Seeds",
    brand: "Eha",
    colors: ["Black", "White"],
    collections: "Seeds",
    images: [
      {
        url: "https://www.naturalspices.com/img/744/744/resize/2/8/280423_a01-01_korianderzaad_strooibus_700x700.png",
        altText: "Coriander Seeds",
      },
    ],
    rating: 4.8,
    numReviews: 22,
  },
  {
    name: "Tulsi Plant",
    description:
      "Tulsi Plant to enhance the purity of your house and feel the presense of the divine energies!",
    price: 30,
    discountPrice: 25,
    countInStock: 45,
    sku: "TW-W-006",
    category: "Plants",
    brand: "Ugaoo",
    colors: ["White", "Black"],
    collections: "Plants",
    images: [
      {
        url: "https://budsnblush.com/cdn/shop/products/7b47c927867aa549f5603e623f1e4ab1_QvjmDzAf1V.jpg?v=1669819637",
        altText: "Tulsi Plant",
      },
    ],
    rating: 4.6,
    numReviews: 30,
  },
  {
    name: "Organic Compost Fertilizer",
    description:
      "Made from the waste products of animals and the best compost available in market today!",
    price: 55,
    discountPrice: 50,
    countInStock: 30,
    sku: "TW-W-007",
    category: "Fertilizers",
    brand: "Ugaoo",
    colors: ["Brown"],
    collections: "Fertilizers",
    images: [
      {
        url: "https://images.jdmagicbox.com/quickquotes/images_main/-eg6lt5xu.jpg",
        altText: "Organic Compost Fertilizer",
      },
    ],
    rating: 4.7,
    numReviews: 26,
  },
  {
    name: "Neem Fungicides",
    description: "The best neem fungicide available in market today!",
    price: 45,
    discountPrice: 40,
    countInStock: 20,
    sku: "TW-W-008",
    category: "Fungicides",
    brand: "Ugaoo",
    colors: ["Green"],
    collections: "Fungicides",
    images: [
      {
        url: "https://images.jdmagicbox.com/quickquotes/images_main/-eg6lt5xu.jpg",
        altText: "Neem",
      },
    ],
    rating: 4.5,
    numReviews: 19,
  },
  {
    name: "Sunflower Seeds",
    description:
      "Get yourself our special edition sunflower seeds and let your house smell amazing!",
    price: 60,
    discountPrice: 55,
    countInStock: 25,
    sku: "TW-W-009",
    category: "Seeds",
    brand: "Ugaoo",
    colors: ["Brown", "White"],
    collections: "Seeds",
    images: [
      {
        url: "https://static.toiimg.com/thumb/imgsize-391695,msid-79167979,width-375,height-210,resizemode-75/79167979.jpg",
        altText: "Sunflower Seeds",
      },
    ],
    rating: 4.8,
    numReviews: 25,
  },
  {
    name: "Rose Plant",
    description:
      "Gift your loved ones the best rose flowers! Shop from Plant Pulse today!",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "TW-W-010",
    category: "Plants",
    brand: "10Club",
    colors: ["Red", "Black", "Blue", "White"],
    collections: "Plants",
    images: [
      {
        url: "https://lucknownursery.com/wp-content/uploads/2020/09/pink1-1.jpg",
        altText: "Rose Plant",
      },
    ],
    rating: 4.7,
    numReviews: 22,
  },
];

module.exports = products;
