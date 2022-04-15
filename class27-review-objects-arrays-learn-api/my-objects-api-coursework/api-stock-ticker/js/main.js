document.querySelector("button").addEventListener("click",funcRead)

function funcRead () {
    let ticker = document.querySelector("input").value
    url = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + ticker + "&apikey=B9VZ95P8BL8KRJ17"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector("h3").innerText = ""
            for (let key in data) {
                document.querySelector("h3").innerText += key + " " + data[key] + "\n"
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}






