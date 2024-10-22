const Sequelize = require('sequelize');

const sequelize = require('../database');

const question = sequelize.define('question', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : true,
        primaryKey : true
    },
    question: Sequelize.STRING
});

module.exports = question;
