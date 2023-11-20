const currentTime = document.querySelector(".clockTimerH1"),
content = document.querySelector("main"),
optionChoice = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");

let alarmTime;
let alarmSet = false;
let musicAlarm = new Audio("./siren_alarm.wav");
musicAlarm.volume = 0.5
let time;

for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    optionChoice[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    optionChoice[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    optionChoice[2].firstElementChild.insertAdjacentHTML("afterend", option);
}




setInterval(() => {
    let date = new Date(),
    hr = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    ampm = "AM";

    if (hr >= 12) {
        hr = hr - 12;
        ampm = "PM"
    }

    // if hour val is 0, set val to 12
    hr = hr == 0 ? hr = 12 : hr;
    // adding 0 before hr, min, sec if this val is less than 10
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    currentTime.innerText = `${hr}:${min}:${sec} ${ampm}`;

    if (alarmTime === `${hr}:${min} ${ampm}`) {
        musicAlarm.play();
        musicAlarm.loop = true;
    }

}, 1000);


function alarm() {
    if(alarmSet) {
        alarmTime = "";
        musicAlarm.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return alarmSet = false;
    }
    time = `${optionChoice[0].value}:${optionChoice[1].value} ${optionChoice[2].value}`;
    
    if (time.includes("Hour") || time.includes("Minutes") || time.includes("AM/PM")) {
        return alert("Make Sure All Dropdowns Are Selected.")
    }
    alarmSet = true;
    alarmTime = time;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
}

setAlarmBtn.addEventListener("click", alarm);