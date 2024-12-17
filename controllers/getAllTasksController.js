const {User, Task} = require("../models/associations");

const getAllTasks = async (req, res) =>{
    try {
        const tasks = await Task.findAll();
        return res.status(201).json({Message : "Tasks retrieved successfully", tasks});     
    } catch (error) {
        console.log(error);
        return res.status(404).json({Message : "An error has occured, please try again!"});
    }  
}


module.exports = getAllTasks;