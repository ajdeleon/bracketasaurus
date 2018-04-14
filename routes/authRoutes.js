const passport = require('passport')

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

  app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/api/current_user'
  }))

  app.get('/api/current_user', (req, res) => {
    if (req.user) {
      res.send('User id: ' + req.user.id + ' is now logged in!')
    } else {
      res.send('No user is currently signed in.')
    }
  })

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.send(req.user + 'Successfully logged out.')
  })

}
