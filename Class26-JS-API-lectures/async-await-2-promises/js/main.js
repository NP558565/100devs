const start = Date.now()
const log = (msg) => console.log(`${msg} \n Elapsed: ${Date.now() - start} ms`)

const codeBlocker = () => {
    // holds up the event loop
    // for (let i = 0; i < 1000000000; i++) {
    // }
    // return '🏋️‍♂️ Billion loops done! 🏋️‍♂️'

    // still holds up the event loop
    // loop is still happening on the main thread
    // return new Promise(((resolve, reject) => {
    //     for (let i = 0; i < 1000000000; i++) {
    //     }
    //     resolve('🏋️‍♂️ Billion loops done! 🏋️‍♂️')
    // }))

    // lets the event loop continue
    return Promise.resolve().then(_ => {
        for (let i = 0; i < 1000000000; i++) {
        }
        return '🏋️‍♂️ Billion loops done! 🏋️‍♂️'
    })
}

log('🌓 Synchronous 1')
// log(codeBlocker())
codeBlocker().then(log)
log('🌗 Synchronous 4')



// callbacks / promise hell
/*
function promiseHell() {
    let userId
    let postId
    let db

    db
        .then(u => {
            return db.user().then(res => res.json())
        })
        .then(u => {
            userId = u.id
            return db.post(userId).then(res => res.json())
        })
        .then(p => {
            postId = p.id
            return db.comments(postId).then(res => res.json())
        })
}

 */