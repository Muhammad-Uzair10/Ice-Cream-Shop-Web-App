document.addEventListener("DOMContentLoaded", function() {
    var currentLocation = location.pathname.split("/").pop(); // Get the current file name
    var menuItems = document.querySelectorAll("nav ul li a"); // Get all menu items

    menuItems.forEach(function(item) {
        if (item.getAttribute("href") === currentLocation) { // Check if the href of the item matches the current file name
            item.classList.add("active"); // Add the active class
        }
    });
});
