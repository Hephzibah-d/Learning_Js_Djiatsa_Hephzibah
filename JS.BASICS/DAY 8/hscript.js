let cart = [];

function addItem(item) {
    cart.push(item);
    console.log(`${item} has been added to the cart.`);
}

function removeItem(index) {
    if (index >= 0 && index < cart.length) {
        let removedItem = cart.splice(index, 1);
        console.log(`${removedItem} has been removed from the cart.`);
    } else {
        console.log("Invalid index.");
    }
}

function viewCart() {
    console.log("Your cart contains:");
    cart.forEach((item, index) => {
        console.log(`${index + 1}: ${item}`);
    });
}

function clearCart() {
    cart = [];
    console.log("Your cart is now empty.");
}

// Example Usage
addItem("Laptop");
addItem("Phone");
addItem("ipad");
addItem("head sets")
viewCart();
removeItem(0);
viewCart();
clearCart();


