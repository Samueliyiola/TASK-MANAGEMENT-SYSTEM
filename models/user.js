const {Sequelize, DataTypes} = require("sequelize");

const sequelize = require("../config/sequelize.js");

const User = sequelize.define("User", {
    id : {
        primaryKey : true,
        type : DataTypes.INTEGER,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull : false,
        unique: true,
        validate : {
            isEmail : true
        }
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false,

    },
    isAdmin :  {
        type : DataTypes.BOOLEAN,
        defaultValue : false
    }

});
// User.associate = (models) =>{
//     User.hasMany(models.Task, {foreignKey : "userId"});
// }

module.exports = User;