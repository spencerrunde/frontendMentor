# Frontend Mentor - Chat app CSS illustration solution

This is a solution to the [Chat app CSS illustration challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- **Bonus**: See the chat interface animate on the initial load

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/mobilefirst-chat-app-illustration-nd1aanFVZ](https://www.frontendmentor.io/solutions/mobilefirst-chat-app-illustration-nd1aanFVZ)
- Live Site URL: [https://chat-app-css-illustration-sr.netlify.app/](https://chat-app-css-illustration-sr.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This was a fun little challenge. Since the emphasis was on doing most of the work through CSS, I made use of before and after psuedo elements for the first time. It worked out well, as I was planning on researching them soon anyways. The background "bars" are both before and after elements, along with several of the elements within the phones layout.

Speaking of the bars, I was reminded of the first challenge I did. The [profile card component](https://github.com/spencerrunde/frontendMentor/tree/master/profile-card-component-main) challenge had similar background elements. That was my very first challenge though, and I didn't exactly know the best way to execute on the idea. I manually inserted the background circles into the HTML, but I feel that the psuedo element approach I took is much better. I also used `calc()` in order to ensure that the bars grow or shrink to always be the perfect height and keep the page looking responsive.

## Author

- Frontend Mentor - [@spencerrunde](https://www.frontendmentor.io/profile/spencerrunde)
