const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('postgres://vqllxvbqggyyfp:4afc771dc58775cf72cd9e079bb781a273e2c6e52c07d8abc2a4dc96c7afe29f@ec2-174-129-227-128.compute-1.amazonaws.com:5432/d8gaff0deihau9?ssl=true')

class Petname extends Model {}
Petname.init({
  name: DataTypes.STRING,
}, { sequelize, modelName: 'petnames' })

sequelize.sync()
  .then(() => Petname.create({
    name: 'snowball',
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });
