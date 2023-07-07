const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(bodyParser.json())

MongoClient.connect("mongodb+srv://ReadMongo:81468146@cluster0.ram23.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')  
  })
  .catch(err => {                             
    console.log(`error ${err}`)
  })    

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray()
    .then(results => {
      res.render('index.ejs', { quotes: results })
    })
    .catch(error => console.error(error))
})

app.post('/quotes', (req, res) => {
  quotesCollection.insertOne(req.body)
    .then(result => {
      res.redirect('/')
    })
    .catch(error => console.error(error))
})

app.put('/quotes', (req, res) => {
  quotesCollection.findOneAndUpdate(/* ... */)
    .then(result => {
      console.log(result)
      })
    .catch(error => console.error(error))
})

app.listen(3000, function() {
  console.log('listening on 3000')
})

// app.get('/', (req, res) => {
//   res.send('Hello World')
//)

// app.post('/quotes', (req, res) => {
//   console.log('Hellooooooooooooooooo!')
// })

// app.post('/quotes', (req, res) => {
//   console.log(req.body)
// })

// app.post('/quotes', (req, res) => {
//   quotesCollection.insertOne(req.body)
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.error(error))
// })
