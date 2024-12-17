const {User, Task} = require("../models/associations.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const router = express.Router();


const loginController =  async(req, res) =>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({where : {email}});
        if(!user){
            return res.status(404).json({Message : "Invalid email or password."});
        }
        const comparePassword = bcrypt.compare(password, user.password);
        if(!comparePassword){
            return res.status(404).json({Message : "Invalid email or password."});
        }
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