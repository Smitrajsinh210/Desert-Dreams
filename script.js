let cart = [];

function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartItems.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ₹${item.price}  <span class="quantity">${item.quantity}</span>
            <button onclick="decreaseQuantity('${item.name}')">-</button>
            <button onclick="increaseQuantity('${item.name}')">+</button>
            <button class="remove-btn" onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItems.appendChild(li);
    });
    
    cartTotal.textContent = `₹${totalPrice.toFixed(2)}`;
}

function decreaseQuantity(productName) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        if (product.quantity > 1) {
            product.quantity--;
        } else {
            cart = cart.filter(item => item.name !== productName);
        }
        updateCart();
    }
}

function increaseQuantity(productName) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity++;
        updateCart();
    }
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}

function toggleCart() {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
}

function clearCart() {
    cart = [];
    updateCart();
}