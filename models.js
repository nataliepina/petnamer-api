const { Sequelize, Model, DataTypes } = require('sequelize')
const ENV = require('dotenv').config()
const sequelize = new Sequelize('postgresql://vqllxvbqggyyfp:4afc771dc58775cf72cd9e079bb781a273e2c6e52c07d8abc2a4dc96c7afe29f@ec2-174-129-227-128.compute-1.amazonaws.com/d8gaff0deihau9?ssl=true')

// const sequelize = new Sequelize('d8gaff0deihau9', 'vqllxvbqggyyfp', '4afc771dc58775cf72cd9e079bb781a273e2c6e52c07d8abc2a4dc96c7afe29f', {
//   host: 'ec2-174-129-227-128.compute-1.amazonaws.com',
//   port: 5432,
//   dialect: 'postgres',
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })

// const sequelize = new Sequelize(
//   process.env.DB,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     dialect: 'postgres',
//   }
// )


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
