
const bcrypt = require("bcrypt");
const {User, Task} = require("../models/associations");
const authUser = async(req, res, next) =>{
    const {email, password} = req.body;
    const user = await User.findOne({where : {email}});
    if(!user){
        return res.status(404).json({Message : "Invalid email or password."});
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if(!comparePassword){
        return res.status(404).json({Message : "Invalid email or password."});
    }
    next();
};

module.exports = authUser;

