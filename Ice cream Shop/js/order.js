document.addEventListener("DOMContentLoaded", function() {
    var deliveryOption = document.getElementById("deliveryOption");
    var paymentOption = document.getElementById("paymentOption");
    var sameAsDeliveryCheckbox = document.getElementById("sameAsDelivery");
    var deliveryAddressInput = document.getElementById("deliveryAddress");
    var billingAddressInput = document.getElementById("billingAddress");

    deliveryOption.addEventListener("change", function() {
        var deliveryAddressContainer = document.getElementById("deliveryAddressContainer");
        if (deliveryOption.value === "delivery") {
            deliveryAddressContainer.style.display = "block";
        } else {
            deliveryAddressContainer.style.display = "none";
        }
    });

    paymentOption.addEventListener("change", function() {
        var creditCardContainer = document.getElementById("creditCardContainer");
        if (paymentOption.value === "online") {
            creditCardContainer.style.display = "block";
        } else {
            creditCardContainer.style.display = "none";
        }
    });

    sameAsDeliveryCheckbox.addEventListener("change", function() {
        if (this.checked) {
            billingAddressInput.value = deliveryAddressInput.value;
        } else {
            billingAddressInput.value = "";
        }
    });

    deliveryAddressInput.addEventListener("input", function() {
        if (sameAsDeliveryCheckbox.checked) {
            billingAddressInput.value = this.value;
        }
    });

    function showError(elementId, message) {
        var errorDiv = document.getElementById(elementId + "_error");
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
    }

    function hideError(elementId) {
        var errorDiv = document.getElementById(elementId + "_error");
        errorDiv.style.display = "none";
    }

    function validateOrderForm() {
        var deliveryOptionValue = document.getElementById("deliveryOption").value;
        var deliveryAddress = document.getElementById("deliveryAddress").value;
        var billingAddress = document.getElementById("billingAddress").value;
        var contactNumber = document.getElementById("contactNumber").value;
        var email = document.getElementById("email").value;
        var paymentOptionValue = document.getElementById("paymentOption").value;
        var creditCardTypeValue = document.getElementById("creditCardType").value;
        var creditCardNumber = document.getElementById("creditCardNumber").value;
        var postcode = document.getElementById("postcode").value;

        var isValid = true;

        if (deliveryOptionValue === "delivery" && deliveryAddress === "") {
            showError("deliveryAddress", "Please enter a delivery address.");
            isValid = false;
        } else {
            hideError("deliveryAddress");
        }

        if (billingAddress === "") {
            showError("billingAddress", "Please enter a billing address.");
            isValid = false;
        } else {
            hideError("billingAddress");
        }

        if (contactNumber === "") {
            showError("contactNumber", "Please enter a contact number.");
            isValid = false;
        } else {
            hideError("contactNumber");
        }

        if (email === "") {
            showError("email", "Please enter an email address.");
            isValid = false;
        } else {
            hideError("email");
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError("email", "Please enter a valid email address.");
            isValid = false;
        } else {
            hideError("email");
        }

        if (paymentOptionValue === "online") {
            if (creditCardTypeValue === "") {
                showError("creditCardNumber", "Please select a credit card type.");
                isValid = false;
            } else if (creditCardTypeValue === "visa" || creditCardTypeValue === "mastercard") {
                if (creditCardNumber.length !== 16) {
                    showError("creditCardNumber", "Visa and MasterCard numbers must be 16 digits long.");
                    isValid = false;
                } else {
                    hideError("creditCardNumber");
                }
            } else if (creditCardTypeValue === "amex") {
                if (creditCardNumber.length !== 15) {
                    showError("creditCardNumber", "American Express numbers must be 15 digits long.");
                    isValid = false;
                } else {
                    hideError("creditCardNumber");
                }
            } else {
                hideError("creditCardNumber");
            }
        }

        var postcodeRegex = /^\d{4}$/;
        if (!postcodeRegex.test(postcode)) {
            showError("postcode", "Please enter a valid 4-digit postcode.");
            isValid = false;
        } else {
            hideError("postcode");
        }

        return isValid;
    }

    document.getElementById("orderForm").addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Form submitted");
        if (validateOrderForm()) {
            document.getElementById("successMessage").style.display = "block";
        }
    });
});
