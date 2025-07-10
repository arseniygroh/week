const ctaHeader = document.querySelector(".cta-header");
const navHeader = document.querySelector(".nav-header");
const headerContainer = ctaHeader.parentElement;
let burgerBtn = document.createElement("button");
burgerBtn.innerHTML = "<span></span>";
burgerBtn.classList.add("menu-btn");
const mq = window.matchMedia("(max-width: 860px)");
function handleScreenChange(e) {
    if (e.matches) {
        headerContainer.append(burgerBtn);
        navHeader.insertAdjacentElement("beforeend", ctaHeader);
    } else {
        headerContainer.appendChild(ctaHeader);
        burgerBtn.remove();
    }
}




mq.addEventListener("change", handleScreenChange);
handleScreenChange(mq);

burgerBtn.addEventListener("click", (e) => {
    document.body.classList.toggle("open-menu")
    navHeader.classList.toggle("show");
})

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { 
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});