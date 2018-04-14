const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const sequelize = require('../models/db')
const User = sequelize.import('../models/User')

passport.serializeUser((user, done)=> {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
   User.findById(id) 
    .then(user => {
      done(null, user)
     })
})

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

