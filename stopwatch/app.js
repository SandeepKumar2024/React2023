const timeDispaly = document.querySelector(".timeDisplay");
let [mseconds, second, minutes, hours] = [0, 0, 0, 0];
let i = null;

document.getElementById("start").addEventListener("click", () => {
  if (i !== null) {
    clearInterval(i);
  }
  console.log("hello");

  i = setInterval(displayTime, 10);
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(i);
});
document.getElementById("reset").addEventListener("click", () => {
  clearInterval(i);
   [mseconds, second, minutes, hours] = [0, 0, 0, 0];
  timeDispaly.innerHTML = " 00:00:00:000";
});

document.getElementById;
function displayTime() {
  mseconds += 10;
  if (mseconds === 1000) {
    mseconds = 0;
    second++;

    if (second === 60) {
      second = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = second < 10 ? "0" + second : second;
  let ms =
    mseconds < 10
      ? "00" + mseconds
      : mseconds < 100
      ? "0" + mseconds
      : mseconds;

  timeDispaly.innerHTML = `${h} : ${m} : ${s} :${ms}`;
}
