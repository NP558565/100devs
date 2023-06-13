// Synchronous tasks execute on the first loop

console.log('🌓 Synchronous 1')
setTimeout(_ => console.log('🍅 Timeout 2'), 0)
Promise.resolve().then(_ => console.log('🍍 Promise 3'))
console.log('🌗 Synchronous 4')

// Promises

// https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API
const url = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
const promise = fetch(url)

promise
    .then(res => res.json())
    .then(data => console.log(`Promise 5 - ${data.original_title}`))

console.log('☀️ Synchronous 6')