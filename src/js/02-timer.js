import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const input = document.querySelector("#datetime-picker");
const button = document.querySelector("button[data-start]");
const day = document.querySelector("span[data-days]");
const hours = document.querySelector("span[data-hours]");
const minutes = document.querySelector("span[data-minutes]");
const seconds = document.querySelector("span[data-seconds]");


const timeNow = new Date().getTime();
button.setAttribute("disabled", 'true');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0] <= timeNow){
            return alert("fff");
        }else{
          button.removeAttribute('disabled')
        }
    },
    }

  flatpickr(input,  options);

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = (Math.floor(ms / day));
    // Remaining hours
    const hours = (Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = (Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = (Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

function addLeadingZero(value) {
return String(value).padStart(2, "0")
};

function countdown(){
day.textContent = addLeadingZero(convertMs())
}

