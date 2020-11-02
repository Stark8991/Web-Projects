var container_days = document.querySelector(".days");
var container_hours = document.querySelector(".hours");
var container_min = document.querySelector(".min");
var container_secs = document.querySelector(".secs");

function countdowns() {
  var days = (new Date(2020, 11, 31) - new Date()) / 86400000;

  if (days <= 0) {
    document.querySelector(".main_div_text").innerText = "";
    document.querySelector(".main_div_count_down").innerText =
      "Countdown is over";
    document.querySelector(".main_div_count_down").style =
      "justify-content: center;";
    clearInterval(set_interval);
  } else {
    var hour = (days % 1) * 24;
    var min = (hour % 1) * 60;
    var sec = (min % 1) * 60;
    container_days.innerText = `${Math.floor(days)} Days`;
    container_hours.innerText = `${Math.floor(hour)} hours`;
    container_min.innerText = `${Math.floor(min)} mins`;
    container_secs.innerText = `${Math.floor(sec)} secs`;
  }
}

var set_interval = setInterval(countdowns, 1000);
