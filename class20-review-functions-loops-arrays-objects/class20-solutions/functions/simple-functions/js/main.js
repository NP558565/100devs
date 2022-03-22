//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract2Numbers(n1,n2) {
    let erg = n1 - n2
    alert(`Easy: ${n1} minus ${n2} is ${erg}`)
}
subtract2Numbers(14,10)

//create a function that divides three numbers and console logs the quotient
function divide3Numbers(n1,n2,n3) {
    let erg = n1 / n2 / n3
    console.log(`Easy: ${n1} divided by ${n2} and divided by ${n3} is ${erg}`)
}
divide3Numbers(100,4,2)

//create a function that multiplys three numbers and returns the product
function multiplicate3Numbers(n1,n2,n3) {
    return (n1 * n2 * n3)
}
let erg = multiplicate3Numbers(2,4,5)
alert(`Easy: Multiplication from 2 with 4 and with 5 is ${erg}`)


//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function remainder3Numbers(n1,n2,n3) {
    let sumMedium = n1 + n2
    return (sumMedium % n3)
}
let ergMedium = remainder3Numbers(56,23,8)
alert(`Medium: 56 plus 23 divided by 8 the remainder ist: ${ergMedium}`)


//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value.
// If the product is less that 100, subtract the difference of the last two numbers and console log the value.
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function workOn4Numbers(n1,n2,n3,n4) {
    let tmpErg = n1 * n2
    if (tmpErg > 100) {
        let ergHard = tmpErg + n3 + n4
        console.log(`Hard: ${n1} multiplicated with ${n2} > 100 - Result is ${ergHard}`)
    } else if (tmpErg < 100) {
        let ergHard = tmpErg - (n3 - n4)
        console.log(`Hard: ${n1} multiplicated with ${n2} < 100 - Result is ${ergHard}`)
    } else if (tmpErg === 100) {
        let ergHard = (tmpErg * n3) % n4
        console.log(`Hard: ${n1} multiplicated with ${n2} = 100 - Result is Remainder ${ergHard}`)
    }
}
workOn4Numbers(55,50,10, 6)
workOn4Numbers(10,8,10, 6)
workOn4Numbers(10,10,10, 7)
