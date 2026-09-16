// ==============================
// LOADER
// ==============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.classList.add("hide");

        setTimeout(() => {
            loader.style.display = "none";
        }, 700);

    }

});


// ==============================
// MOBILE MENU
// ==============================

const menuToggle = document.querySelector("#menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");

if (menuToggle && navLinksContainer) {

    menuToggle.addEventListener("click", () => {

        navLinksContainer.classList.toggle("open");

        const isOpen = navLinksContainer.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });


    // Close menu when clicking a link

    navLinksContainer.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinksContainer.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

}


// ==============================
// DARK / LIGHT THEME
// ==============================

const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight = document.body.classList.contains("light");

        if (isLight) {

            themeToggle.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark theme"
            );

            themeToggle.setAttribute(
                "title",
                "Switch to dark theme"
            );

            localStorage.setItem("theme", "light");

        } else {

            themeToggle.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light theme"
            );

            themeToggle.setAttribute(
                "title",
                "Switch to light theme"
            );

            localStorage.setItem("theme", "dark");

        }

    });


    // Remember user's theme

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark theme"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to dark theme"
        );

    }

}


// ==============================
// SCROLL REVEAL
// ==============================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

hiddenElements.forEach((element) => {

    observer.observe(element);

});


// ==============================
// ACTIVE NAVBAR
// ==============================

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==============================
// HEADER SHADOW ON SCROLL
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ==============================
// BACK TO TOP
// ==============================

const backTop = document.querySelector(".back-top");

if (backTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });


    backTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ==============================
// TYPING EFFECT
// ==============================

const words = [
    "Frontend Developer",
    "JavaScript Developer",
    "PHP Learner",
    "Web Designer"
];

let wordIndex = 0;
let charIndex = 0;

const typingText = document.querySelector(".typing-text");

function type() {

    if (!typingText) return;

    if (charIndex < words[wordIndex].length) {

        typingText.textContent +=
            words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);

    }

}


function erase() {

    if (!typingText) return;

    if (charIndex > 0) {

        typingText.textContent =
            words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 50);

    } else {

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

        setTimeout(type, 200);

    }

}


// Start typing after page loads

if (typingText) {

    type();

}