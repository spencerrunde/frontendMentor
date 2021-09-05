const form = document.getElementById("form");
const firstNameField = document.getElementById("firstNameControl");
const lastNameField = document.getElementById("lastNameControl");
const emailField = document.getElementById("emailControl");
const passwordField = document.getElementById("passwordControl");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstNameValue = firstname.value;
  const lastNameValue = lastname.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (firstNameValue === "") {
    firstNameField.classList.add("error"); //adding error to trigger error css
  } else firstNameField.classList.remove("error"); // removing error on valid name

  if (lastNameValue === "") {
    lastNameField.classList.add("error"); //adding error to trigger error css
  } else lastNameField.classList.remove("error"); // removing error on valid name

  if (!validateEmail(emailValue)) {
    emailField.classList.add("error"); //adding error to trigger error css
  } else emailField.classList.remove("error"); //removing error on valid email

  if (passwordValue === "") {
    passwordField.classList.add("error"); //adding error to trigger error css
  } else passwordField.classList.remove("error"); // removing error on valid password
});

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
