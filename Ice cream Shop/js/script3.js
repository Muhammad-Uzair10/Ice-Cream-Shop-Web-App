// Function to display error message
function showError(elementId, message) {
    var errorDiv = document.getElementById(elementId + "_error");
    errorDiv.innerHTML = message;
    errorDiv.style.display = "block";
}

// Function to hide error message
function hideError(elementId) {
    var errorDiv = document.getElementById(elementId + "_error");
    errorDiv.style.display = "none";
}

// Function to validate registration form
function validateRegistrationForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById("email").value;
    var icecream = document.getElementById("icecream").value;

    var isValid = true; // Flag to track overall form validity

    // Check if any required field is blank
    if (username === "") {
        showError("username", "Please enter a username.");
        isValid = false;
    } else {
        hideError("username");
    }

    if (password === "") {
        showError("password", "Please enter a password.");
        isValid = false;
    } else if (password.length < 9) {
        showError("password", "Password must be at least 9 characters long.");
        isValid = false;
    } else {
        hideError("password");
    }

    if (!gender) {
        showError("gender", "Please select a gender.");
        isValid = false;
    } else {
        hideError("gender");
    }

    if (email === "") {
        showError("email", "Please enter an email address.");
        isValid = false;
    } else {
        hideError("email");
    }

    if (icecream === "") {
        showError("icecream", "Please select a favorite ice cream.");
        isValid = false;
    } else {
        hideError("icecream");
    }

    // Validate email format (simple validation)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError("email", "Please enter a valid email address.");
        isValid = false;
    } else {
        hideError("email");
    }

    return isValid;
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateRegistrationForm()) {
        window.location.href = 'order.html'; // Redirect to order.html on successful validation
    }
});



console.log("Username: ", username);
console.log("Password: ", password);
console.log("Gender: ", gender);
console.log("Email: ", email);
console.log("Icecream: ", icecream);
