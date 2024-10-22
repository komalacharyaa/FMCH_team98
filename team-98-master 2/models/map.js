const Sequelize = require('sequelize');

const sequelize = require('../database');

const Map = sequelize.define('map', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : true,
        primaryKey : true
    },
    session_id: Sequelize.INTEGER,
    problem_id: Sequelize.INTEGER,
    medicine_id: Sequelize.INTEGER,
    advice_id: Sequelize.INTEGER
});

module.exports = Map;
