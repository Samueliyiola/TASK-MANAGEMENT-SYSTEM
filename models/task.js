const {Sequelize, DataTypes} = require("sequelize");

const sequelize = require("../config/sequelize.js");

const Task = sequelize.define("Task", {
    id : {
        primaryKey : true,
        type : DataTypes.INTEGER,
        autoIncrement : true
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    dueDate : {
        type : DataTypes.DATE,
        allowNull : false,

    },
    status : {
        type : DataTypes.ENUM("To-Do", "In Progress", "Completed"),
        allowNull : false,
        
    },
    tag: {
        type: DataTypes.STRING,

    }
    // userId: {
    //     primaryKey : true,
    //     type : DataTypes.INTEGER,
    //     autoIncrement : true,
    //     references : {
    //         model : "User",
    //         key : "userId"
    //     },
    //     onUpdate : "CASCADE",
    //     onDelete : "SET NULL"
    // }
});

module.exports = Task;