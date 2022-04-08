// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
// let positiveEnergy = "we go get! "
// console.log(positiveEnergy.repeat(14))

// //Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 
// let arrOfLetters = ['a', 'b', 'c', 'd']
// alert(arrOfLetters.join(''))

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function randomPicker() {
  let flag = Math.floor(Math.random() * 5 + 1)
  if (flag === 1) return "rock"
  if (flag === 2) return "paper"
  if (flag === 3) return "lizard"
  if (flag === 4) return "spock"
  return "scissors"
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
function game(str) {
  if(str==='rock'&&randomPicker==='scissors' || str==='paper'&&randomPicker==='rock'||str==='scissors'&&randomPicker==='paper') return "You won!"
  return "You lost."
}
alert(game('paper'))