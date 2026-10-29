const cart = [];
const productLimit = 2;

// Find all Add to Cart buttons
const addButtons = document.querySelectorAll(".add-cart-btn");

// Add each product to the cart
addButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const card = button.closest(".product-card");

        const name = card.querySelector("h3").textContent;
        const priceText = card.querySelector("p").textContent;
        const price = Number(priceText.replace("Rs.", "").replace(",", "").trim());

        // Count how many times this product is already in cart
        const count = cart.filter(function (item) {
            return item.name === name;
        }).length;

        if (count >= productLimit) {
            button.textContent = "Limit reached";
            button.disabled = true;
            return;
        }

        cart.push({
            name: name,
            price: price,
            button: button
        });

        // Update button after reaching limit
        const updatedCount = cart.filter(function (item) {
            return item.name === name;
        }).length;

        if (updatedCount >= productLimit) {
            button.textContent = "Limit reached";
            button.disabled = true;
        }

        updateCart();
    });
});

