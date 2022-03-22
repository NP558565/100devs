//Create a conditonal that checks the day
//If Tuesday or Thursday, tell them they have class
//If Saturday, tell them they have Office Hours
//If Friday and House Turing, they have private office hours
//If Wednesday and House Hopper, tell them they have private office hours
//If Monday and House Hamilton, tell them to book a 1on1
//If any other day or wrong house, tell them to study

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector("h1").addEventListener("click",dayCheck)
function dayCheck() {
    let varDay = document.querySelector("#whatDay").value
    let varHouse = document.querySelector("#whatHouse").value
    let result = ""
    if (varDay === "Tuesday" || varDay === "Thursday") {
        result = "You have class!"
    } else if (varDay === "Saturday") {
        result = "You have Office hours!"
    } else if (varDay === "Friday" && varHouse ==="Turing") {
        result = "You have private office hours!"
    } else if (varDay === "Wednesday" && varHouse ==="Hopper") {
        result = "You have private office hours!"
    } else if (varDay === "Monday" && varHouse ==="Hamilton") {
        result = "You have private office hours!"
    } else {
        result = "You have to study!"
    }
    alert(result)
}

