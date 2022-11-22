const days = document.querySelector(".nb_day") // get the view's day
const hours = document.querySelector(".nb_hour") // the view's hours
const minutes = document.querySelector(".nb_minutes") // the view's minutes
const seconds = document.querySelector(".nb_seconds") // the view's seconds
const dayOne = "17 may 2022" // The final date
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const vid = document.getElementById("vid");
const container = document.querySelector(".container");
const jourJ = document.getElementById("j");

function countDown() {
    vid.style.display = "none";
    const dayOneDate = new Date(dayOne); // day One's construction
    const currentDate = new Date(); // Get the current day
    const totalSeconds = Math.floor((dayOneDate-currentDate)/1000); // Seconds left to the date ( Convert Milliseconds in seconds)
    const perCent =(currentDate*100/dayOneDate)*100/100;



    days.textContent = Math.floor(totalSeconds/86400); // Change the view's day by the days left
    hours.textContent= Math.floor(totalSeconds/3600%24); // Change the view's hours by the hours left
    minutes.textContent = Math.floor(totalSeconds/60%60); // Change the view's minutes by the minutes left
    seconds.textContent = Math.floor(totalSeconds%60); // Change the view's seconds by the seconds left
    bar.style.width = perCent * 5 + "px";
    percent.textContent = perCent + "%";
}

countDown(); // First call for the countdown's function
if(days == "0" && hours=="0" && minutes == "0" && seconds == "0"){
    jourJ.style.display = "none";
    vid.style.display = "block";
    vid.style.textAlign ="center";
}else{
    setInterval(countDown, 1000); // Refresh the function every seconds
}


