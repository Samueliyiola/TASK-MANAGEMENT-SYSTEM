const {User, Task} = require("../models/associations");

const getAllUsers = async (req, res) => {
    try {
        const Users = await User.findAll();
        return res.status(200).json({Message : "Users retrieved successfully!", Users });     
    } catch (error) {
        return res.status(404).json({Message : "An Error has occured."});
    }
   
};


module.exports = getAllUsers;