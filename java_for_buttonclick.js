function showAlert() {
    alert("Welcome to Food Haven!");
}

function submitForm() {
    alert("Thank you for reaching out! We'll get back to you soon.");
}


let totalAmount = 0;
let cartItems = { pasta: 0, burger: 0, chicken: 0, salad: 0 };

function updateCart(item, price) {
    if (price > 0) {
        cartItems[item]++;
    } else {
        if (cartItems[item] > 0) {
            cartItems[item]--;
        }
    }

    // Update the total amount
    totalAmount = (cartItems["pasta"] * 250) + 
                  (cartItems["burger"] * 300) + 
                  (cartItems["chicken"] * 450) + 
                  (cartItems["salad"] * 400);

    // Update UI
    document.getElementById(item + "-count").innerText = cartItems[item];
    document.getElementById("totalAmount").innerText = totalAmount;
}
