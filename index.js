const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./services/passport')

//All models requires from relations file
const relations = require('./models/relations')
const sequelize = relations.sequelize
const Bracket = relations.Bracket
const Competitor = relations.Competitor
const Match = relations.Match
const User = relations.Bracket



sequelize.sync({force: true})
.then(() => {
  })

const app = express()

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Express server running on port 3000'))