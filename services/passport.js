const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const Sequelize = require('sequelize')
const keys = require('../config/keys')

const User = sequelize.define('user', {
  id: Sequelize.TEXT
})

passport.serializeUser((user, done)=> {
  done(null, user.id)
})

passport.deserializeUser(googleID, done => {
 User.findById(id) 
    .then(user => {
      done(null, user)
    })
})

passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile.id)  
    }
  )
)
