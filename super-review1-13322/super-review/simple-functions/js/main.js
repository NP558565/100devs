//---Easy
//create a function that adds two numbers and alerts the sum
function addTwoAndAlert(num1,num2){
  let answer = num1 + num2
  alert(answer)
}
addTwoAndAlert(2,3)

//create a function that divides two numbers and console logs the quotient
function divideTwoAndLog(n1,n2){
  console.log(n1/n2)
}
divideTwoAndLog(6,3)

//create a function that multiplys four numbers and returns the product
function multiFourAndReturn(n1,n2,n3,n4){
  return n1*n2*n3*n4
}
multiFourAndReturn(1,2,3,4)

//---Medium
/*create a function that takes in four numbers. Add the first two numbers 
and return the remainder of dividing the sum of the first two numbers by the 
difference of the last two numbers*/
function complicatedMath(n1,n2,n3,n4){
  return (n1+n2) % (n3-n4)
}
console.log(complicatedMath(5,5,4,1))

//---Hard
/*create a function that takes in 4 numbers. Multiply the first two numbers. 
If the product is greater than 100 add the sum of the last two numbers and 
console log the value. If the product is less that 100, subtract the 
difference of the last two numbers and console log the value. If the product 
is 100, multiply the first three numbers together and alert the remainder 
of dividing the fourth number*/
