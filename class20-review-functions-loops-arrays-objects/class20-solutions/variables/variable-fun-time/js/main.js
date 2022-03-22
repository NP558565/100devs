//--- Easy
//create a variable and assign it a number
let variable = 15
//minus 10 from that number
variable = variable - 10
//print that number to the console
console.log(`Easy: ${variable}`)

//--- Medium
//create a variable that holds a value from the input
let var2 = document.querySelector("#danceDanceRevolution").value
//add 25 to that number
var2 = var2 + 25
//alert that number
alert(var2)

//--- Hard
//create a variable that holds the h1
let var3 = document.querySelector("h1")
//add an event listener to that element that console logs the sum of the two previous variables
var3.addEventListener("click",func1)

function func1() {
    // alert("Drinnen!")
    let sum = Number(variable) + Number(var2)
    console.log(`Hard: ${sum} is the sum from Variable: ${variable} and ${var2}`)
}
