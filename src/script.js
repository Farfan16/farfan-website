const header = document.getElementById("header");
const logo = document.querySelector("#logo");
const sections = document.querySelector("#sections");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;

  if (scrollPos > 0) {
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
