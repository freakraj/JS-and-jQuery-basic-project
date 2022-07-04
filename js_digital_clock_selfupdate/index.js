
// javascript for switch clock format
const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
    formatSwitchBtn.classList.toggle("active");

    var formatValue = formatSwitchBtn.getAttribute("data-format");

    console.log(formatValue);

    if (formatValue == "12") {
        formatSwitchBtn.setAttribute("data-format", "24");
    } else {
        formatSwitchBtn.setAttribute("data-format", "12");
    }
});


function clock() {
    var today = new Date();

    var hours = today.getHours();
    var minuts = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";

    // set the time period (AM/PM)
    if (hours >= 12) {
        period = "PM"

    }
    // set the 12 hour clock format
    var formatValue = formatSwitchBtn.getAttribute("data-format");
    // console.log(formatValue);
    if(formatValue = "12"){
        hours = hours > 12 ? hours % 12 : hours;
    };

    // add the 0 for the values lower than 10
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minuts < 10) {
        minuts = "0" + minuts;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // console.log(hour);
    document.querySelector(".hours").innerHTML = hours
    document.querySelector(".minuts").innerHTML = minuts
    document.querySelector(".period").innerHTML = period
    document.querySelector(".seconds").innerHTML = seconds
}

var updateClock = setInterval(clock, 1000);
// console.log(updateClock);

// set date formate
var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleString("default", { weekday: "long" });
const monthName = today.toLocaleString("default", { month: "short" });

document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".month-name").innerHTML = monthName;

// javascript for dot menu toggle
const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotmenuBtn.addEventListener("click",()=>{
    dotMenu.classList.toggle("active");
});

document.addEventListener("click",(e)=>{
    if(e.target.id !== "active-menu"){
        dotMenu.classList.remove("active");
    }
});


// clock();