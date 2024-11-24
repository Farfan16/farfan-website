const header = document.getElementById("header");
const logo = document.querySelector("#logo");
const sections = document.querySelector("#sections");
const mblNavbar = document.querySelector("#mobile-navbar");
const mblHeader = document.querySelector("#mobile-header");
const mblMenu = document.querySelector("#mobile-menu");
const menuBtn = document.querySelector("#menuBtn");

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
  menuBtn.classList.toggle("active");
  mblMenu.classList.toggle("invisible");
  mblHeader.classList.toggle("h-screen");
  mblHeader.classList.toggle("bg-cus-deep-brown/75");
  document.body.classList.toggle("overflow-hidden");
}

document.onclick = function (e) {
  if (
    !menuBtn.contains(e.target) &&
    !mblMenu.contains(e.target) &&
    !mblNavbar.contains(e.target)
  ) {
    menuBtn.classList.remove("active");
    mblMenu.classList.add("invisible");
    mblHeader.classList.remove("h-screen", "bg-cus-deep-brown/75");
    document.body.classList.remove("overflow-hidden");
  }
};
