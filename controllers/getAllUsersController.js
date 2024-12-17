const {User, Task} = require("../models/associations");

const getAllUsers = async (req, res) => {
    const Users = await User.findAll();
    res.status(200).json({Message : "Users retrieved successfully!", Users });
};


module.exports = getAllUsers;