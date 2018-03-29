const express = require('express')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const Sequelize = require('sequelize')
require('./services/passport')

const sequelize = new Sequelize('test', 'aj', 'password', {
  dialect: 'mysql'
})

const User = sequelize.define('user', {
  googleId: Sequelize.TEXT
})

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Express server running on port 3000'))