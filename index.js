const express = require('express')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const Sequelize = require('sequelize')
require('./services/passport')

const sequelize = new Sequelize(keys.dbname, keys.dbuser, keys.dbpassword, {
  dialect: 'mysql',
  host: keys.endpoint,
  port: keys.port,
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Express server running on port 3000'))