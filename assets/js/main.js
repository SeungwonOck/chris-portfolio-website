// Show Menu
const newMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Menu Show
if (navToggle) {
    navToggle.addEventListener("click", () => {
        newMenu.classList.add("show-menu");
    });
}

// Menu Hide
if (navClose) {
    navClose.addEventListener("click", () => {
        newMenu.classList.remove("show-menu");
    });
}

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach((link) => link.addEventListener("click", linkAction))