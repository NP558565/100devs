/*Create a function that takes in an array. If the first number, is less 
than the last number, alert "Hi". If the first number is greater than the 
last number, alert "Bye". If they are equal, alert "We close in an hour".*/

function checkFirstAndLast(arr){ //create a function with function name, that takes an array (arr)
    if( arr[0] < arr[ arr.length - 1 ] ){   //first number is always 0
        alert('Hi')
    }else if( arr[0] > arr[ arr.length - 1 ] ){
        alert('Bye')
    }else{
        alert('We close in an hour')
    }
}