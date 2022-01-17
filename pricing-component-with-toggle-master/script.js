// grabbing elements from DOM
const billingToggle = document.querySelector(".billing__toggle");
const priceText = document.querySelectorAll("h3");

//arrays to hold prices
const annualPrices = [
  "<span>$</span> 199.99",
  "<span>$</span> 249.99",
  "<span>$</span> 399.99",
];
const monthlyPrices = [
  "<span>$</span> 19.99",
  "<span>$</span> 24.99",
  "<span>$</span> 39.99",
];

billingToggle.addEventListener("click", toggleBilling);

//boolean variable used with toggle function
let annualPricing = true;

//handles moving circle to the right/left side of the button and replacing text in DOM
function toggleBilling() {
  billingToggle.classList.toggle("right");
  annualPricing = !annualPricing;

  if (annualPricing == true) {
    forLoop(annualPrices);
  } else {
    forLoop(monthlyPrices);
  }
}

function forLoop(array) {
  for (let i = 0; i < array.length; i++) {
    priceText[i].innerHTML = array[i];
  }
}
