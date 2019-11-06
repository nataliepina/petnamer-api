const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const greetings = require('greetings')
const nouns = require('fun-word-list/lists/nouns')
const adjectives = require('fun-word-list/lists/adjectives')
const db = require('./queries')

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// PORT
const port = process.env.PORT || 9000
app.listen(port, () => console.log(`Listening on port ${port}...`))


// DATABASE
app.get('/petnames', db.getNames)
app.get('/petnames/:id', db.getNameById)
app.post('/petnames', db.createName)
app.put('/petnames/:id', db.updateName)
app.delete('/petnames/:id', db.deleteName)

// Randomize api data
const randomize = (max) => {
  return Math.floor((Math.random() * max) + 1)
}
const randomizeOther = (max) => {
  return Math.floor((Math.random() * max) + 1)
}

// Test route
app.get('/', (req, res) => {
  res.send({ info: 'Node.js, Express, and Postgres API...' })
})

// Route for greetings
app.get('/api/greetings', (req,res) => {
  res.send({greeting: greetings()})
})

// Route for local pet names
app.get('/petnames', (req, res) => {
  res.send(petnames)
})

// Routes for randomized names
app.get('/api/words', (req, res) => {
  let randomNum = randomize(nouns.length)
  let otherRandomNum = randomizeOther(adjectives.length)
  res.send({name: `${adjectives[otherRandomNum]} ${nouns[randomNum ][0]} `})
})
