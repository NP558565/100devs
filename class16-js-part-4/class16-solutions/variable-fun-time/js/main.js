//--- Easy
//create a variable and assign it a number
let num = 1
//minus 10 from that number
num = num - 10
//print that number to the console
console.log(num)

//--- Medium
//create a variable that holds a value from the input
let inputedVal = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
inputedVal = inputedVal + 25  //inputedVal is an empty string ""
// //alert that number
alert(inputedVal)

//--- Hard
//create a variable that holds the h1
const h1Holder = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous 
//variables

h1Holder.addEventListener('click', sum)

function sum(){
    let inputedVal = document.querySelector('#danceDanceRevolution').value
    console.log(num + Number(inputedVal) )
}

-------------------------------------------------------------------------------------

//--- Easy
//create a variable and assign it a boolean
const booLean = true;
//create a variable and assign it a string that is a number
let num = '5'
//add 10 to that number - how?!? https://media.giphy.com/media/lkdH8FmImcGoylv3t3/giphy.gif
num = Number(num) + 10
 //15
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input
//let inputVal = document.querySelector('input').value
//add 21 to that number
//inputVal = inputVal + 21
//alert that number
//alert(inputVal);

document.querySelector("#clickMe").addEventListener('click', add21);

function add21() {
    let inputVal = Number(document.querySelector('input').value)
    inputVal = inputVal + 21
    alert(inputVal)
}
//--- Hard
//create a variable that holds the h1
let mrRightNow = document.querySelector('#mrRightNow');
//add an event listener to that element that places the product of the two previous variables in the DOM
mrRightNow.addEventListener('click', stunt)

function stunt() {
    document.querySelector('#needSomeTLC').innerText = num * num
}
-------------------------------------------------------------------------------

//--- Easy
//create a variable and assign it a number
let num = 50
//minus 10 from that number
num -= 10
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input
let inputVal = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
inputVal += 25
//alert that number
alert(inputVal)
//--- Hard
//create a variable that holds the h1
let h1 = document.querySelector('h1')
console.log(h1)
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', sum)

function sum() {
    inputVal = document.querySelector('#danceDanceRevolution').value
    inputVal += 25
    console.log(Number(inputVal))
    console.log(num + Number(inputVal))
}
-----------------------------------------------------------------------------


