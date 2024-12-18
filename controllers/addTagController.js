const {User, Task} = require("../models/associations");
const addTag = async(req, res) =>{
    const {tag} = req.body;
    const {id} = req.params;
    const task = await Task.findOne({where : {id}});
    if(!task){
        return res.status(404).json({Message : "Task not found"});
    }
    await task.update({tag});
    return res.status(200).json({Message : "Tag updated successfully"});
}

module.exports = addTag;	