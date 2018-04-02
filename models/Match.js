const Match = sequelize.define('match', {
  round: Sequelize.INTEGER
})

module.exports = {
  Match
}