const daysEl    = document.getElementById('days');
const hoursEl   = document.getElementById('hours');
const minsEl    = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');



const newYears = '1 Jan 2023';



function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDay = new Date();

    const seconds = (newYearsDate - currentDay ) / 1000;

    const days    = Math.floor(seconds/3600/24);
    const hours   = Math.floor(seconds / 3600) % 24 ;
    const mins    = Math.floor(seconds / 60) % 60 ; 
    const secLeft = Math.floor(seconds) % 60;


    // console.log(days, hours, mins, secLeft );
    
    daysEl.innerHTML    = days;
    hoursEl.innerHTML   = hours;
    minsEl.innerHTML    = mins;
    secondsEl.innerHTML = secLeft;
}




setInterval(countDown, 1000);

