// *Variables*
// Create a variable and console log the value
let myVar = 'my Variable!'
console.log(myVar)
// Create a variable, add 10 to it, and alert the value
let num = 10
alert(num += 10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtraction(n1, n2, n3, n4) {
    alert(n1 - n2 - n3 - n4)
}
subtraction(50, 10, 10, 3)
// Create a function that divides one number by another and returns the remainder
function division(n1, n2) {
    return n1 % n2
}
console.log(division(5, 3))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function oneCondition(n1, n2) {
    if (n1 + n2 > 50) {
        alert('Jumanji')
    }
}
oneCondition(1, 2)
oneCondition(50, 51)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function twoCondition(n1, n2, n3) {
    if ((n1*n2*n3) % 3 === 0) {
        alert('ZEBRA')
    }
}
twoCondition(3, 3, 3)
twoCondition(1, 1, 1)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function repeatPhrase(word, num) {
    for (let i = 0; i < num; i++) {
        console.log(word)
    }
}
repeatPhrase("Weeeee", 3)