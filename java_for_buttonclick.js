function showAlert() {
    alert("Welcome to Food Haven!");
}

function submitForm() {
    alert("Thank you for reaching out! We'll get back to you soon.");
}


// 
// Name: J. M. Sadik-Ul Islam Smaron
// ID: 2220221
//


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

                  
    document.getElementById(item + "-count").innerText = cartItems[item];
    document.getElementById("totalAmount").innerText = totalAmount;
}

function showTotal() {
    alert("Total Amount: " + totalAmount + " TK");
}


function showTotal() {
    let popup = document.getElementById("popup");
    let popupText = document.getElementById("popup-text");

    popupText.innerText = "Total Amount: " + totalAmount + " TK";
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 4000); // Pop-up disappears after 4 seconds
}
