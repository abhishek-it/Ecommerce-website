const jwt = require('jsonwebtoken');
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
exports.signin = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Something went wrong while signing in"
      });
    }

    if (user.authenticate(req.body.password)) {
      const token = jwt.sign(
        { _id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      const { _id, firstName, lastName, role, fullName } = user;

      return res.status(200).json({
        token,
        user: { _id, firstName, lastName, email, role, fullName }
      });
    }

    
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong while signing in"
    });
  }
};

exports.requireSignin = (req, res, next) => {
  try {
    // Check if Authorization header exists
    if (!req.headers.authorization) {
      return res.status(401).json({
        error: "Authorization header missing"
      });
    }

    // Format: "Bearer <token>"
    const token = req.headers.authorization.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to request
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      error: "Invalid or expired token"
    });
  }
};