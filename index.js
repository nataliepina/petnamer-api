const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const petnames = [
  {id: 1, name: 'fluffy'},
  {id: 2, name: 'waffles'},
  {id: 3, name: 'snowball'},
]

// Defining routes
app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.get('/api/petnames', (req, res) => {
  res.send(petnames)
})

app.get('/api/petnames/:id', (req, res) => {
  const petname = petnames.find((n) => n.id === parseInt(req.params.id))
  if (!petname) res.status(404).send('Name Not Found')
  res.send(petname)
})

app.post('/api/petnames', (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    // 400 Bad Request
    res.status(400).send('Minimum of 3 characters required')
    return
  }
  const petname = {
    id: petnames.length + 1,
    name: req.body.name,
  }
  petnames.push(petname)
  res.send(petname)
})

// PORT
const port = process.env.PORT || 9000
app.listen(port, () => console.log(`Listening on port ${port}...`))
// Run `export PORT=9000` will set the port number can vary

