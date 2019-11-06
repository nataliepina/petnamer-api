const { Petname } = require('./models')

// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'vqllxvbqggyyfp',
//   host: 'ec2-174-129-227-128.compute-1.amazonaws.com',
//   database: 'd8gaff0deihau9',
//   password: '4afc771dc58775cf72cd9e079bb781a273e2c6e52c07d8abc2a4dc96c7afe29f',
//   port: 5432,
//   ssl: true
// })
// postgres://vqllxvbqggyyfp:4afc771dc58775cf72cd9e079bb781a273e2c6e52c07d8abc2a4dc96c7afe29f@ec2-174-129-227-128.compute-1.amazonaws.com:5432/d8gaff0deihau9

const getNames = (request, response) => {
  Petname.findAll()
  .then(petnames => {
    response.json(petnames)
  })
  .catch(err => {
    response.statusCode = 500
    response.json(err)
  })
}

const getNameById = (request, response) => {
  const id = request.params.id
  Petname.find({
    where: { id }
  })
    .then(petname => {
      response.json(petname)
    })
    .catch(err => {
      response.statusCode = 500
      response.json(err)
    }
  )
}

const createName = (request, response) => {
  const data = request.body

  Petname.create(data)
    .then(name => {
      response.name = 200
      response.json(name)
    })
    .catch(err => {
      response.statusCode = 500
      respsonse.json(err)
    }
  )
}

const updateName = (request, response) => {
  const id = parseInt(request.params.id)
  const { name } = request.body

  Petname.destroy({
    where: { id }
  })
    .then(deletedNameId => {
      response.json(deletedNameId)
    })
    .catch(err => {
      response.statusCode = 500
      response.json(err)
    }
  )
}

const deleteName = (request, response) => {
  const id = parseInt(request.params.id)

  Petname.destroy({
    where: { id }
  })
    .then(deletedNameId => {
      response.json(deletedNameId)
    })
    .catch(err => {
      response.statusCode = 500
      response.json(err)
    }
  )
}

module.exports = {
  getNames,
  getNameById,
  createName,
  updateName,
  deleteName,
}
