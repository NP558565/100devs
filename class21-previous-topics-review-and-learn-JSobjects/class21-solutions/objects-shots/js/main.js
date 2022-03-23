//The user will enter a cocktail.
document.querySelector('button').addEventListener('click', () => {
  let drink = document.querySelector('input').value

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
      // console.log(data.drinks[0])
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[0].strInstructions
      // strDrink = Name
      // strDrinkThumb = img
      // strInstructions = Instructions
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
})
