//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtraction(n1, n2) {
    alert(n1 - n2)
}
subtraction(100, 50)
//create a function that divides three numbers and console logs the quotient
function division(n1, n2, n3) {
    console.log(n1 / n2 / n3)
}
division(24, 4, 2)
//create a function that multiplys three numbers and returns the product
function mutiplication(n1, n2, n3) {
    return n1 * n2 * n3
}
console.log(mutiplication(2, 3, 4, 5))
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addRemainder(n1, n2, n3) {
    return (n1 + n2) % n3
}
console.log(addRemainder(4, 6, 3))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function unique(n1, n2, n3, n4) {
    let mult = n1 * n2
    if (mult > 100) {
        mult += (n3 + n4)
        console.log(mult)
    } else if (mult < 100) {
        mult -= (n3 - n4)
        console.log(mult)
    } else {
        alert((mult * n3) % n4)
    }
}
unique(51, 2, 1, 2) //105
unique(49, 2, 2, 1) //97
unique(50, 2, 1, 32) //4