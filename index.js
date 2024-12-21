// Import node_modules
const dotenv = require("dotenv");
dotenv.config();
const sequelize = require("./config/sequelize");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());


// Import custom middlewares
const checkAdmin = require("./middlewares/checkAdmin.js");
const authUser = require("./middlewares/authUser");


// Import the routes
const registerRoute = require("./routes/registerRoute.js");
const loginRoute = require("./routes/loginRoute.js");
const getAllUsersRoute = require("./routes/getAllUsersRoute.js");
const getAllTasksRoute = require("./routes/getAllTasksRoute.js");
const createTaskRoute = require("./routes/createTaskRoute");
const addTagRoute = require("./routes/addTagRoute");
const filterTask = require("./routes/filterTaskRoute");
const changeStatus = require("./routes/changeStatus");
const addComment = require("./routes/addCommentRoute");
const editComment = require("./routes/editCommentRoute");
const deleteComment = require("./routes/deleteCommentRoute");

// END POINTS
app.use("/register", registerRoute);
app.use("/login", authUser, loginRoute);
app.use("/createAdmin/:id", checkAdmin, registerRoute);
app.use("/users", getAllUsersRoute);
app.use("/tasks", getAllTasksRoute);
app.use("/create-task", createTaskRoute);
app.use("/update-status", changeStatus);
app.use("/add-tag", addTagRoute);
app.use("/filter-task", filterTask);
app.use("/add-comment", addComment);
app.use("/edit-comment", editComment);
app.use("/delete-comment", deleteComment);




// Configure the server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    try{
        // Connect to database
        sequelize.sync();
        console.log(`The server is running on port ${PORT}`);
    }
    catch(error){
        console.log("An error occured while trying to connect to the database " + error);
    }

}); 