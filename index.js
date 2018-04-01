const express = require('express')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const Sequelize = require('sequelize')
require('./services/passport')

const sequelize = new Sequelize(keys.dbname, keys.dbuser, keys.dbpassword, {
  dialect: 'mysql',
  host: "127.0.0.1",
  port: 3306,
  operatorsAliases: false,
})

const User = sequelize.define('user', {
  googleId: Sequelize.TEXT
})

sequelize.sync()
.then(() => {
  User.create({
    googleId: 'fjkldffsasdfjklghjkghjdhfgj'
  })
})
const app = express()

// sequelize
// .authenticate()
// .then(() => {
//   console.log('Connection has been established successfully.');
// })
// .catch(err => {
//   console.error('Unable to connect to the database:', err);
// });

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Express server running on port 3000'))