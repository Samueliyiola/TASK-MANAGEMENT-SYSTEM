// const { where } = require("sequelize");
const{User, Task, Comment} = require("../models/associations");

const editComment = async (req, res) => {
    try {
        // const id = req.params.id;
        const {description, commentId, UserId} = req.body;
        const comment = await Comment.findOne({where : {id : commentId}});
        if(!comment){
            return res.status(404).json({Message : `Comment with ID ${commentId} does not exist`});
        }
        // if(!id){
        //     console.log("Id issue");
        // }
        const user = await User.findOne({where : {id : UserId}});
        // console.log(user.isAdmin);
        // const task = await Task.findByPk(comment.TaskId);
        if(user.isAdmin || (UserId == comment.UserId)){
            await Comment.destroy({where :{id: commentId}});
            return res.status(200).json({Message : "Comment deleted Successfully!"});
        }
        return res.status(404).json({Message : "You cannot delete a comment that is not yours because you are not an admin."});

    }


        // const {id} = req.params;
        
//         const {description, commentId} = req.body;
//         const UserId = req.params.id;
//         const user = await User.findByPk(UserId);
//         const comment = await Comment.findOne({where : {id : commentId}});
//         if(!comment){
//             return res.status(404).json({Message : `Comment with ID ${commentId} does not exist`});
//         }
//         if(((UserId == comment.UserId) || user.isAdmin)){
//             await Comment.update({description}, {where : {id : commentId}});
//             return res.status(200).json({Message : "Comment updated successfully,"});
//         }
//         return res.status(404).json({Message : "You are not an admin so you cannot update a comment."}); 
//    } 
    catch (error) {
                console.log(error);
                res.status(404).json({Message : "An error occured"})
   }
};


module.exports = editComment;