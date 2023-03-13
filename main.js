const addProduct = () => {
    const productField = document.getElementById("product-name");
    const quantityField = document.getElementById("product-quantity");
    product = productField.value;
    quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProduct(product, quantity);
    saveProductsToLocalStorage(product, quantity);
}

let num = 0;
const displayProduct = (product, quantity) => {
    num ++;
    const ul = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText = `${num}. ${product}: ${quantity} Pcs`;
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductsToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);
}

const displayProductFromLocalStorage = () => {
    const saveCart = getStoredShoppingCart();
    console.log(saveCart); 
    for (const product in saveCart) {
        const quantity = saveCart[product];
        console.log(product, quantity);
        const ul = document.getElementById("product-container");
        const li = document.createElement("li");
        li.innerText = `${product}: ${quantity} Pcs`;
        ul.appendChild(li);
    }
}
displayProductFromLocalStorage();