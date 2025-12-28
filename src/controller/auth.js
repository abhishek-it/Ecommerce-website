const User = require('../models/user');

exports.signup = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }

        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json({
            message: 'User created successfully',
           
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
