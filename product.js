const products = [
    {
        id: 1,
        name: "Black-Forest-Bliss",
        img_url: "./images/Black-forest/black-forest-bliss_1.webp",
        price: 699,
        category: "Black-Forest"
    },
    {
        id: 2,
        name: "Black-Forest-Eggless",
        img_url: "./images/Black-forest/black-forest-cake-half-kg-eggless_1.webp",
        price: 749,
        category: "Black-Forest"
    },
    {
        id: 3,
        name: "Black-Forest-Designer",
        img_url: "./images/Black-forest/black-forest-designer-cake-eggless-half-kg_1.webp",
        price: 799,
        category: "Black-Forest"
    },
    {
        id: 4,
        name: "Black-Forest-Oreo",
        img_url: "./images/Black-forest/black-forest-oreo-cake-half-kg-eggless_1.webp",
        price: 699,
        category: "Black-Forest"
    },
    {
        id: 5,
        name: "Chocolate-Truffle",
        img_url: "./images/Black-forest/chocolate-truffle-cake-and-pink-roses-bouquet_1.webp",
        price: 899,
        category: "Black-Forest"
    },
    {
        id: 6,
        name: "Creamy-Black-Forest",
        img_url: "./images/Black-forest/creamy-drip-black-forest-cake-half-kg_1.webp",
        price: 749,
        category: "Black-Forest"
    },
    {
        id: 7,
        name: "Cricket-Pitch",
        img_url: "./images/Black-forest/cricket-pitch-cake-1kg-vanilla_1.webp",
        price: 999,
        category: "Black-Forest"
    },
    {
        id: 8,
        name: "Dark-Forest-Heavenly",
        img_url: "./images/Black-forest/dark-forest-heavenly-temptation_1.webp",
        price: 799,
        category: "Black-Forest"
    },
    {
        id: 9,
        name: "Flakey-Black-Forest",
        img_url: "./images/Black-forest/flakey-hearts-black-forest-cake-half-kg_1.webp",
        price: 729,
        category: "Black-Forest"
    },
    {
        id: 10,
        name: "Gems-Black-Forest",
        img_url: "./images/Black-forest/gems-on-top-black-forest-cake-half-kg-eggless_1.webp",
        price: 759,
        category: "Black-Forest"
    },
    {
        id: 11,
        name: "Rainbow-Sprinkles-Chocolate",
        img_url: "./images/Black-forest/rainbow-sprinkles-chocolate-cake-1-kg-eggless_1.webp",
        price: 849,
        category: "Black-Forest"
    },
    {
        id: 12,
        name: "Whipped-Black-Forest",
        img_url: "./images/Black-forest/whipped-black-forest-cream-cake-half-kg_1.webp",
        price: 699,
        category: "Black-Forest"
    },
    {
        id: 13,
        name: "Zig-Zag-Black-Forest",
        img_url: "./images/Black-forest/zig-zag-black-forest-cake-half-kg-eggless_1.webp",
        price: 759,
        category: "Black-Forest"
    },
    {
        id: 14,
        name: "Black-Forest-Eggless",
        img_url: "./images/Black-forest/yummy-black-forest-treat-cake-eggless-half-kg_1.webp",
        price: 729,
        category: "Black-Forest"
    },
    {
        id: 15,
        name: "Chocolate-Cream",
        img_url: "./images/chocolate-cake/chocolate-cream-cake-half-kg_1.webp",
        price: 799,
        category: "Black-Forest"
    },
    {
        id: 16,
        name: "Butterscotch",
        img_url: "./images/Butterscotch Cakes/butterscotch-cake-half-kg_1.webp",
        price: 699,
        category: "Butterscotch"
    },
    {
        id: 17,
        name: "Butterscotch-Rasmalai",
        img_url: "./images/Butterscotch Cakes/butterscotch-cake-with-rasmalai-1kg_1.webp",
        price: 849,
        category: "Butterscotch"
    },
    {
        id: 18,
        name: "Butterscotch-Cream",
        img_url: "./images/Butterscotch Cakes/butterscotch-cream-cake-half-kg_1.webp",
        price: 749,
        category: "Butterscotch"
    },
    {
        id: 19,
        name: "Crunchy-Butterscotch",
        img_url: "./images/Butterscotch Cakes/crunchy-butterscotch-delight-cake-half-kg_1.webp",
        price: 779,
        category: "Butterscotch"
    },
    {
        id: 20,
        name: "Heavenly-Butterscotch",
        img_url: "./images/Butterscotch Cakes/heavenly-butterscotch-cake-half-kg_1.webp",
        price: 799,
        category: "Butterscotch"
    },
    {
        id: 21,
        name: "Butterscotch-Cream",
        img_url: "./images/Butterscotch Cakes/heavenly-butterscotch-cream-cake-half-kg_1.webp",
        price: 759,
        category: "Butterscotch"
    },
    {
        id: 22,
        name: "Chocolate-fudge",
        img_url: "./images/chocolate-cake/chocolate-fudge-cake-half-kg_1.webp",
        price: 729,
        category: "Chocolate"
    },
    {
        id: 23,
        name: "Chocolate-truffle",
        img_url: "./images/chocolate-cake/chocolate-truffle-cream-cake-half-kg_1.webp",
        price: 759,
        category: "Chocolate"
    },
    {
        id: 24,
        name: "Chocolate-walnut",
        img_url: "./images/chocolate-cake/chocolate-walnut-truffle-half-kg_1.webp",
        price: 779,
        category: "Chocolate"
    },
    {
        id: 25,
        name: "Death-by-chocolate",
        img_url: "./images/chocolate-cake/death-by-chocolate-cake-half-kg_1.webp",
        price: 799,
        category: "Chocolate"
    },
    {
        id: 26,
        name: "Fudge-brownie",
        img_url: "./images/chocolate-cake/fudge-brownie-cake-half-kg_1.webp",
        price: 749,
        category: "Chocolate"
    },
    {
        id: 27,
        name: "Chocolate-overload",
        img_url: "./images/chocolate-cake/heavenly-chocolate-overload-cake-half-kg_1.webp",
        price: 769,
        category: "Chocolate"
    },
    {
        id: 28,
        name: "Kit-kat-crunch",
        img_url: "./images/chocolate-cake/kit-kat-crunch-cream-cake-half-kg_1.webp",
        price: 759,
        category: "Chocolate"
    },
    {
        id: 29,
        name: "Yummy-truffle-cream",
        img_url: "./images/chocolate-cake/yummy-truffle-cream-cake-half-kg_1.webp",
        price: 749,
        category: "Chocolate"
    },
    {
        id: 30,
        name: "Red-velvet-cream",
        img_url: "./images/Red Velvet Cakes/red-velvet-cream-cake-half-kg_1.webp",
        price: 699,
        category: "Red-Velvet"
    },
    {
        id: 31,
        name: "Red-velvet-eggless",
        img_url: "./images/Red Velvet Cakes/red-velvet-fresh-cream-cake-half-kg-eggless_3.webp",
        price: 729,
        category: "Red-Velvet"
    },
    {
        id: 32,
        name: "Red-velvet-gems",
        img_url: "./images/Red Velvet Cakes/red-velvet-gems-cake-half-kg-eggless_1.webp",
        price: 759,
        category: "Red-Velvet"
    },
    {
        id: 33,
        name: "Red-velvet-heart",
        img_url: "./images/Red Velvet Cakes/red-velvet-heart-cream-cake-eggless-half-kg_1.webp",
        price: 779,
        category: "Red-Velvet"
    },
    {
        id: 34,
        name: "Sweet-red-heart",
        img_url: "./images/Red Velvet Cakes/sweet-red-heart-velvet-cake-eggless-half-kg_1.webp",
        price: 799,
        category: "Red-Velvet"
    },
    {
        id: 35,
        name: "Valentine-s-heart",
        img_url: "./images/Red Velvet Cakes/valentine-s-heart-red-velvet-cake-half-kg_1.webp",
        price: 999,
        category: "Red-Velvet"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    function renderProducts(filteredProducts) {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.img_url}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price:₹${product.price}</p>
                <button onclick="addToCart('${product.name}',${product.price})">Add to Cart</button>`;            
            productList.appendChild(productItem);
        });
    }

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        renderProducts(filteredProducts);
    }

    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);

    renderProducts(products);
});