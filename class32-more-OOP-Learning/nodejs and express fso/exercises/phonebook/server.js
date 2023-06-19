const express = require('express')
const morgan = require('morgan')
const app = express()

const PORT = 3001

app.use(express.json())

morgan.token('newEntry', req => JSON.stringify(req.body))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :newEntry'))

let phonebook = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
      },
      { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
      },
      { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
      },
      { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
      }
]

class Entry{
    constructor(id, name, number)
    {
        this.id = id
        this.name = name
        this.number = number
    }
}

app.get('/', (request, response) => response.send('<h1>Welcome to your Phonebook!</h1>'))

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${phonebook.length} people<p><p>${new Date()}</p>`)
})

app.get('/api/persons', (request, response) => response.json(phonebook))

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = phonebook.find(entry => entry.id === id)
    if(person) response.json(person)
    else response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    phonebook = phonebook.filter(entry => entry.id !== id)
    response.status(204).end()
})

function inUse(key, value)
{
    for(let i = 0; i < phonebook.length; ++i)
    {
        if(phonebook[i][key] === value) return true
    }

    return false
}

app.post('/api/persons/', (request, response) => {
    let newId = Math.floor(Math.random()*100)
    while(inUse('id', newId)) ++newId

    const body = request.body
    if(!body.name || !body.number) return response.status(400).json({ error: 'name or number missing'})
    if(inUse('name', body.name)) return response.status(400).json( { error: 'Name in use'})

    let newEntry = new Entry(newId, body.name, body.number)
    phonebook.push(newEntry)
    return response.status(200).json(newEntry)
})

app.listen(process.env.PORT || PORT)