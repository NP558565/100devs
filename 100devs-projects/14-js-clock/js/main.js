var secondHand = document.querySelector('.second-hand');
var hourHand = document.querySelector('.hour-hand');
var minHand = document.querySelector('.min-hand');

function date(){
  var now = new Date();
  var seconds = now.getSeconds()
  var secondDegrees = ((seconds / 60) * 360) +90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;


  var hours = now.getHours()
  var hoursDegrees = ((hours / 12) * 360) +90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


  var mins = now.getMinutes()
  var minDegrees = ((mins / 60) * 360) +90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

}
setInterval(date,1000)
