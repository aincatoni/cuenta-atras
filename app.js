const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds")

const countDown = function(){

const newYear = "1 Jan 2024";

  const newYearDate = new Date(newYear);
  const currentDate = new Date();


  const totalSeconds = (newYearDate - currentDate) / 1000;

  const remainingDays = Math.floor(totalSeconds / 3600 / 24);
  const remainingHours = Math.floor(totalSeconds / 3600 ) % 24;
  const remainingMinutes = Math.floor(totalSeconds / 60 ) % 60;
  const remainingSeconds = Math.floor(totalSeconds % 60);
  
  days.innerHTML = remainingDays;
  hours.innerHTML = remainingHours;
  minutes.innerHTML = remainingMinutes;
  seconds.innerHTML = remainingSeconds;

};

setInterval(countDown, 1000)