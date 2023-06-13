const start = Date.now()
const log = (msg) => console.log(`${msg} \n Elapsed: ${Date.now() - start} ms`)

// simulate api delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const getFruit = async(name) => {
    const fruits = {
        apple: '🍎',
        orange: '🍊',
        strawberry: '🍓'
    }
    await delay(1000)
    return fruits[name]
}
// same as ... (somewhat) [above can use 'await' keyword, below can't]
const getFruit2 = (name) => {
    const fruits = {
        apple: '🍎',
        orange: '🍊',
        strawberry: '🍓'
    }
    return Promise.resolve(fruits[name])
}

getFruit('strawberry').then(log)

// async + await
// await - pauses the execution of the function
const makeSmoothie = async() => {
    // fails to run requests concurrently (we can here) - see makeSmoothie3
    const a = await getFruit('strawberry')
    const b = await getFruit('orange')

    return [a, b]
}
// same thing with just Promises
const makeSmoothie2 = () => {
    let a
    return getFruit('strawberry')
        .then(res => {
            a = res
            return getFruit('orange')
        })
        .then(res => [a, res])
}
// concurrent awaits
const makeSmoothie3 = async() => {
    const a = getFruit('strawberry')
    const b = getFruit('orange')
    return Promise.all([a, b])
}

log('start')
makeSmoothie().then(log) // takes 2000ms
makeSmoothie2().then(log) // takes 2000ms
makeSmoothie3().then(log) // takes 1000ms

const badSmoothie = async() => {
    try {
        const a = getFruit('strawberry')
        const b = getFruit('orange')
        let smoothie = Promise.all([a, b]);
        throw 'broken!'
        return smoothie
    } catch (e) {
        log(e)
        // return 'We are fine...'
        throw 'It is broken!'
    }
}

badSmoothie()
.then(res => log(res))
.catch(e => log(e))


const fruits = ['apple', 'orange', 'strawberry']

const smoothie = fruits.map(fruit => getFruit(fruit))
log(smoothie)