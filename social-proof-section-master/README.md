# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the section depending on their device's screen size

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

In this project, I learned about using multiple background images and positioning them properly, which can be seen below: 

```css
  body {
    background-image: url(./images/bg-pattern-top-desktop.svg),
      url(./images/bg-pattern-bottom-desktop.svg);
    background-position: top left, bottom right;
    background-repeat: no-repeat;
    background-size: 40%, 75%;
  }
```

This was also the first time I made use of flex-wrap. Align-items: flex-start also allowed me to push the review cards down using a margin. You are unable to do this if they are not aligned with the top of the flex container.

## Author

- Frontend Mentor - [@spencerrunde](https://www.frontendmentor.io/profile/spencerrunde)