const sequelize = require('sequelize')

const User = sequelize.define('user', {
  googleId: sequelize.TEXT
})