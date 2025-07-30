document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
    const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

    if (toggleButton && mobileMenu) {
        toggleButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
        });
    } else {
        console.error("Toggle button or mobile menu not found in the DOM.");
    }
});