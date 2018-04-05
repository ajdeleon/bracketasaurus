module.exports = (sequelize, DataTypes) => {
  return sequelize.define('match', {
    round: DataTypes.INTEGER,
    //winner
  })
}