const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const express = require('express')
const passport = require('passport')
require('./services/passport')
const keys = require('./config/keys')

//All models requires from relations file
const relations = require('./models/relations')
const sequelize = relations.sequelize
const Bracket = relations.Bracket
const Competitor = relations.Competitor
const Match = relations.Match
const User = relations.Bracket

const app = express()

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

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
