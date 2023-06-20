const express = require("express")
const app = express()
const MongoClient = require("mongodb").MongoClient
const PORT = 2121

<<<<<<< HEAD
// connect to mongoDB
// let db, 
//     dbConnectionstr = "mongodb+srv://Rapid1898:I65faueI65f@cluster0.ram23.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     dbName = "star-wars-quotes"
// MongoClient.connect(dbConnectionstr, {useUnifiedTopology: true})
//     .then(client => {
//         console.log(`Connected to ${dbName} Database`)
//         db = client.db(dbName)
//     })

MongoClient.connect("mongodb+srv://Rapid1898:I65faueI65f@cluster0.ram23.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    // MongoClient.connect("mongodb+srv://Rapid1898:I65faueI65f@cluster0.ram23.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useUnifiedTopology: true })
        .then(client => {
            console.log('Connected to Database')
            const db = client.db('star-wars-quotes')
            const quotesCollection = db.collection('quotes')
        })   



app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended: true }))
app.use(express.json())
=======
let db, 
    dbConnectionstr = "mongodb+srv://Rapid1898:I65faueI65f@cluster0.ram23.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    dbName = "rap"

console.log(db)
console.log(dbConnectionstr)
console.log(dbName)

// connect to mongoDB
MongoClient.connect(dbConnectionstr, {
    useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

>>>>>>> 72565886cfcc896ce9b102da926632832ddbb7e5
