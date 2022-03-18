//List of words
/*Write a program that asks the user for a word until the user 
types "stop". The program then shows each of these words, except 
"stop".*/

const words = [];
let word = "";
while (word !== "stop") {
  word = prompt("Enter a word or stop to quit:");
  if (word !== "stop") {
    words.push(word);
  }
}

console.log("You have entered the following words:");
words.forEach(w => {
  console.log(w);
});
