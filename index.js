const express = require('express')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const Sequelize = require('sequelize')
require('./services/passport')

const sequelize = new Sequelize(keys.dbname, keys.dbuser, keys.dbpassword, {
  dialect: 'mysql',
  host: "localhost",
  port: 8889,
  operatorsAliases: false,
})

const User = sequelize.define('user', {
  googleId: Sequelize.TEXT
})

const Bracket = sequelize.define('bracket', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  size: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: "Bracket size must be an integer."
      },
      isDivisibleByFour(value) {
        if (parseInt(value) % 4 !== 0) {
          throw new Error("Your bracket size must be divisible by 4.");
        }
      }
    }
  },
  description: Sequelize.TEXT,
  //createdBy,
  //winner
})

const Competitor = sequelize.define('competitor', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: Sequelize.TEXT,
  ranking: Sequelize.INTEGER
})

const Match = sequelize.define('match', {
  round: Sequelize.INTEGER
})

const BracketCompetitor = sequelize.define('bracket_competitor', {
  //bracketId,
  //competitorId,
})

//Define createdBy foreign key on brackets table
Bracket.belongsTo(User, { foreignKey: "createdBy" })
User.hasMany(Bracket, { foreignKey: "createdBy" })

//Define winner foreign key on brackets table
Bracket.belongsTo(Competitor, { foreignKey: "winner" })
Competitor.hasMany(Bracket, {foreignKey: "winner"})

//Define many-to-many relationship between brackets and competitors
BracketCompetitor.belongsTo(Bracket)
BracketCompetitor.belongsTo(Competitor)
Bracket.hasMany(BracketCompetitor)
Competitor.hasMany(BracketCompetitor)

//Define foreign keys for matches table
Match.belongsTo(Competitor, { foreignKey: "competitor1" })
Competitor.hasMany(Match, { foreignKey: "competitor1" })
Match.belongsTo(Competitor, { foreignKey: "competitor2" })
Competitor.hasMany(Match, { foreignKey: "competitor2" })
Match.belongsTo(Competitor, {foreignKey: "winner"})
Competitor.hasMany(Match, { foreignKey: "winner" })

sequelize.sync({force: true})
.then(() => {
  })

const app = express()

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