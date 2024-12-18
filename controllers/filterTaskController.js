
const {User, Task} = require("../models/associations");

const filterTask = async(req, res) =>{
    try {
        const {tag} = req.params;
        if(!tag) return res.status(404).json({Message : "Please input a tag"});
        const filteredTask = await Task.findAll({where : {tag}});
        return res.status(201).json({Message : `Tasks with tag '${tag}' retrieved successfully`, filteredTask});
    } catch (error) {
        res.status(404).json({Message : "An error occured while try to filtered tags"});
    }
}


module.exports = filterTask;