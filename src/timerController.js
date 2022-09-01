import { Timer } from "./timer.js";
// import { formatError } from "./utils.js";

const timerSEC = document.getElementById("timer__sec");
const timerStartBtn = document.getElementById("timer__start");
const timerStopBtn = document.getElementById("timer__stop");
const timerResult = document.getElementById("timer__result");

const timer = new Timer();

timerStartBtn.addEventListener("click", () => {
    timer.start(timerSEC.value, 1, (elapsed) => {
        timerResult.innerHTML = "Осталось секунд: " + elapsed;
    });
});

timerStopBtn.addEventListener("click", () => {
    timer.stop();
});

// function handleCalcDates(event) {
//     dateCalcResult.innerHTML = "";
//     event.preventDefault();

//     let { firstDate, secondDate } = event.target.elements;
//     firstDate = firstDate.value, secondDate = secondDate.value;

//     if (firstDate && secondDate) {
//         const diff = diffDates(firstDate, secondDate);
//         dateCalcResult.innerHTML = diffToHtml(diff);
//     }
//     else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
// }