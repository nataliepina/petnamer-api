const { Sequelize, Model, DataTypes } = require('sequelize')
const ENV = require('dotenv').config()
const sequelize = new Sequelize(process.env.API_KEY)


// class Petname extends Model {}
// Petname.init({
//   name: DataTypes.STRING,
// }, { sequelize, modelName: 'petnames' })

// sequelize.sync()
//   .then(() => Petname.create({
//     name: 'snowball',
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });


const Petname = sequelize.define("petname", {
  name: Sequelize.STRING
})

module.exports = {
  Petname
}
