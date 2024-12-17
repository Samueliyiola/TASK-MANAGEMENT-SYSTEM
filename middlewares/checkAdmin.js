const User = require("../models/user");

const checkAdmin = async() =>{
    const {id} = req.params.id;
    const user = User.findOne({where : {id}});
    const isAdmin = user.isAdmin;
    if(!isAdmin){
        return res.status(403).json("You're not an Admin, you cannot create a new Admin");
    }
    next()
};

module.exports = checkAdmin;