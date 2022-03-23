//The user will enter a date.
//Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', () => {
//!!I'm declaring date here and assigning it the html input but is no working
  const date = document.querySelector('input').value
//needed to add & = in order to add date to url
  fetch(`https://api.nasa.gov/planetary/apod?api_key=yuj47R6zXxhBHuABMScFfHPe6eIvuaStRMaelZX5&date=${date}`)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector('h2').innerText = data.title
      document.querySelector('img').src = data.hdurl
      document.querySelector('h3').innerText = data.explanation
      // "title"
      // "hdurl"
      // "explanation"
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
})
