// *Variables*
// Declare a variable, assign it a value, and alert the value
let life = 42
alert(life)
// Create a variable, divide it by 10, and console log the value
let num = 100
console.log(num/10)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplication(n1,n2,n3) {
    alert(n1*n2*n3)
}
multiplication(2,3,4)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function doubleSubtraction(n1,n2,n3,n4) {
    console.log((n1+n2)-(n3+n4))
}
doubleSubtraction(10,5, 3, 2)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide
// the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function winna(n1,n2,n3) {
    if ((100+n1-n2)/n3 > 25) {
        console.log('WE HAVE A WINNA')
    }
}
winna(1,1,1)
winna(10,10,6)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day".
// Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function weekAlert(dayOfWeek) {
    let message
    dayOfWeek = dayOfWeek.toLowerCase()
    switch (dayOfWeek) {
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
            message = 'week day'
            break
        case 'saturday':
        case 'sunday':
            message = 'weekend'
            break
        default:
            message = 'Try again!'
    }
    alert(message)
}
weekAlert('Thursday')
weekAlert('What?')
weekAlert('Sunday')
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function logRange(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}
logRange(4)