const Sequelize = require('sequelize')
const keys = require('../config/local')

const sequelize = new Sequelize(keys.dbname, keys.dbuser, keys.dbpassword, {
    dialect: 'mysql',
    host: "localhost",
    port: keys.port,
    operatorsAliases: false,
})

module.exports = sequelize
