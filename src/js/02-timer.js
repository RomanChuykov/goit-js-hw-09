import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const fieldInput=document.querySelector('#datetime-picker');
const btnStart=document.querySelector("[data-start]");
const fieldDays=document.querySelector("[data-days]");
const fieldHours=document.querySelector("[data-hours]");
const fieldMinutes=document.querySelector("[data-minutes]");
const fieldSeconds=document.querySelector("[data-seconds]");
let days=0;
let minutes=0;
let hours=0;
let seconds=0;
const today=new Date();
let selectedDate;
let timerId=null;

btnStart.disabled=true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate=selectedDates[0]
        if (selectedDates[0]-today<=0) {
            alert("Please choose a date in the future")
        } else {
            btnStart.disabled=false;
        }
    },
};
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }


flatpickr("#datetime-picker", options);

function onClickStart(){
    btnStart.disabled=true;
  
    timerId = setInterval(() => {
        const timerToday=new Date();
        const timeMs=selectedDate-timerToday;
        const result=convertMs(timeMs);
        if (selectedDate-timerToday<=0) {
         clearInterval(timerId);
         return;
        }
        fieldDays.textContent=result.days;
        fieldHours.textContent=result.hours;
        fieldMinutes.textContent=result.minutes;
        fieldSeconds.textContent=result.seconds;
      }, 1000);
}
btnStart.addEventListener("click",onClickStart);