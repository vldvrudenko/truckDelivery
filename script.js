window.addEventListener("DOMContentLoaded", () => {
var swiper = new Swiper(".mySwiper", {
  
  loop: true,
  spaceBetween: 10,

  breakpoints: {
    375: {
      slidesPerView: 1.75,
      spaceBetween: 20,
    },

    700: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
})
const navbar = document.querySelector(".navbar");
navbar.querySelector(".toggle").addEventListener("click", () => {
  navbar.classList.toggle("collapsed");
});
window.addEventListener("scroll", e => {
  let windowY = window.pageYOffset;
  let navbarHeight = document.querySelector(".navbar").offsetHeight;
  if (windowY > navbarHeight) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
});