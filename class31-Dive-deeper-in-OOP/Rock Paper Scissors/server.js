const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://Zolere:cluster0000@cluster0.8agmxaj.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true }) 
    .then (client => {
        const db = client.db('rps-generator')
        const outcomesCollection = db.collection('outcomes')
        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
        app.use(express.static('public'))
        app.put('/rng', (req, res) => {
            console.log(req.body)
            outcomesCollection.findOneAndUpdate(
                { name: 'User' },
                update,
                options
            )
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error))
        })
        app.get('/', (req, res) => {
            db.collection('outcomes').find().toArray()
                .then(results => {
                    res.render('index.ejs', { outcomes: results })
                })
                .catch(error => console.log(error))
        })
        app.post('/rng', (req, res) => {
            // Take in the user's input: "rock", "paper", "scissors"
            let choice = (req.body.choice) 
            
            // If the user inputs something that is not any of the above 3, return an error message            
            if (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
                res.status(400)
                res.end()
            }
            let pcchoice = rockPaperScissors()

            // Afterwards, generate the computer's result from the game            
            let outcome
            if ((choice === 'rock' && pcchoice === 'scissors') || (choice === 'paper' && pcchoice === 'rock') || (choice === 'scissors' && pcchoice === 'paper')) {
                outcome = 'Win'
            } else if ( (choice === pcchoice) ) {
                outcome = 'Tie'
            } else {
                outcome = 'Loss'
            }

            // Return: User's input, Computer's result, and win/loss/tie statement
            outcomesCollection.insertOne({
                playerChoice: choice,
                pcChoice: pcchoice,
                result: outcome
            })
                .then(result => {
                    res.redirect('/')
                    
                })
                .catch(error => console.log(error))
        })
        app.delete('/rng', (req, res) => {
            outcomesCollection.deleteMany({
                
            })
            .then (result => {
                res.json('Deleted Outcomes')
            })
            .catch(error => console.log(error))
        })
        app.listen(3000, function() {
            console.log('listening on 3000')
        })
    })
    .catch(error => console.log(error))


    function rockPaperScissors() {
        let random = Math.random()
        if (random < .33) {
        return 'rock'
    } else if (random < .66) {
        return 'paper'
    } else {
        return 'scissors'
    }
    }