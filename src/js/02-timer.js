import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button[data-start]');
const day = document.querySelector('span[data-days]');
const hour = document.querySelector('span[data-hours]');
const minute = document.querySelector('span[data-minutes]');
const second = document.querySelector('span[data-seconds]');

button.setAttribute('disabled', 'true');
let deltaTime = null;
const DELAY = 1000;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      return alert('fff');
    } else {
      button.removeAttribute('disabled');
      button.addEventListener('click', () => {
        const idTime = setInterval(() => {
          deltaTime = selectedDates[0] - Date.now();
          countdown(deltaTime);
          if (deltaTime <= DELAY) {
            clearInterval(idTime);
          }
        }, DELAY);
        if (idTime) {
          button.setAttribute('disabled', true);
        }
      });
    }
  },
};

flatpickr(input, options);

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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function countdown(deltaTime) {
  const { days, hours, minutes, seconds } = convertMs(deltaTime);
  day.textContent = addLeadingZero(days);
  hour.textContent = addLeadingZero(hours);
  minute.textContent = addLeadingZero(minutes);
  second.textContent = addLeadingZero(seconds);
}
