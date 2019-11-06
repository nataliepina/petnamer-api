const Pool = require('pg').Pool
const pool = new Pool({
  user: 'vqllxvbqggyyfp',
  host: 'ec2-174-129-227-128.compute-1.amazonaws.com',
  database: 'd8gaff0deihau9',
  password: '4afc771dc58775cf72cd9e079bb781a273e2c6e52c07d8abc2a4dc96c7afe29f',
  port: 5432,
  ssl: true
})
// postgres://vqllxvbqggyyfp:4afc771dc58775cf72cd9e079bb781a273e2c6e52c07d8abc2a4dc96c7afe29f@ec2-174-129-227-128.compute-1.amazonaws.com:5432/d8gaff0deihau9

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
    'UPDATE petnames SET name = $1 WHERE id = $2',
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

  pool.query('DELETE FROM petnames WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Name deleted with ID: ${id}`)
  })
}


module.exports = {
  getNames,
  getNameById,
  createName,
  updateName,
  deleteName,
}
