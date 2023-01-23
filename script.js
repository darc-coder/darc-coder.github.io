// for smaller devices and resizes,
function sizeContentSection() {
    document.querySelectorAll(".tab-view .content").forEach((contentSection) => {
        let maxSize = 0;
        Array.from(contentSection.children).forEach((child) => {
            child.scrollHeight > maxSize
                ? (maxSize = child.scrollHeight)
                : (maxSize = maxSize);
        });
        contentSection.style.setProperty("--min-height", maxSize + "px");
    });
}

setTimeout(() => {
    sizeContentSection();
}, 1000);

window.onresize = sizeContentSection;

// for sidebar open close
let hamBurger = document.querySelector("header .bars");
let mainNav = document.querySelector(".main-nav");
hamBurger.onclick = () => {
    hamBurger.classList.toggle("open");
    mainNav.classList.toggle("open");
};

const links = Array.from(document.querySelectorAll(".main-nav li a"));
const navLi = document.querySelectorAll(".main-nav li");

const observer = new IntersectionObserver((entries) => {
    navLi.forEach((li) => li.classList.remove("active"));
    entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        links
            .find((link) => link.getAttribute("href").slice(1) == entry.target.id)
            .classList.toggle("active", intersecting);
    });
}, {
    threshold: 0.5,
    rootMargin: "-100px"
});

links.forEach((link) => {
    link.onclick = () => hamBurger.click();
    const itemId = link.getAttribute("href");
    const section = document.querySelector(itemId);
    observer.observe(section);
});
