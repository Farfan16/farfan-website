const header = document.getElementById("header");
const logo = document.querySelector("#logo");
const sections = document.querySelector("#sections");
const mblHeader = document.querySelector("#mobile-header");
const mblMenu = document.querySelector("#mobile-menu");
const menu = document.querySelector("#burger");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;

  if (scrollPos > 190) {
    logo.classList.add("scrolled");
    sections.classList.add("scrolled");
  } else {
    logo.classList.remove("scrolled");
    sections.classList.remove("scrolled");
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openNavBar() {
  mblMenu.classList.toggle("invisible");
  menu.classList.toggle("stroke-cus-ivory");
}
