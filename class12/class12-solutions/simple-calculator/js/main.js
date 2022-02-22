let total = 0 //declare total assign to 0
//ID and classes can be targeted to add the interaction to JS
//the below 4 lines are called event listner - we are listning to events.
/*document is rendering of the page, get QueryS pumpkin, add an event in this 
case mousenter, and when you click run the instructions, these instructions are 
run in a function statement*/
document.querySelector('#pumpkin').addEventListener('mouseenter', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#dominosPizzaSucks').addEventListener('click', pizza)
document.querySelector('#UphamsPizzaIsTheBest').addEventListener('click', burger)

//function we are re-assigning the total
function makeZero() {
  total = 0

  document.querySelector('#placeToPutResult').innerText = total
}
/*go to document find the ID of placeto putresult and put some text inside of 
it and then we put inside of it total eg 3*/
function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}
function pizza() {
  total = total + 500
  document.querySelector('#placeToPutResult').innerHTML = total
}
function burger() {
  total = total - 10
  document.querySelector('#placeToPutResult').innerHTML = total
}

