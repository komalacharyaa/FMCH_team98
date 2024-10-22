const Sequelize = require('sequelize');

const sequelize = require('../database');

const answer = sequelize.define('answer', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : true,
        primaryKey : true
    },
    value: Sequelize.STRING
});

module.exports = answer;
