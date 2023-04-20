const getHour = document.querySelector('#hours');
const getMinutes = document.querySelector('#minutes');
const getSeconds = document.querySelector('#seconds');
const amPm = document.querySelector('#day-night');


function clock(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    if (hours >=0 && hours <=9){
        getHour.innerHTML = `0${hours}`;

    }
    else{
        getHour.innerHTML = hours;
    }
    if (minutes >=0 && minutes <=9){
        getMinutes.innerHTML = `0${minutes}`;

    }
    else{
        getMinutes.innerHTML = minutes;
    }
    if (seconds >=0 && seconds<=9){
        getSeconds.innerHTML = `0${seconds}`;
    }
    else{
        getSeconds.innerHTML = seconds;
    }
    // console.log(`Hello the time is ${hours}:${minutes}:${seconds}`);
    if(hours > 12){
        amPm.innerHTML = 'PM';
    }
    if (hours <= 12){
        amPm.innerHTML = 'AM'
    }

}

setInterval(clock, 1000);