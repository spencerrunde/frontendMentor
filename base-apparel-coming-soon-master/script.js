// grabbing elements from HTML
const form = document.getElementById("form");
const email = document.getElementById("email");

// listening for button click
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = email.value;

  if (!validateEmail(emailValue)) {
    form.classList.add("error"); //adding error to trigger error css
  } else form.classList.remove("error"); //removing error on valid email
});

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
