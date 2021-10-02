const currentTimeElement = document.querySelector(".time");
const currentDayElement = document.querySelectorAll(".week-day");
const btnTwelveHourTime = document.querySelector(".btn-formato-doze");
const btnTwentyFourTime = document.querySelector(".btn-formato-vinte-quatro");

const currentDay = new Date().getDay();
let changeToTwelveHourTime = false;

btnTwelveHourTime.addEventListener("click", () => {
  changeToTwelveHourTime = true;
  btnTwelveHourTime.classList.add("active-time-btn");
  btnTwentyFourTime.classList.remove("active-time-btn");
});

btnTwentyFourTime.addEventListener("click", () => {
  changeToTwelveHourTime = false;
  btnTwentyFourTime.classList.add("active-time-btn");
  btnTwelveHourTime.classList.remove("active-time-btn");
});

currentDayElement[currentDay].classList.add("active-day");

const updateTime = () => {
  const time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (changeToTwelveHourTime && hour > 12) {
    hour = hour - 12;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }

  currentTimeElement.innerHTML = `${hour}:${minutes}:${seconds}`;
};

updateTime();

setInterval(updateTime, 1000);
