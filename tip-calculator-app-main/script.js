//variables
const bill = document.getElementById("bill-input");
const tip = document.querySelectorAll(".tip");
const customTip = document.getElementById("custom-tip");
const people = document.getElementById("people-input");
const errorMsg = document.querySelector(".error-msg");
const tipResult = document.querySelector(".tip-value");
const totalResult = document.querySelector(".total-value");
const resetBtn = document.querySelector(".reset");

//event listeners
bill.addEventListener("input", setBillValue);
tip.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
customTip.addEventListener("input", setCustomTip);
people.addEventListener("input", setPeopleValue);
resetBtn.addEventListener("click", reset);

//default values
let billValue = 0;
let tipValue = 0.15;
let peopleValue = 1;

//UNUSED validation functions
// function validateFloat(s) {
//   var rgx = /^[0-9]*\.?[0-9]*$/;
//   return s.match(rgx);
// }

// function validateInt(s) {
//   var rgx = /^[0-9]*$/;
//   return s.match(rgx);
// }

//function to handle bill input
function setBillValue() {
  if (bill.value.includes(",")) {
    bill.value = bill.value.replace(",", ".");
    console.log("Comma replaced!");
  }

  // if (!validateFloat(bill.value)) {
  //   bill.value = bill.value.substring(0, bill.value.length - 1);
  // }

  billValue = parseFloat(bill.value);

  // fixes NaN errors
  if (bill.value == "") {
    billValue = 0;
  }

  //recalculate new tip on new input
  calculateTip();
  console.log("Bill total is: " + billValue);
}

function handleClick(event) {
  tip.forEach((btn) => {
    //clear active state
    btn.classList.remove("button-active");

    //set active state
    if (event.target.innerHTML == btn.innerHTML) {
      btn.classList.add("button-active");
      tipValue = parseFloat(btn.innerHTML) / 100;
    }
  });

  customTip.value = "";

  //recalculate new tip on new input
  calculateTip();
  console.log("Tip value is: " + tipValue);
}

function setCustomTip() {
  // if (!validateInt(customTip.value)) {
  //   customTip.value = customTip.value.substring(0, customTip.value.length - 1);
  // }

  tipValue = parseFloat(customTip.value / 100);

  //clearing active state for tip buttons when custom tip is selected
  tip.forEach((btn) => {
    btn.classList.remove("button-active");
  });

  if (customTip.value !== "") {
    //recalculate new tip on new input
    calculateTip();
  }

  console.log("Tip value is: " + tipValue);
}

function setPeopleValue() {
  // if (!validateInt(people.value)) {
  //   people.value = people.value.substring(0, people.value.length - 1);
  // }

  peopleValue = parseFloat(people.value);

  //fixes NaN errors
  if (people.value == "") {
    peopleValue = 0;
  }

  //adding and removing error styling
  if (peopleValue == 0) {
    errorMsg.classList.add("show-error-msg");
    people.classList.add("error-input");
  } else {
    errorMsg.classList.remove("show-error-msg");
    people.classList.remove("error-input");
  }

  //recalculate new tip on new input
  calculateTip();
  console.log("Number of people: " + peopleValue);
}

function calculateTip() {
  //quick maths
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue * (tipValue + 1)) / peopleValue;
    tipResult.innerHTML = "$" + tipAmount.toFixed(2);
    totalResult.innerHTML = "$" + total.toFixed(2);

    //removes inactive styling from button
    removeInactive();
  }
}

function reset() {
  //setting bill to 0
  bill.value = "0";
  setBillValue();

  //selecting 15% button
  tip[2].click();

  //setting people to 1
  people.value = "1";
  setPeopleValue();

  //adds inactive style to button on click
  addInactive();
}

function removeInactive() {
  resetBtn.classList.remove("inactive");
}

function addInactive() {
  resetBtn.classList.add("inactive");
}
