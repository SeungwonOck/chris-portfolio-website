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

// Show Scroll Up
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                        : scrollUp.classList.remove("show-scroll")
}

window.addEventListener("scroll", scrollUp);

// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]")

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    })
}

window.addEventListener("scroll", scrollActive);

// Dark Light Theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme"
const iconTheme = "ri-sun-line"

//  Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme)
}
// Activate & Deactivate the them manually with the button
themeButton.addEventListener("click", () => {
    // Add or Remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Store the selected theme and icon in local storage
    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    // reset: true // Animation repeate
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: "right" })
sr.reveal(`.home__name, .home__info,
            .about__cotainer .section__title-1, .about__info,
            .contact__social, .contact__data`, { origin: "left" })
sr.reveal(`.services__card, .projects__card`, { interval: 100 })