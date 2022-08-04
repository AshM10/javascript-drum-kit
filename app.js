function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stops the function from running all together

  key.classList.add("playing"); // instead of pseudo class, use add classList
  // Setting the current time of an <audio> tag is not working in my browser
  audio.currentTime = 0; // rewinds to the start to avoid delay
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform
  // this > is equal to the actual KEY
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

// How they solved the challenge:
/*  function removeTransition(e) {
        if (e.propertyName !== "transform") return;
        e.target.classList.remove("playing");
      }

      function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) return;

        key.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
      }

      const keys = Array.from(document.querySelectorAll(".key"));
      keys.forEach((key) =>
        key.addEventListener("transitionend", removeTransition)
      );
      window.addEventListener("keydown", playSound);
      */
