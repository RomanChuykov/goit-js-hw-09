function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
const btnStart=document.querySelector('button[data-start]');
const btnStop=document.querySelector('button[data-stop]');
const body=document.querySelector('body')
let color=''
btnStop.disabled=true;
let timerId = null;

btnStart.addEventListener("click", () => {
    btnStart.disabled=true;
    btnStop.disabled=false;
    timerId = setInterval(() => {
      color=getRandomHexColor();
      body.style.backgroundColor=color;
   
  }, 1000);
});

btnStop.addEventListener("click", () => {
    btnStart.disabled=false;
    btnStop.disabled=true;
    clearInterval(timerId);
  });


console.dir(btnStart)