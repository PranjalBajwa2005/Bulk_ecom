document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let cardholder = document.getElementById("cardholder").value;
    let cardNumber = document.getElementById("card-number").value.replace(/\s+/g, '');
    let expiry = document.getElementById("expiry").value;
    let cvv = document.getElementById("cvv").value;
    
    if (!validateCardNumber(cardNumber)) {
        alert("Invalid card number");
        return;
    }
    if (!validateExpiry(expiry)) {
        alert("Invalid expiry date");
        return;
    }
    if (!validateCVV(cvv)) {
        alert("Invalid CVV");
        return;
    }
    
    alert("Payment Successful!");
});

function validateCardNumber(number) {
    return /^\d{16}$/.test(number);
}

function validateExpiry(expiry) {
    return /^\d{2}\/\d{2}$/.test(expiry);
}

function validateCVV(cvv) {
    return /^\d{3}$/.test(cvv);
}
