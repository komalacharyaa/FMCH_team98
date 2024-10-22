const Sequelize = require('sequelize');

const sequelize = require('../database');

const ben = sequelize.define('ben', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : true,
        primaryKey : true
    },
    name : Sequelize.STRING,
    pregnant_since : Sequelize.DATE
});

module.exports = ben;
