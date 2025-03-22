function showAlert() {
    alert("Welcome to Food Haven!");
}

function submitForm() {
    alert("Thank you for reaching out! We'll get back to you soon.");
}


let totalAmount = 0;

function addToCart(price) {
    totalAmount += price;
    document.getElementById("totalAmount").innerText = totalAmount;
}
