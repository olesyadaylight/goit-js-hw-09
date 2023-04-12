import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


   let getRef = selector => document.querySelector(selector);
 const inputDatePickerRef = getRef('#datetime-picker');
const btnStartRef = getRef('[data-start]');
const daysRef = getRef('[data-days]');
const hoursRef = getRef('[data-hours]');
const minutesRef = getRef('[data-minutes]');
const secondsRef = getRef('[data-seconds]');



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    // currentDifferenceDate(selectedDates[0]);
  },
};
// flatpickr('#datetime-picker', options);
 flatpickr(inputDatePickerRef, options);
function startTimer(){
  const startTime =selectedDates;
  setInterval(() => {
    const currentTime = Date.now();
    const differenceTime = currentTime - startTime;
    console.log(differenceTime);
  })
}
startTimer();