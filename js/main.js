//Global Variblies
const toTop = document.querySelector("#to-top");
const header = document.querySelector("header");
const logoImg = document.querySelector("#logo");
const navLinks = document.querySelectorAll("header nav ul li a");
const lastScroll = window.scrollY;
//Program Events
toTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

window.addEventListener("scroll", function (){
    if (lastScroll < window.scrollY) {
        header.style.backgroundColor = "#fff";
        logoImg.setAttribute("src", "images/bakery-color.png");
        toTop.classList.add("d-flex");
        toTop.classList.remove("d-none");
        for(let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.add("black");
            navLinks[i].classList.remove("white");
        }
    } else {
        header.style.backgroundColor = "transparent";
        logoImg.setAttribute("src", "images/bakery-light-1.png");
        toTop.classList.add("d-none");
        toTop.classList.remove("d-flex");
        for(let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.add("white");
            navLinks[i].classList.remove("black");
        }
    }
})
//Program Functions 