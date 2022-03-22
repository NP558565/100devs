// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " water"
favDrink = favDrink.trim()
console.log(favDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multiword = "car rainbow apple"
if(multiword.search("apple") !== -1) {
    console.log("yes")
} else {
    console.log("no")
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  let random = Math.random();
  if (random < 0.33) {
    document.querySelector("#rpsAnswer").innerHTML = "Rock";
    return "rock";
  } else if (random < 0.66) {
    document.querySelector("#rpsAnswer").innerHTML = "Paper";
    return "paper";
  } else {
    document.querySelector("#rpsAnswer").innerHTML = "Scissors";
    return "scissors";
  }
  
}
// // *Conditionals*
// //Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(choice) {
  let botChoice = rockPaperScissors();
  if (
    (choice === "rock" && botChoice === "scissors") ||
    (choice === "paper" && botChoice === "rock") ||
    (choice === "scissors" && botChoice === "paper")
  ) {
     document.querySelector("#wtl").innerHTML = "you won";
  } else if (choice === botChoice) {
    document.querySelector("#wtl").innerHTML = "you tied";
  } else {
    document.querySelector("#wtl").innerHTML = "you lost";
  }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGame(arr) {
  arr.forEach((choice) => {
    checkWin(choice);
  });
}
playGame(["rock", "paper", "paper"]);

function refreshPage() {
  window.location.reload();
} 
======================================================================
//other wasy to do the above:
// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const sentence = "Why am I doing this?"
if (sentence.endsWith('?')){
    alert(sentence)
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print
// it to the console
let s = "Are you looking for a jr. dev position?"
// my answer
console.log(s.replace('jr. dev', 'software engineer'))
// correct answer
console.log(s.replaceAll('jr. dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function ro_sham_bo() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
}
console.log(ro_sham_bo())
console.log(ro_sham_bo())
console.log(ro_sham_bo())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper
// scissors against a bot using the above function
function play(playersChoice) {
    let oppositionChoice = ro_sham_bo()
    if (playersChoice === oppositionChoice) {
        return "Tie!"
    } else if (playersChoice === 'rock' && oppositionChoice === 'scissors'
            || playersChoice === 'scissors' && oppositionChoice === 'paper'
            || playersChoice === 'paper' && oppositionChoice === 'rock') {
        return "You Won!"
    } else {
        return "You Lost :("
    }
}
console.log(play('rock'))
console.log(play('paper'))
console.log(play('scissors'))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array.
// Print the results of each game to the console.

=========================================================================
// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console
// multiple times using a method
let affirmation = "Be the tortoise. "
let affirm = () => console.log(affirmation.repeat(3))
affirm()

// Declare a variable, assign it an array of letters, combine the letters into one word, and alert it
let letterArr = ['h', 'i', '!']
alert(letterArr.join(''))

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
let lizard_spock = () => ['rock', 'paper', 'lizard', 'spock', 'scissors'][Math.floor(Math.random() * 5)]
console.log(lizard_spock())
console.log(lizard_spock())
console.log(lizard_spock())

// *Conditionals*
// Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game
// of rock paper scissors against a bot using the above function
const choices = {
    rock:{
        win: ['lizard', 'scissors']
    },
    paper:{
        win: ['rock', 'spock']
    },
    lizard:{
        win: ['paper', 'spock']
    },
    spock:{
        win: ['scissors', 'rock']
    },
    scissors:{
        win: ['paper', 'lizard']
    }
}

function play(playerChoice) {
    let progChoice = lizard_spock()
    let msg
    if (playerChoice === progChoice) {
        msg = 'You Tie!'
    } else if (choices[playerChoice].win.includes(progChoice)) {
        msg = 'You Won!'
    } else {
        msg = 'You Lost :('
    }
    console.log(`${msg} with ${playerChoice} to ${progChoice}`)
}
play('rock')
play('paper')
play('scissors')
play('spock')
play('lizard')

// solution inspired by
// https://stackoverflow.com/questions/53730900/more-efficient-choice-comparison-for-rock-paper-scissors
=================================================================================

// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "  dietVanillaCokeFromFriendlys"
favDrink = favDrink.trim()
console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multiWord = "car rainbow"
if(multiWord.search("apple") !== -1){
  console.log("yes")
}else{
  console.log("no")
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
  let random = Math.random()
  if(random < .33){
    return "rock"
  }else if(random < .66){
    return "paper"
  }else{
    return "scissors"
  }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(choice){
  let botChoice = rockPaperScissors()
  if((choice === "rock" && botChoice === "scissors")||(choice === "paper" && botChoice === "rock")||(choice === "scissors" && botChoice === "paper")){
    console.log("you won")
  }else if(choice === botChoice){
    console.log("you tied")
  }else{
    console.log("you lost")
  }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGame(arr){
  arr.forEach((choice) => {
    checkWin(choice)
  })
}
playGame(['rock','paper','paper'])

=============================================================================

// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let positiveAff = "You are beautiful"
console.log(`Again: ${positiveAff.repeat(24)}`)

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it
let word = ['T','e','s','l','a']
alert(word.join(''))

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function rpsls(){
  let random = Math.random()
  if(random < .2){
    return 'rock'
  }else if(random < .4){
    return 'paper'
  }else if (random < .6) {
    return 'scissors'
  }else if (random < .8) {
    return 'lizard'
  }else{
    return 'spock'
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(choice){
  let botChoice = rpsls()
  if((choice === 'rock' && botChoice === 'scissors') || (choice === 'paper' && botChoice === 'rock') || (choice === 'scissors' && botChoice === 'paper') || (choice === 'spock' && botChoice === 'rock') || (choice === 'spock' && botChoice === 'scissors') || (choice === 'lizard' && botChoice === 'paper') || (choice === 'lizard' && botChoice === 'spock') || (choice === 'scissors' && botChoice === 'lizard') || (choice === 'paper' && botChoice === 'spock') || (choice === 'rock' && botChoice === 'lizard')){
    console.log('won')
  }else if(choice === botChoice){
    console.log('tie')
  }else{
    console.log('lose')
  }
}
checkWin('spock')
