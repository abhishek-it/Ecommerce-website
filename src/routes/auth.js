const jwt = require("jsonwebtoken");
const User = require("../models/user");

/**
 * SIGNUP
 */
exports.signup = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = new User(req.body);
    await user.save();

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

/**
 * SIGNIN
 */
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        message: "Email or password is incorrect",
      });
    }

    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const { _id, firstName, lastName, role, fullName } = user;

    return res.status(200).json({
      token,
      user: { _id, firstName, lastName, email, role, fullName },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while signing in",
    });
  }
};

/**
 * REQUIRE SIGNIN (JWT Middleware)
 */
exports.requireSignin = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({
        error: "Authorization header missing",
      });
    }

    // Authorization: Bearer <token>
    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Invalid or expired token",
    });
  }
};
