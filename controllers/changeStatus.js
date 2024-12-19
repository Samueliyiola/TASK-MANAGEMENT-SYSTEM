const {User, Task, Comment} = require("../models/associations");

const changeStatus = async(req, res) =>{
    try {
        // const {status} = req.body;
        // const id = req.params.id;
        // if(!id){
        //     return res.status(404).json({Message : "Task Id is required"});
        // }
        // if(!status){
        //     return res.status(404).json({Message: "Please input a status"});
        // }
        // const task = await Task.findByPk(id);
        // if(!task){
        //     return res.status(404).json({Message: "Invalid Task ID", task});
        // }
        // await Task.update({status}, {where : {id}});
        // return res.status(200).json({Message: "Task updated successfully"});
        const {status, TaskId, UserId} = req.body;
        const {id} = req.params;
        const task = await Task.findOne({where : {id : TaskId}});
        // const task = await Task.findByPk(TaskId);
        console.log(req.params);

        // console.log(task);
        if(!UserId){       
            if(!task) return res.status(404).json({Message : `Task with ID '${TaskId}' does not exist!`});
            if(parseInt(task.UserId) != parseInt(id)){ 
                const user = await User.findOne({where : {id : UserId}});
                if(!user.isAdmin) return res.status(403).json({Message : "You are not authorized to update someone else's task status."});
                // return res.status(403).json({Message : "You cannot update someone else's task because you're not an admin."});
                await Task.update({status}, {where : {id : TaskId}});
                return res.status(200).json({Message : "Task status has been updated successfully."});
            }
            await Task.update({status}, {where : {id : TaskId}});
            return res.status(200).json({Message : "Task status has been updated successfully."});
        }
        if(UserId != id){
            const user = await User.findOne({where : {id : UserId}});
            if(!user.isAdmin) return res.status(403).json({Message : "You are not authorized to update someone else's task status."});
            await Task.update({status}, {where : {UserId}});
            res.status(200).json({Message : "Task's status updated successfully"});
        }
        
    } catch (error) {
        console.log(error);
        return res.status(404).json({Message: "An Error occurred while updating, please try again!"});
    }
};


module.exports = changeStatus;