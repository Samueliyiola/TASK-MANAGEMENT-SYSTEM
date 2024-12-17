const {User, Task} = require("../models/associations");
const {registrationSchema, taskSchema} = require("../validation/schemas");

const createTask = async (req, res) =>{
    try {
        const {title, description, dueDate, status, tag, comment, UserId} = req.body;
        // Check if all required fields are set
        if(!title || !description || !dueDate || !status){
            return res.status(400).json({Message : "Please input all fields"});
        }
        // Check if the user is assigning the task to another user or himself
        if(!UserId){
            UserId = req.params.id;
        }
        // Validate Input
        const validatedInput =  taskSchema.validateAsync(req.body);
        if(validatedInput.error){
            return res.status(400).json({Message : "Please input all fields correctly"})
        }
        // Create task with the assigned user
        const newTask = {...validatedInput, UserId};
        await Task.create(newTask);
        return res.status(201).json({Message : "Task created successfully"});
    } catch (error) {
        console.log(error);
        return res.json({Message : "An error occured while trying to create task. Please try again."});
        
    }
}


module.exports = createTask