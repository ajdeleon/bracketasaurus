module.exports = (sequelize, DataTypes) => {
  return sequelize.define('competitor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    ranking: DataTypes.INTEGER
  })
}