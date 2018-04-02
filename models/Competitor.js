const Competitor = sequelize.define('competitor', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: Sequelize.TEXT,
  ranking: Sequelize.INTEGER
})