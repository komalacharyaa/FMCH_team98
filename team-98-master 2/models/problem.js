const Sequelize = require('sequelize');

const sequelize = require('../database');

const problem = sequelize.define('problem', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : true,
        primaryKey : true
    },
    statement: Sequelize.STRING
});

module.exports = problem;
