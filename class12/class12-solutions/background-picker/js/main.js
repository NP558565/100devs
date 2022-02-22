//ID and classes can be targeted to add the interaction to JS
//the below 3 lines are called event listner - we are listning to events.
/*document is rendering of the page, get elementID=purple, and when you click
run the instructions, these instructions are run in a function statement*/
document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue

//below 3 instructions run in same way as lines 12-15.
/*go to the document, finds the body(using queryS), give background color
to purple, and when you refresh the page give background color white*/
function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}
