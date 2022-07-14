let menuBar = document.querySelector(".menu-content");
let btnClose = document.querySelector(".close-btn");

menuBar.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("toggle");
});

btnClose.addEventListener("click", () => {
  document.querySelector(".menu").classList.remove("toggle");
});
