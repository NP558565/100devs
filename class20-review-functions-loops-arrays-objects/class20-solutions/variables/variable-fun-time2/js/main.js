//--- Easy
//create a variable and assign it a number
let ageOfBob = 18
//minus 10 from that number
function sayThatIm10YearsYounger(age) {
  console.log(age - 10)
}
//print that number to the console
sayThatIm10YearsYounger(ageOfBob)
//--- Medium
//create a variable that holds a value from the input
// let dance = document.querySelector("#danceDanceRevolution").value
//add 25 to that number
// dance = dance + 25
//alert that number
// console.log(dance)
//--- Hard
//create a variable that holds the h1
const heading = document.getElementById('h1')
//add an event listener to that element that console logs the sum of the two previous variables
heading.addEventListener('click', add)
function add() {
  let dance = parseInt(document.querySelector("#danceDanceRevolution").value)
  dance = dance + 25
  console.log(ageOfBob + dance)
}
