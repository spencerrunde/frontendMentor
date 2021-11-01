const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", hamburgerToggle);

function hamburgerToggle() {
  document.querySelector(".navbar").classList.toggle("active");
  document.querySelector(".hamburger").classList.toggle("active");
  console.log("hamburger clicked!");
}
