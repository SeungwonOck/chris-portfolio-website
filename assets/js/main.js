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

// Shadow Header
const shadowHeader = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("shadow-header")
                        : header.classList.remove("shadow-header")
}

window.addEventListener("scroll", shadowHeader);

// Email Js
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm("service_efzj69r", "template_oatirfd", "#contact-form", "TDbEReCl-hJ2cXeSt")
    .then(() => {
        // Show sent message
        contactMessage.textContent = "Message sent successfully ✅"

        // Remove message
        setTimeout(() => {
            contactMessage.textContent = ""
        }, 5000)

        // Clear input fields
        contactForm.reset();
    }, () => {
        //Show error message
        contactMessage.textContent = "Message not sent (service error) ❌"
    })
}

contactForm.addEventListener("submit", sendEmail);