// query selectors and variables
const menu = document.querySelectorAll(".menu-link");
const hours = document.querySelectorAll(".current");
const previousHours = document.querySelectorAll(".previous");

// event listeners
menu[0].addEventListener("click", dailyClick);
menu[1].addEventListener("click", weeklyClick);
menu[2].addEventListener("click", monthlyClick);

// function to fetch data from json file
function fetchData() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      hourData = data;
    });
}

// fetching data on initial load
fetchData();

// handles removing and setting active classes for links
function handleActive(e) {
  menu.forEach((element) => {
    element.classList.remove("menu-active");
  });
  e.target.classList.add("menu-active");
}

// functions to handle daily, weekly, and monthly data replacement on click
function dailyClick(e) {
  handleActive(e);
  hours.forEach((e, i) => {
    hours[i].innerHTML = hourData[i].timeframes.daily.current + "hrs";
    previousHours[i].innerHTML =
      "Yesterday - " + hourData[i].timeframes.daily.previous + "hrs";
  });
}

function weeklyClick(e) {
  handleActive(e);
  hours.forEach((e, i) => {
    hours[i].innerHTML = hourData[i].timeframes.weekly.current + "hrs";
    previousHours[i].innerHTML =
      "Last Week - " + hourData[i].timeframes.weekly.previous + "hrs";
  });
}

function monthlyClick(e) {
  handleActive(e);
  hours.forEach((e, i) => {
    hours[i].innerHTML = hourData[i].timeframes.monthly.current + "hrs";
    previousHours[i].innerHTML =
      "Last Month - " + hourData[i].timeframes.monthly.previous + "hrs";
  });
}
