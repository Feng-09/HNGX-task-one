"use strict";

let day = document.getElementById("day");
let time = document.getElementById("time");
let displayDay;

let currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    displayDay = "Sunday";
    break;
  case 1:
    displayDay = "Monday";
    break;
  case 2:
    displayDay = "Tuesday";
    break;
  case 3:
    displayDay = "Wednesday";
    break;
  case 4:
    displayDay = "Thursday";
    break;
  case 5:
    displayDay = "Friday";
    break;
  case 6:
    displayDay = "Saturday";
}

day.innerHTML = displayDay;

let displayTime = () => {
  let currentUTCHour = new Date().getUTCHours();
  let currentUTCMinutes = new Date().getUTCMinutes();
  let currentUTCSeconds = new Date().getUTCSeconds();

  time.innerHTML = `${currentUTCHour}:${currentUTCMinutes}:${currentUTCSeconds}`;
};

console.log(time.innerHTML);

setInterval(displayTime, 1000);
