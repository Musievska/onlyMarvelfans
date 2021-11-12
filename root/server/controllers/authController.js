const validation = require('../helper/validator');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRegister = async (req, res) => {
    const { error } = await validation.newUserValidation(req.body);
    if (error) {
        console.log(error.details[0].message);
        return res.json({
            status: 404,
            message: error.details[0].message
        });
    }

    const { name, email, password, confirmed_password } = req.body;

    if (password != confirmed_password) {
        return res.json({
            status: 404,
            message: `Passwords do not match`
        });
    }

    User.findOne({ email: email }, async (err, user) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        if (user) {
            return res.json({
                status: 404,
                message: `email is already registered`
            });
        } else {
            try {
                const salt = await bcrypt.genSalt(10);
                hashPassword = await bcrypt.hashPassword(password, salt);
                console.log(hashPassword);
                const user = await User.create({
                    username: username,
                    email: email,
                    password: hashPassword
                });

                var token = jwt.sign({
                    id: user._id,
                    email: user.email,
                    username: user.username,
                },
                    process.env.JWT_KEY,
                    { expires: '2h' });
                
                res.status(200).json({
                    token,
                    data: {
                        user_detail: {
                            id: user._id,
                            username: user.username,
                            email: user.email
                        }
                    }
                });

            } catch (err) {
                res.status(404).send(err);
            }
        }
    });
}

const userLogin = async (req, res) => {
    try {
        const { error } = await validation.userLoginValidation(req.body);

        if (error) {
            console.log(error.details[0].message);
            return res.json({
                status: 404,
                message: error.details[0].message
            });
        }

        const user = await User.findOne
            ({
                email: req.body.email
            })
            .populate('favoriteComics')
            .populate('favoriteStories')
            .populate('favoriteCharacters')
            .populate('favoriteEvents')
            .populate('favoriteSeries')
            .exec();
        
        if (!user) {
            return res.json({
                status: 404,
                message: `Emails does not exist`
            });
        }
        
        const isValidPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isValidPassword) {
            console.log(`Wrong password`);
            return res.json({
                status: 404,
                message: `Invalid password`
            });
        }

        var token = jwt.sign({
            id: user.id,
            email: user.email,
            username: user.username
        },
            proces.env.JWT_KEY,
            { expires: '2h' }
        );

        res.status(200).json({
            token,
            data: {
                user_detail: {
                    id: user.id,
                    email: user.email,
                    username: user.username
                },
                favoriteCharacters: user.favoriteCharacters,
                favoriteComics: user.favoriteComics,
                favoriteSeries: user.favoriteSeries,
                favoriteEvents: user.favoriteEvents,
                favoriteStories: user.favoriteStories
            }
        });
    } catch (err) {
        console.log(`Error: ${err}`);
    }
};

//const userLogout 

module.exports = {
    userRegister,
    userLogin,
   // userLogout
}