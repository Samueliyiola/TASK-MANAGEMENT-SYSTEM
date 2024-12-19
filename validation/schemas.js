const Joi = require("joi");

const registrationSchema = Joi.object({ 
    name : Joi.string()
        .required(),
    email : Joi.string()
        .email({minDomainSegments : 2}),
    password : Joi.string()
        .required(),
    isAdmin : Joi.boolean().default(false)
});

const taskSchema = Joi.object({
    title : Joi.string()
        .required(),
    description : Joi.string()
        .required(),
    dueDate : Joi.date()
        .required(),
    status : Joi.string()
        .valid("To-Do", "In Progress", "Completed")
        .required(),
    tag : Joi.string(),
    UserId : Joi.number()
});

module.exports = {registrationSchema, taskSchema};
