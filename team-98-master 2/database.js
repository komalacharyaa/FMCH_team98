const Sequelize = require('sequelize');

const sequelize = new Sequelize('fmch', 'root', process.env.DATABASE_PASSWORD, {
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;