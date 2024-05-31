let minutes = parseInt(document.querySelector(".minutes").textContent);
let seconds = parseInt(document.querySelector(".seconds").textContent);

let tall = document.querySelector(".tall");
const low = document.querySelector(".low");

export const timerSeconds = () => {
  seconds--;
  if (seconds < 10) {
    seconds = "0" + seconds;
    document.querySelector(".seconds").textContent = seconds;
  } else {
    document.querySelector(".seconds").textContent = seconds;
  }
};

export const timerMinutes = () => {
  timerSeconds();
  if (seconds == 0) {
    seconds = 59;
    minutes--;
    document.querySelector(".minutes").textContent = minutes;
  }
  if (minutes == 0 && seconds == 0) {
    minutes = 24;
    seconds = 59;
    return;
  }
};

tall.addEventListener("click", (e) => {
    minutes += 5;
    document.querySelector(".minutes").textContent =
      minutes < 10 ? "0" + minutes : minutes;
  });
  
  low.addEventListener("click", (e) => {
    minutes -= 5;
    if (minutes < 0) {
      alert("Minutos zerados!");
      minutes = 24;
    }
    document.querySelector(".minutes").textContent =
      minutes < 10 ? "0" + minutes : minutes;
  });