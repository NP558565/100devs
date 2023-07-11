const { urlencoded } = require('express')
const express = require('express')
const app = express()
const MongoClient = require('MongoDB').MongoClient
const PORT = 3000
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'toDoList'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then( client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (request, response) => {
    db.collection('toDoList').find().toArray()
    .then(data => response.render('index.ejs', { toDoList: data} ))
})

app.post('/addToDo', (request, response) => {
    db.collection('toDoList').insertOne({task: request.body.task, isDone : false})
    .then(result => response.redirect('/'))
    .catch(err => console.error('Error adding task: ', err))
})

app.put('/toggleTask', (request, response) => {
    db.collection('toDoList').updateOne({task : request.body.task}, {$set: {isDone : request.body.isDone}})
    .then(result => response.json('Task Item Toggled'))
    .catch(err => console.error('Error updating task: ', err))
})

app.delete('/clearList', (request, response) => {
    db.collection('toDoList').deleteMany({})
    .then(result => response.json('List Cleared'))
    .catch(err => console.error('Error clearning list: ', err))
})

app.listen(process.env.PORT || PORT, () => console.log(`Server running on port ${PORT}`))