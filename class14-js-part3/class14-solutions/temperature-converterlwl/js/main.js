//Write your pseduo code first! 
//0 -> 32
//event listner(listen for click)-only on click
document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    //get the value - need the value that is in selseeyus
    let temp = document.querySelector('#sel').value
    //convert the value - convert from selseeyus to fairinheight
    temp = temp * 9/5 + 32
    //show value to user
    document.querySelector('#placeToYell').innerText = temp
  
}

