// JS to handle theme changes

const themeToggle = document.querySelectorAll("input");
const body = document.querySelector("body");

themeToggle[0].addEventListener("click", toggleTheme1);
themeToggle[1].addEventListener("click", toggleTheme2);
themeToggle[2].addEventListener("click", toggleTheme3);

// adding and removing classes as needed
function toggleTheme1() {
  body.classList.remove("theme-2", "theme-3");
}

function toggleTheme2() {
  body.classList.remove("theme-3");
  body.classList.add("theme-2");
}

function toggleTheme3() {
  body.classList.remove("theme-2");
  body.classList.add("theme-3");
}

// JS to handle calculator function

const screen = document.querySelector(".screen");
const buttons = Array.from(document.querySelectorAll("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        screen.innerText = "0";
        break;
      case "DEL":
        screen.innerText = screen.innerText.slice(0, -1);
        // replacing empty screen text with 0
        if (screen.innerText == "") {
          screen.innerText = "0";
        }
        break;
      case "=":
        try {
          // capping at 4 digits and adding commas to appropriate numbers
          screen.innerText = eval(screen.innerText).toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 4,
          });
        } catch {
          screen.innerText = "Error";
        }
        // preventing NaN errors
        if (screen.innerText == "NaN") {
          screen.innerText = "Error";
        }
        break;
      case "x":
        // replacing "x" with multiplication operator
        if (screen.innerText == "0" || screen.innerText == "399,981") {
          screen.innerText = "*";
        } else {
          screen.innerText += "*";
        }
        break;
      default:
        // replacing placeholder values for ease of use
        if (
          screen.innerText == "0" ||
          screen.innerText == "399,981" ||
          screen.innerText == "Error"
        ) {
          screen.innerText = e.target.innerText;
          // limiting user input to 13 characters
        } else if (screen.innerText.length >= 13) {
          screen.innerText = screen.innerText;
        } else {
          screen.innerText += e.target.innerText;
        }
    }
  });
});

// adding keyboard funcionality as a bonus, works with numpad or normal keys
document.onkeyup = (e) => {
  if (e.key == "7" || e.key == "Num7") {
    buttons[0].click();
  } else if (e.key == "8" || e.key == "Num8") {
    buttons[1].click();
  } else if (e.key == "9" || e.key == "Num9") {
    buttons[2].click();
  } else if (e.key == "Delete") {
    buttons[3].click();
  } else if (e.key == "4" || e.key == "Num4") {
    buttons[4].click();
  } else if (e.key == "5" || e.key == "Num5") {
    buttons[5].click();
  } else if (e.key == "6" || e.key == "Num6") {
    buttons[6].click();
  } else if (e.key == "+") {
    buttons[7].click();
  } else if (e.key == "1" || e.key == "Num1") {
    buttons[8].click();
  } else if (e.key == "2" || e.key == "Num2") {
    buttons[9].click();
  } else if (e.key == "3" || e.key == "Num3") {
    buttons[10].click();
  } else if (e.key == "-") {
    buttons[11].click();
  } else if (e.key == ".") {
    buttons[12].click();
  } else if (e.key == "0" || e.key == "Num0") {
    buttons[13].click();
  } else if (e.key == "/") {
    buttons[14].click();
  } else if (e.key == "x" || e.key == "*") {
    buttons[15].click();
  } else if (e.key == "r" || e.key == "c") {
    buttons[16].click();
  } else if (e.key == "=" || e.key == "Enter") {
    buttons[17].click();
  }
};
