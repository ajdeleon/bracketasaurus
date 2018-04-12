const sequelize = require('./db')

const Bracket = sequelize.import(__dirname + "/Bracket")
const BracketCompetitor = sequelize.import(__dirname + "/BracketCompetitor")
const Competitor = sequelize.import(__dirname + "/Competitor")
const Match = sequelize.import(__dirname + "/Match")
const Note = sequelize.import(__dirname + "/Note")
const User = sequelize.import(__dirname + "/Bracket")


//Define createdBy foreign key on brackets table
Bracket.belongsTo(User, { foreignKey: "createdBy" })
User.hasMany(Bracket, { foreignKey: "createdBy" })

//Define winner foreign key on brackets table
Bracket.belongsTo(Competitor, { foreignKey: "winner" })
Competitor.hasMany(Bracket, { foreignKey: "winner" })

//Define many-to-many relationship between brackets and competitors through bracket_competitor
BracketCompetitor.belongsTo(Bracket)
BracketCompetitor.belongsTo(Competitor)
Bracket.hasMany(BracketCompetitor)
Competitor.hasMany(BracketCompetitor)

//Define foreign keys for matches table
Match.belongsTo(Competitor, { foreignKey: "competitor1" })
Competitor.hasMany(Match, { foreignKey: "competitor1" })
Match.belongsTo(Competitor, { foreignKey: "competitor2" })
Competitor.hasMany(Match, { foreignKey: "competitor2" })
Match.belongsTo(Competitor, { foreignKey: "winner" })
Competitor.hasMany(Match, { foreignKey: "winner" })

//Define foreign keys for notes table
Note.belongsTo(Competitor)
Competitor.hasMany(Note)
Note.belongsTo(Match)
Match.hasMany(Note)

module.exports = {
    Bracket,
    Competitor,
    Match,
    Note,
    sequelize,
    User,
}