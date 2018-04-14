const passport = require('passport')

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
  
  app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/api/current_user'
  }))

  app.get('/api/current_user', (req, res) => {
    res.send('User id: ' + req.user.id + ' is now logged in!')
  })

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.send(req.user)
  })

}
