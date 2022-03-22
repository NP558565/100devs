//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrinks)

function getDrinks() {
    let drink = 'margarita'
    drink = document.querySelector('input').value.replaceAll(' ', '_')
    console.log(drink)
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let img = document.querySelector('img')
            let drink = data.drinks[0]
            img.src = drink.strDrinkThumb
            // img.src = drink.strImageSource
            img.alt = drink.strDrink
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

// TODO Homework
// miss-spellings
// push: rotating array of drinks -> automatically runs

==============================================================================

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  let drinkChoice = document.querySelector('input').value
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drinkChoice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
