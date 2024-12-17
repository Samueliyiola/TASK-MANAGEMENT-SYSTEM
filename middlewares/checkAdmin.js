const{User, Task} = require("../models/associations");

const checkAdmin = async(req, res, next) =>{
    const id = req.params.id;
    const user = await User.findOne({where : {id}});
    const admin = user.isAdmin
    if(!admin){
        return res.status(403).json({Message : "You're not an Admin, you cannot create a new Admin"});
    }
    next()
};

module.exports = checkAdmin;