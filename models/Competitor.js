const sequelize = require('/DBConnect.js');

const Bracket = sequelize.define('competitor', {
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
  description: sequelize.TEXT,
  ranking: sequelize.INTEGER
})
