const Sequelize = require('sequelize')
const keys = require('../config/keys')


const sequelize = new Sequelize(keys.dbname, keys.dbuser, keys.dbpassword, {
    dialect: 'mysql',
    host: "localhost",
    port: 8889,
    operatorsAliases: false,
})

module.exports = sequelize