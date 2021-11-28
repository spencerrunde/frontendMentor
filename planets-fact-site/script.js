// variables
const navbar = document.querySelector(".navbar");
const mobileMenu = document.querySelector(".mobile-menu");
const textLinks = document.querySelectorAll(".link");
const overviewLinks = document.querySelectorAll(".ob-link");
const planetParagraph = document.querySelector(".overview p");
const planetLink = document.querySelector(".source-wrapper a");
const planetImg = document.querySelector(".planet");
const surfaceImg = document.querySelector(".surface");
const menuLinks = Array.from(document.querySelectorAll(".menu-link"));
const tabletLinks = Array.from(document.querySelectorAll(".planet-link"));
const planetName = document.querySelector("h1");
const rotation = document.querySelector(".rotation span");
const revolution = document.querySelector(".revolution span");
const radius = document.querySelector(".radius span");
const averageTemp = document.querySelector(".average-temp span");
const coloredBorder = document.querySelector(".active");
let i = 0;
// array to hold border hex colors
colorArray = [
  "#419EBB",
  "#EDA249",
  "#6D2ED5",
  "#D14C32",
  "#D83A34",
  "#CD5120",
  "#1EC1A2",
  "#2D68F0",
];

// event listeners
navbar.addEventListener("click", navToggle);
textLinks[0].addEventListener("click", overviewClick);
textLinks[1].addEventListener("click", structureClick);
textLinks[2].addEventListener("click", surfaceClick);
overviewLinks[0].addEventListener("click", overviewClick);
overviewLinks[1].addEventListener("click", structureClick);
overviewLinks[2].addEventListener("click", surfaceClick);
menuLinks.forEach((link) => {
  link.addEventListener("click", handleClick);
});
tabletLinks.forEach((link) => {
  link.addEventListener("click", handleClick);
});

// function to fetch data from json file
function fetchData() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      planetData = data;
    });
}

// fetching data on initial load
fetchData();

// function to handle mobile menu toggling
function navToggle() {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
    navbar.style.opacity = 1;
  } else {
    mobileMenu.style.display = "block";
    navbar.style.opacity = 0.25;
  }
}

// closes mobile menu if it is open and view changes to tablet
function handleResize() {
  if (window.innerWidth >= 768) {
    mobileMenu.style.display = "none";
    navbar.style.opacity = 1;
  }
}

// calls function on window resize
window.onresize = handleResize;

// handles click of planet links
function handleClick(e) {
  if (e.target.innerText == "MERCURY") {
    i = 0;
  } else if (e.target.innerText == "VENUS") {
    i = 1;
  } else if (e.target.innerText == "EARTH") {
    i = 2;
  } else if (e.target.innerText == "MARS") {
    i = 3;
  } else if (e.target.innerText == "JUPITER") {
    i = 4;
  } else if (e.target.innerText == "SATURN") {
    i = 5;
  } else if (e.target.innerText == "URANUS") {
    i = 6;
  } else {
    i = 7;
  }
  replaceContent();
  mobileMenu.style.display = "none";
  navbar.style.opacity = 1;
  coloredBorder.style.borderColor = colorArray[i];
  overviewClick();
}

// replaces content with new planet data
function replaceContent() {
  planetImg.src = planetData[i].images.planet;
  surfaceImg.src = planetData[i].images.geology;
  planetName.innerText = planetData[i].name;
  planetParagraph.innerText = planetData[i].overview.content;
  planetLink.setAttribute("href", planetData[i].overview.source);
  rotation.innerText = planetData[i].rotation;
  revolution.innerText = planetData[i].revolution;
  radius.innerText = planetData[i].radius;
  averageTemp.innerText = planetData[i].temperature;
}

// replaces text with planet overview text
function overviewClick() {
  textLinks[0].classList.add("active");
  textLinks[1].classList.remove("active");
  textLinks[2].classList.remove("active");
  textLinks[0].style.borderColor = colorArray[i];
  overviewLinks[0].classList.add("active");
  overviewLinks[1].classList.remove("active");
  overviewLinks[2].classList.remove("active");
  overviewLinks[0].style.backgroundColor = colorArray[i];
  overviewLinks[1].style.backgroundColor = null;
  overviewLinks[2].style.backgroundColor = null;
  planetParagraph.innerText = planetData[i].overview.content;
  planetLink.setAttribute("href", planetData[i].overview.source);
  planetImg.src = planetData[i].images.planet;
  surfaceImg.style.display = "none";
}

// replaces text with planet structure text
function structureClick() {
  textLinks[1].classList.add("active");
  textLinks[0].classList.remove("active");
  textLinks[2].classList.remove("active");
  textLinks[1].style.borderColor = colorArray[i];
  overviewLinks[1].classList.add("active");
  overviewLinks[0].classList.remove("active");
  overviewLinks[2].classList.remove("active");
  overviewLinks[1].style.backgroundColor = colorArray[i];
  overviewLinks[0].style.backgroundColor = null;
  overviewLinks[2].style.backgroundColor = null;
  planetParagraph.innerText = planetData[i].structure.content;
  planetLink.setAttribute("href", planetData[i].structure.source);
  planetImg.src = planetData[i].images.internal;
  surfaceImg.style.display = "none";
}

// replaces text with planet surface text
function surfaceClick() {
  textLinks[2].classList.add("active");
  textLinks[0].classList.remove("active");
  textLinks[1].classList.remove("active");
  textLinks[2].style.borderColor = colorArray[i];
  overviewLinks[2].classList.add("active");
  overviewLinks[0].classList.remove("active");
  overviewLinks[1].classList.remove("active");
  overviewLinks[2].style.backgroundColor = colorArray[i];
  overviewLinks[0].style.backgroundColor = null;
  overviewLinks[1].style.backgroundColor = null;
  planetParagraph.innerText = planetData[i].geology.content;
  planetLink.setAttribute("href", planetData[i].geology.source);
  planetImg.src = planetData[i].images.planet;
  surfaceImg.src = planetData[i].images.geology;
  surfaceImg.style.display = "block";
}
