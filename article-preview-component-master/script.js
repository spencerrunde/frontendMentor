const socials = document.querySelector(".share")
const user = document.querySelector(".user")
const openButton = document.getElementById("open")
const closeButton = document.getElementById("close")

openButton.addEventListener("click", () => {
    socials.classList.toggle("clicked")
    user.classList.toggle("clicked")
})

closeButton.addEventListener("click", () => {
    socials.classList.remove("clicked")
    user.classList.remove("clicked")
})