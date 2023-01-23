function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let changeColor = null;
btnStop.disabled = true;

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;
  changeColor = setInterval(() => {
    let backColor = getRandomHexColor();
    document.body.style.backgroundColor = backColor;
  }, 1000);
});

btnStop.addEventListener('click', () => {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(changeColor);
});
