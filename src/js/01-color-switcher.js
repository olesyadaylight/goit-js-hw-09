const changeColorBtn = document.querySelector('[data-start]');
const stopColorBtn = document.querySelector('[data-stop]');
const body = document.querySelector(`body`);
changeColorBtn.addEventListener("click", onButtonStart);
stopColorBtn.addEventListener("click", onButtonStop);

let timerId = null;
function onButtonStart(){
  timerId = setInterval(getColor, 1000);
  changeColorBtn.disabled = true;
  stopColorBtn.disabled = false;
};

function onButtonStop() {
  clearInterval(timerId);
  changeColorBtn.disabled = false;
  stopColorBtn.disabled = true;
};


function getColor () {
  let hexColor = getRandomHexColor();
  body.style.background = hexColor;

 };
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
console.log(getRandomHexColor());