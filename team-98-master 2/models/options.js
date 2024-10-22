const Sequelize = require('sequelize');

const sequelize = require('../database');

const Option = sequelize.define('option', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : true,
        primaryKey : true
    },
    value: Sequelize.STRING
});

module.exports = Option;
