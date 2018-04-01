const sequelize = require('/DBConnect.js');

const Bracket = sequelize.define('bracket', {
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
  size: {
    type: sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: "Bracket size must be an integer."
      },
      isDivisibleByFour(value) {
        if (parseInt(value) % 4 !== 0) {
          throw new Error("Your bracket size must be divisible by 4.");
        }
      }
    }
  },
  description: sequelize.TEXT
})
