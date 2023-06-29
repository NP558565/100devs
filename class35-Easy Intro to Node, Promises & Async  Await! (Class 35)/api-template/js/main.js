//Make an api request using async await


document.querySelector('#heads-button').addEventListener('click', headsWins)
document.querySelector('#tails-button').addEventListener('click', tailsWins)

async function headsWins() {
    const res = await fetch(`/flip`)
    const data = await res.json()
    console.log(data)
    if (data.Winner === "Heads") {
        document.querySelector('#flip-result').innerText = "Heads. You win!"
    } else {
        document.querySelector('#flip-result').innerText = "Tails. You lose!"
    }
}

async function tailsWins() {
    const res = await fetch(`/flip`)
    const data = await res.json()
    console.log(data)
    if (data.Winner === "Heads") {
        document.querySelector('#flip-result').innerText = "Heads. You lose!"
    } else {
        document.querySelector('#flip-result').innerText = "Tails. You win!"
    }
}
