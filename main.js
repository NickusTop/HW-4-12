const daysV = document.querySelector('span[data-value="days"]');
const hoursV = document.querySelector('span[data-value="hours"]');
const minsV = document.querySelector('span[data-value="mins"]');
const secsV = document.querySelector('span[data-value="secs"]');

const daysNumber = daysV.textContent;
const hoursNumber = hoursV.textContent;
const minsNumber = minsV.textContent;
const secsNumber = secsV.textContent;

const targetDate = new Date(2025, 8, 1, 0, 0, 0);
console.log(targetDate);


function updateClockface(time) {
  setInterval(() => {
    const time = targetDate - new Date();
    console.log(time);
    
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    daysV.textContent = days < 10 ? `0${days}` : days;
    hoursV.textContent = hours < 10 ? `0${hours}` : hours;
    minsV.textContent = mins < 10 ? `0${mins}` : mins;
    secsV.textContent = secs < 10 ? `0${secs}` : secs;
  }, 1000);
}

updateClockface();
