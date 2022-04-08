//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click",funcRead)

function funcRead() {
    let inp = document.querySelector("input").value
    // inp = inp.split(" ").join("-")
    console.log(inp)
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inp)
        .then(res => res.json())
        .then(data => {
            console.log(data.drinks)
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    data.drinks.forEach((elem, idx) => {
                        setTimeout(() => {
                            console.log(elem.strDrink)
                            document.querySelector("h2").innerText = elem.strDrink
                            document.querySelector("img").src = elem.strDrinkThumb
                            document.querySelector("h3").innerText = elem.strInstructions
                        }, idx * 2000);
                    })
                }, i * data.drinks.length * 2000);
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}









