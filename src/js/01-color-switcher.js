const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};
let time = null;
const delay = 1000;

refs.start.addEventListener('click', changecolor);
refs.stop.addEventListener('click', stopChangeColor);

disabledButtonStop();

function disabledButtonStart() {
  refs.start.setAttribute('disabled', 'true');
}
function ableButtonStart() {
  refs.start.removeAttribute('disabled');
}

function disabledButtonStop() {
  refs.stop.setAttribute('disabled', 'true');
}
function ableButtonStop() {
  refs.stop.removeAttribute('disabled');
}

function changecolor() {
  ableButtonStop();
  disabledButtonStart();
  time = setInterval(() => {
    refs.body.style.backgroundColor = randomColor();
  }, delay);
}

function stopChangeColor() {
  ableButtonStart();
  clearInterval(time);
  disabledButtonStop();
}

const randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
