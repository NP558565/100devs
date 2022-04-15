fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector("img").src = data[0].url
    })
    .catch(err => {
        console.log(`error ${err}`)
    });



