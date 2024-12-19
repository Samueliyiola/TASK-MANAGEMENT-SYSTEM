const {Sequelize, DataTypes} = require("sequelize");

const sequelize = require("../config/sequelize.js");

const Comment = sequelize.define("Comment", {
    id : {
        primaryKey : true,
        type : DataTypes.INTEGER,
        autoIncrement : true
    },

    description: {
        type: DataTypes.TEXT,
    },
});

module.exports = Comment;