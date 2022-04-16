//Arrays
/*Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses 
your list and prints it to the console.*/
function reverseArray (arr1) {
    return arr1.reverse()
}
console.log(reverseArray([1,2,3,4,5]))

/*Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of 
each element in a is strictly greater than the sum of the cubes of each element in b.*/
function checkArray(arr1,arr2) {
    let erg1 = arr1.reduce ((total, elem) => {
        return total + elem * elem
    },0)
    let erg2 = arr2.reduce ((total, elem) => {
        return total + elem ** 3
    },0)
    if (erg1 > erg2) {
        return true
    } else {
        return false
    }
}
console.log(checkArray([5,6,7,8],[10000,6,7,8]))
console.log(checkArray([100000,6,7,8],[1,6,7,8]))

/*Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]*/
function  checkMultiples(arr1) {
    let erg = []
    arr1.forEach(function(elem,idx) {
        if (elem % idx === 0)
            erg.push(elem)
    })
    return erg
}
console.log(checkMultiples([22, -6, 32, 82, 9, 25]))
console.log(checkMultiples([68, -1, 1, -7, 10, 10]))

/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return 
your answer as a number.*/
function sumNumString(arr1) {
    let sum = 0
    arr1.forEach(function(elem,idx) {
        sum += Number(elem)
    })
    return sum
}
console.log(sumNumString([1,"4",3,"70"]))
