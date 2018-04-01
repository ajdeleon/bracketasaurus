const sequelize = require('/DBConnect.js');

const Bracket = sequelize.define('match', {
  round: sequelize.INTEGER
})
