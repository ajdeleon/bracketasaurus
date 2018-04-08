const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./services/passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const Sequelize = require('sequelize')
//require('./services/passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

//All models requires from relations file
const relations = require('./models/relations')
const sequelize = relations.sequelize
const Bracket = relations.Bracket
const Competitor = relations.Competitor
const Match = relations.Match
const User = relations.Bracket

const app = express()


sequelize.sync({force: true})
.then(() => {
  })
// sequelize.sync()
// .then(() => {
//   User.create({
//     googleId: 'fjkldffsasdfjklghjkghjdhfgj'
//   })
// })

const app = express()
// require('./routes/authRoutes')(app)
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
}, (accessToken) => {
  console.log(accessToken)
}
))

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
app.get('/auth/google/callback', passport.authenticate('google'))

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
