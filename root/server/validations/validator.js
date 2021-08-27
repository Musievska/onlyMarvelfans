const Joi = require('joi');

const newUserValidation = (user) => {
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(6)
            .max(50)
            .required()
            .unique(),
        password: Joi.string()
            .required()
            .min(8)
            .max(50),
        repeated_password: Joi.string().required().valid(Joi.ref('password')),
        email: Joi.string().email()
    });
    return schema.validate(user);
};

module.exports = newUserValidation;

