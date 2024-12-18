// Import node_modules
const dotenv = require("dotenv");
dotenv.config();
const sequelize = require("./config/sequelize");
const express = require("express");
const app = express();
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
const changeStatusRoute = require("./routes/changeStatusRoute");
const addTagRoute = require("./routes/addTagRoute");



// END POINTS
app.use("/register", registerRoute);
app.use("/login", authUser, loginRoute);
app.use("/createAdmin/:id", checkAdmin, registerRoute);
app.use("/users", getAllUsersRoute);
app.use("/tasks", getAllTasksRoute);
app.use("/create-task/:id", createTaskRoute);
app.use("/update-status/:id", changeStatusRoute);
app.use("/add-tag", addTagRoute);


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