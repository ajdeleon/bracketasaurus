module.exports = (sequelize, DataTypes) => {
    return sequelize.define('note', {
        pros: DataTypes.TEXT,
        cons: DataTypes.TEXT,
        //competitorId,
        //matchId
    })
}