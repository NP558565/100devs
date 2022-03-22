/*Create a function that takes in an array of numbers. Return a new 
array containing every even number from the original array 
(do not use map or filter)*/

function onlyEvens(nums){
    let evens = [] //emyty array to store the values
//if number is even, then push to array 
    nums.forEach( n => {
        if(n % 2 === 0){ //divisble by 2 and === to 0 we know it's even
            evens.push(n)
        }
    })
    return evens
}
console.log( onlyEvens([1,2,3,4,5,6]) )
===============================================================

// with filter
arr1 = [1,2,3,4,5,6]
newarr = arr1.filter(x => x % 2 === 0); // Short Method in one line
console.log(newarr)

