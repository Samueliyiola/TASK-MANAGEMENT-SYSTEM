const {User, Task} = require("../models/associations");

const changeStatus = async(req, res) =>{
    try {
        const {status} = req.body;
        const id = req.params.id;
        if(!id){
            return res.status(404).json({Message : "Task Id is required"});
        }
        if(!status){
            return res.status(404).json({Message: "Please input a status"});
        }
        const task = await Task.findByPk(id);
        if(!task){
            return res.status(404).json({Message: "Invalid Task ID", task});
        }
        await Task.update({status}, {where : {id}});
        return res.status(200).json({Message: "Task updated successfully"});
    } catch (error) {
        console.log(error);
        return res.status(404).json({Message: "An Error occurred while updating, please try again!"});
    }
}


module.exports = changeStatus;