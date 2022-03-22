//Create a function that takes in a number. 
//The function should return an array that contains every number 
//from 1 to that number as seperate elements

//I have used the string method

var newFun = function(string) {
     return string[0].split(" ");
}

===================================================================

//Create a function that takes in a number.
//The function should return an array that contains every number
//from 1 to that number as seperate elements
function numToArray(num){
  let numArray = []
  for(let i=1; i<num;i++){
    numArray.push(i)
  }
  console.log(numArray)
}
numToArray(5)
