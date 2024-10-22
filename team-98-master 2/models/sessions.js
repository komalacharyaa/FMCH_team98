const Sequelize = require('sequelize');

const sequelize = require('../database');

const Sessions = sequelize.define('sessions', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : true,
        primaryKey : true
    },
    // aww_id: {
    //     type: Sequelize.INTEGER
    // },
    ben_id: Sequelize.INTEGER,
    trimester: Sequelize.INTEGER,
    age: Sequelize.INTEGER,
    problem_id: Sequelize.INTEGER,
    advice: Sequelize.STRING,
    medicine: Sequelize.STRING,
    Session_Date: Sequelize.DATE,
    Session_start: Sequelize.TIME,
    Session_end: Sequelize.TIME
});

module.exports = Sessions;
