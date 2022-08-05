# javascript-drum-kit

This is a solution to the [#javascript-drum-kit on #JavaScript30](https://javascript30.com). 30 day vanilla JS coding challenge.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Press keys and play designated drum sounds.
- See CSS transitions when pressing down the keys.

### Screenshot

<img width="1433" alt="Screen Shot 2022-08-04 at 10 45 26 AM" src="https://user-images.githubusercontent.com/89284873/182893290-950c1b6e-f887-4ed2-a068-8eee7c3b229c.png">


### Links

- Solution URL: [GitHub](https://github.com/AshM10/javascript-drum-kit)
- Live Site URL: [Netlify](https://ash-js-drumkit.netlify.app)

## My process

### Built with

- CSS custom properties
- Flexbox
- Vanilla JavaScript

### What I learned

- The keyboard input element
- Keydown event listener
- Data Attributes
- JS Window (BOM)

To see how you can add code snippets, see below:

```html
<div class="keys">
  <div data-key="65" class="key">
    <kbd>A</kbd>
    <span class="sound">clap</span>
  </div>
</div>
```

```js
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
```

### Continued development

Continue with Challenge #2.

### Useful resources

- [Key Code](https://www.toptal.com/developers/keycode) - Helped me get the JavaScript Enevnt Keycode Info

## Author

- Website - [Ash Moreno](https://www.ashmoreno.dev)
- Twitter - [@sexy_gravy](https://twitter.com/sexy_gravy)


