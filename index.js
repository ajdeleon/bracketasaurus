const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const express = require('express')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require('passport')
//require('./services/passport')
const sequelize = require('sequelize')
const keys = require('./config/keys')

//All models requires from relations file
// const relations = require('./models/relations')
// const sequelize = relations.sequelize
// const Bracket = relations.Bracket
// const Competitor = relations.Competitor
// const Match = relations.Match
// const User = relations.Bracket

const app = express()

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})

// sequelize.sync({force: true})
// .then(() => {
//   })
// sequelize.sync()
// .then(() => {
//   User.create({
//     googleId: 'fjkldffsasdfjklghjkghjdhfgj'
//   })
// })

// require('./routes/authRoutes')(app)

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    console.log('access', accessToken)
    console.log('refresh token', refreshToken)
    console.log('profile', profile)

    const existingUser = await User.findOne({ where: { googleId: profile.id } })

    if (existingUser) {
      return done(null, existingUser)
    }

    const user = await User.create({ googleId: profile.id })
    done(null, user)
  })
)

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
app.get('/auth/google/callback', passport.authenticate('google'))
app.get('/api/current_user', (req, res) => {
  res.send(req.user)
})
app.get('/api/logout', (req, res) => {
  req.logout()
  res.send(req.user)
})

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
