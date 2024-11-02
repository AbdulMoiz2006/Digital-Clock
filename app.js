
function clock(){

var clockElem = document.getElementById("clock");
var time = new Date();
var hours = time.getHours();
var am_pm = "AM"


if(hours >= 12){

am_pm = "PM"

}

if(hours > 12){

hours = hours - 12;

}

if(hours === 0 ){

hours = 12;

}

if(hours < 10){

hours = "0"+hours

}

var minutes = time.getMinutes();


if(minutes < 10){

    minutes = "0"+minutes
    
}
    
    
var seconds = time.getSeconds();

if(seconds < 10){

    seconds= "0"+seconds
    
}
    
clockElem.textContent = `${hours}:${minutes}: ${seconds} ${am_pm} `

}


setInterval(clock, 1000);

clock()