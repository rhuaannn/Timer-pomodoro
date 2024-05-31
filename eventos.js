import { timerMinutes } from './timer.js';
let currentAudio = null;


const play = document.querySelector(".play");
const stop = document.querySelector(".stop");


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".bg, .bg-one");
  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      const audioSrc = e.currentTarget.getAttribute("data-audio");
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentAudio = new Audio(audioSrc);
      currentAudio.play();
    });
  });
});

let intervalo;
play.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("bateu aqui");
  intervalo = setInterval(() => {
    timerMinutes();
  }, 1000);
});

stop.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(intervalo);
});




