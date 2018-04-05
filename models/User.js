module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    googleId: DataTypes.TEXT
  })
}