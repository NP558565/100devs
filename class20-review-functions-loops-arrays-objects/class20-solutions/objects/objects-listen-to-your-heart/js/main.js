//Create a stopwatch object that has four properties and three methods
//lITERAL NOTATION
let stopWatch = {}
//PROPERTIES
stopWatch.color = "black"
stopWatch.brand = "Nike"
stopWatch.shape = "octagon"
stopWatch.year = 2020
//METHODS
stopWatch.stopTimer = function(){
  console.log('timer has stopped')
}
stopWatch.startTimer = function(){
  console.log('timer has started')
}
stopWatch.pauseTimer = function(){
  console.log('timer is paused')
}
