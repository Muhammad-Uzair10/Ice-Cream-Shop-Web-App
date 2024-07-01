let currentCategory = 1;
const totalCategories = 3;

function showCategory(categoryNumber) {
    // Hide all categories
    for (let i = 1; i <= totalCategories; i++) {
        document.getElementById(`category${i}`).style.display = "none";
    }
    // Show the selected category
    document.getElementById(`category${categoryNumber}`).style.display = "block";
}

function nextCategory() {
    currentCategory = (currentCategory % totalCategories) + 1;
    showCategory(currentCategory);
}

function prevCategory() {
    currentCategory = (currentCategory - 2 + totalCategories) % totalCategories + 1;
    showCategory(currentCategory);
}

// Initially show the first category
showCategory(currentCategory);

