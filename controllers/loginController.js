const {User, Task} = require("../models/associations.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const router = express.Router();


const loginController =  async(req, res) =>{
    try {
        const accessToken = jwt.sign({name : user.name, email: user.email}, process.env.JWT_SECRET);
        console.log(accessToken);
        return res.status(201).json({Message : "Login was successful!."})
    } 
    catch (error) {
        console.log(error);
        return res.json({Message : "An error has occured, please try again"});     
    }

};

module.exports = loginController;