/*const timer = document.getElementById('stopwatch'); imports the timer 'div' as a 
variable, using it's id, so we can modify it as we wish.*/
const timer = document.getElementById('stopwatch');

/*var hr = 0; var min = 0; var sec = 0; we are creating the hour, minute and second 
variables and we are declaring that their initial value is 0.*/
let hr = 0;
let min = 0;
let sec = 0;

/*var stoptime = true; we create a variable so we can then verify if the stopwatch 
is running or not.*/
let stoptime = true;

/*if (stoptime == true) { stoptime = false; timerCycle(); } if the stopwatch is not 
running, turn it on and go to the timerCycle() function. (This only runs if we click 
the 'Start' button)*/
function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

/*if (stoptime == false) { stoptime = true; } if the stopwatch is running, turn it off. 
(This only runs if we click the 'Stop' button)*/
//if (stoptime == false) { verify that the stopwatch is on.
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

/*sec = parseInt(sec); min = parseInt(min); hr = parseInt(hr); these are used to parse 
a string into an integer. (if we have 1045 as a string and we want to use it as an 
integer, we parse it)*/
function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

//sec = sec + 1; add 1 to seconds.
    sec = sec + 1;

/*if (sec == 60) { if seconds are equal to 60, minutes = 1 and seconds becomes 0 again.*/
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

/*if (min == 60) { if minutes are equal to 60, hours = 1 and seconds + minutes becomes 
  0 again.*/
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
/*If seconds, minutes and/or hours are lower than 10, add a 0 in front. This is why we 
need to parse everything in the beginning: doing this operation they become strings.*/
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

/*timer.innerHTML = hr + ':' + min + ':' + sec; add these values to the 'timer' div.*/
    timer.innerHTML = hr + ':' + min + ':' + sec;

/*setTimeout("timerCycle()", 1000); this will make sure there is a timeout of 1000 ms 
(1s) before repeating the 'timerCycle()'.*/
    setTimeout("timerCycle()", 1000);
  }
}

//timer.innerHTML = '00:00:00'; used to reset the timer to 00:00:00
function resetTimer() {
    timer.innerHTML = '00:00:00';
}

/*function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}*/