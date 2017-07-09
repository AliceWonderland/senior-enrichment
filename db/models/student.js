'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('student', {
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
        type: Sequelize.INTEGER,
        allowNull: false
    }
});



// INSERT INTO students VALUES (DEFAULT,'Alice','Chuang','alice@email.com','https://www.fillmurray.com/100/100',1,Now(),Now()),
//     (DEFAULT,'Erica','Chuang','erica@email.com','https://www.fillmurray.com/100/100',1,Now(),Now()),
//     (DEFAULT,'Monroe','Chuang','monroe@email.com','https://www.fillmurray.com/100/100',1,Now(),Now()),
//     (DEFAULT,'Blah','Lastname','blah@email.com','https://www.fillmurray.com/100/100',1,Now(),Now());

