 //PREP - Don't type during the interview
 //PARAMETERS - RETURNS - EXAMPLES - PSEUDO CODE

 //A number 1 to number, if 3 fizz, if 5 buzz, 3&5 fizzbuzz
 //P: number, whole, positive
 //R: console
 //E: 

function fizzBuzz(num){
    //loop
    //conditionals % 3&5, % 3, % 5
    //console.log num or fizz,buzz,fizzBuzz

 }

fizzBuzz(5) // 1,2,fizz,4,buzz
fizzBuzz(3) // 1,2,fizz
fizzBuzz(15) // 1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzBuzz

function fizzBuzz(num){
    for(i = 1; i <= num; i++){  
        if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i)
        }
    }
}

 //PARAMETERS - RETURNS - EXAMPLES - PSEUDO CODE

 // PARAMETERS:
 // Array of Integer Pairs
 // Each pair = People who get on the bus + people who get off the bus

// RETURNS:
// # of people still on the bus after the last bus station

// EXAMPLES: 
// [10,0], [3,5], [5, 8] = 5 people left on bus

let number = function(busStops){
    //add first numbers in array = num1
    //add second numbers in array = num2
    //subtract num2 from num1
    return number.reduce((totalPeople, currentStop) => totalPeople + currentStop[0] - currentStop[1] , 0)
}

 //PARAMETERS - RETURNS - EXAMPLES - PSEUDO CODE
 // Operation = Mathematical sign
 // Value1 = Number; Value2 = Number
 // Returns Value1 Operation Value2
 // Example: ('*' 7, 4) --> 28

 function basicOp(operation, value1, value2) {
    if (operation == "-") {
        return value1 - value2;
    } else if (operation == "+") {
        return value1 + value2;
    } else if (operation == "/") {
        return value1 / value2;
    } else if (operation == "*") {
        return value1 * value2;
    }
 }