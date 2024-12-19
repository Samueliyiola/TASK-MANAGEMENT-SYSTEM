const {User, Task, Comment} = require("../models/associations");

const addComment = async (req, res) => {
    try {
        const {description, TaskId} = req.body;
        const UserId = req.params.id;
        const task = await Task.findByPk(TaskId) ;
        if(!task){
            return res.status(404).json({Message : `Task with ID ${TaskId} does not exist.`});
        }
        const comment = {description, TaskId, UserId};
        await Comment.create(comment);
        return res.status(200).json({Message : "Comment created successfully!"});
    } catch (error) {
        console.log(error);
        return res.status(404).json({Message : "An error occured!", error});
    }
}

module.exports = addComment