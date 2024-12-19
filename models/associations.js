const User = require("./user.js");
const Task = require("./task.js");
const Comment = require("./comment.js");

User.hasMany(Task);
Task.belongsTo(User);
Task.hasMany(Comment);
Comment.belongsTo(Task);
User.hasMany(Comment);

module.exports = {
    User,
    Task,
    Comment
};