const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    burger.classList.toggle("open");
});
