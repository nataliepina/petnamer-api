const { Petname } = require('./models')
const { Sequelize, Model, DataTypes } = require('sequelize')

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

const updateRating = (request, response) => {
  const id = request.params.id

  Petname.findByPk(id).then(petname => {
    return petname.increment('upvotes', {by: 1})
  })
    .then(petname => {
      response.statusCode = 200
      response.json(petname)
    }
  )
}

const getNameById = (request, response) => {
  const id = request.params.id
  Petname.findAll({
    where: { id }
  })
    .then(name => {
      response.json(name)
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
  deleteName,
  updateRating
}
