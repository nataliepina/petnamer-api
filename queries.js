const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'petnames',
  password: 'password',
  port: 5432,
})

const getNames = (request, response) => {
  pool.query('SELECT * FROM petnames ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getNameById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM petnames WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createName = (request, response) => {
  const { name } = request.body

  pool.query('INSERT INTO petnames (name) VALUES ($1)', [name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Name added with ID: ${results.insertId}`)
  })
}

const updateName = (request, response) => {
  const id = parseInt(request.params.id)
  const { name } = request.body

  pool.query(
    'UPDATE users SET name = $1 WHERE id = $2',
    [name, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Name modified with ID: ${id}`)
    }
  )
}

const deleteName = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}


module.exports = {
  getNames,
  getNameById,
  createName,
  updateName,
  deleteName,
}
