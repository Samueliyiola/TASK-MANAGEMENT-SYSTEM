const express = require("express");
const registrationSchema = require("../validation/schemas.js");
const {User, Task} = require("../models/associations.js");
const bcrypt = require("bcrypt");
// const router = express.Router();


const registerAdminController =  async(req, res) =>{
    const { name, email, password, isAdmin} = req.body;
    try{  
        const exists = await User.findOne({where : {email}});
        if(exists){
            return res.json({Message : "User with this email already exists."});
        }
        const confirmUser = {name, email, password, isAdmin};
        const validateUser = await registrationSchema.validateAsync(confirmUser);
        if(validateUser.error){
            return res.status(403).json({Message : "Please fill in your details properly and try again!"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {name, email, password : hashedPassword, isAdmin};
        await User.create(newUser);
        return res.status(201).json({Message : "User created successfully"})
    }
    catch(error){
        return res.json({Message : "An error occured while trying to register please try again.", error});
    }
};

module.exports = registerAdminController;