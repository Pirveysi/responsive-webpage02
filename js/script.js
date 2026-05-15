const hamburgerIcon = document.querySelector(".nav-btn");
const hamburgerMenu = document.querySelector(".navbar");
const crossIcon = document.querySelector(".nav-close");

hamburgerIcon.addEventListener("click", function () {
    hamburgerMenu.classList.add("show-hamburger-menu");
});

crossIcon.addEventListener("click", function () {
    hamburgerMenu.classList.remove("show-hamburger-menu");
});
