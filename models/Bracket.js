module.exports = (sequelize, DataTypes) => {
  return sequelize.define('bracket', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER,
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
    description: DataTypes.TEXT,
    //createdBy,
    //winner
  })
}
