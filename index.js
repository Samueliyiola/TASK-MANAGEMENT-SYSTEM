// Import node_modules
const dotenv = require("dotenv");
dotenv.config();
const sequelize = require("./config/sequelize");
const express = require("express");
const app = express();
app.use(express.json());


// Import middlewares
const checkAdmin = require("./middlewares/checkAdmin.js");
const authUser = require("./middlewares/authUser");


// Import the routes
const registerRoute = require("./routes/registerRoute.js");
const loginRoute = require("./routes/loginRoute.js");
const getAllUsersRoute = require("./routes/getAllUsersRoute.js");
const getAllTasksRoute = require("./routes/getAllTasksRoute.js");
const createTaskRoute = require("./routes/createTaskRoute");

// END POINTS
app.use("/register", registerRoute);
app.use("/login", authUser, loginRoute);
app.use("/:id/createAdmin", checkAdmin, registerRoute);
app.use("/users", getAllUsersRoute);
app.use("/tasks", getAllTasksRoute);
app.use("/:id/create-task", createTaskRoute);



// Configure the server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    try{
        sequelize.sync();
        console.log(`The server is running on port ${PORT}`);
    }
    catch(error){
        console.log("An error occured while trying to connect to the database " + error);
    }

});