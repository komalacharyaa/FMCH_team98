const Sequelize = require('sequelize');

const sequelize = require('../database');

const Aww = sequelize.define('aww', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : true,
        primaryKey : true
    },
    name : Sequelize.STRING,
    password : Sequelize.STRING
});

module.exports = Aww;
