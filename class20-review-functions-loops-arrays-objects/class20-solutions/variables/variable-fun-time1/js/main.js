//--- Easy
//create a variable and assign it a boolean
let varBool = true

//create a variable and assign it a string that is a number
let varStringNum = "3"

//add 10 to that number - how?!? https://media.giphy.com/media/lkdH8FmImcGoylv3t3/giphy.gif
varStringNum = Number(varStringNum)+10

//print that number to the console
console.log(varStringNum)

//--- Medium
//create a variable that holds a value from the input
let inp = document.querySelector("input").value

//add 21 to that number
let newNum = Number(inp) + 21

//alert that number
alert(newNum)

//--- Hard
//create a variable that holds the h1
let varHold = document.querySelector("#mrRightNow")

//add an event listener to that element that places the product of the two previous variables in the DOM
document.querySelector("#mrRightNow").addEventListener("click",sumDOM)

function sumDOM() {
    let ergDOM = varStringNum * newNum
    document.querySelector("#needSomeTLC").innerText = ergDOM
}
