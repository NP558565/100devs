const express = require('express')
const app = express()
//necessary for testing server on local machine, with local test websites
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
  '21 savage': {
    age: 28,
    birthName: 'Sheyaa Bin Abrahaman-Hoseph',
    birthLocation: 'London, England'
  },
  'chance the rapper': {
    age: 27,
    birthName: 'Chancelor Jonathon Bennett',
    birthLocation: 'Chicago, Illinois'
  },
  'unknown': {
    age: 'unknown',
    birthName: 'unknown',
    birthLocation: 'unknown'
  }
}


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (req, res) => {
  const rapName = req.params.rapperName.toLowerCase()

  if(rappers[rapName]) res.json(rappers[rapName])
  else res.json(rappers['unknown'])
})

app.listen(process.env.PORT || PORT, () => console.log(`Server  running on port: ${PORT}`))
