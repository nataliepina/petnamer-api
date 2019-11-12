const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize(`${process.env.DATABASE_URL}?ssl=true `)


class Petname extends Model {}
Petname.init({
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  upvotes: {
    type: Sequelize.INTEGER
  }
}, { sequelize, modelName: 'petnames' })

sequelize.sync({ force: process.env.NODE_ENV === 'development' })
  .then(() => Petname.create({
    name: 'snowball',
    upvotes: 0
  }))
  .then(jane => {
    console.log(jane.toJSON());
  })
  .catch(error => {
    console.log()
  })

module.exports = {
  Petname
}
