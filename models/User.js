const sequelize = require('/DBConnect.js');

const User = sequelize.define('user', {
  googleId: sequelize.TEXT
})
