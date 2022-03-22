//---Easy
//create a function that adds two numbers and alerts the difference
function addNums(n1,n2) {
    alert(n1+n2)
}
//create a function that divides two numbers and console logs the quotient
function divNums(n1,n2) {
    console.log(n1/n2)
}
//create a function that multiplys four numbers and returns the product
function multNums(n1,n2) {
    return (n1*n2)
}

//---Medium
//create a function that takes in four numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the
// difference of the last two numbers
function fourNums(n1,n2,n3,n4) {
    return (n1+n2) % (n3-n4)
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers
// and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value.
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function fourNums(n1,n2,n3,n4) {
    let erg = n1*n2
    if (erg > 100) {
        erg = erg + n3 + n4
        console.log(erg)
    } else if (erg < 100) {
        erg = erg - (n3 - n4)
    } else {
        erg = (erg * n3) % n4
        alert(erg)
    }
}
