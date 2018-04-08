const express = require('express')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const Sequelize = require('sequelize')
//require('./services/passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const sequelize = new Sequelize(keys.dbname, keys.dbuser, keys.dbpassword, {
  dialect: 'mysql',
  host: "127.0.0.1",
  port: 3306,
  operatorsAliases: false,
})

const User = sequelize.define('user', {
  googleId: Sequelize.TEXT
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
