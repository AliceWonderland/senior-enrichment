'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('instructor', {
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{isEmail:true}
    },
    image:{
        type: Sequelize.STRING,
        allowNull: false
    },
    campusId:{
        type: Sequelize.STRING,
        allowNull: false
    }
});