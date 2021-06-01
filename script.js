const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const mainLinks = document.querySelectorAll(".link");

burger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("opacity");
    })
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        links.forEach(link => {
            link.classList.toggle("opacity");
        })
    })
});