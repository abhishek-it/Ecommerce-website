const {body, validationResult} = require('express-validator');
exports.validateSignUpRequest = [
    [
        body('firstName')
          .notEmpty()
          .withMessage('First Name is required'),
    
        body('lastName')
          .notEmpty()
          .withMessage('Last Name is required'),
    
        body('email')
          .notEmpty()
          .withMessage('Email is required'),
    
        body('password')
          .isLength({ min: 6 })
          .withMessage('Password must be at least 6 characters'),
      ]
]

exports.validateSignInRequest = [
    [
        body('email')
          .notEmpty()
          .withMessage('Email is required'),
    
        body('password')
          .isLength({ min: 6 })
          .withMessage('Password must be at least 6 characters'),
      ]
]
exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.array().length > 0) {
    return res.status(400).json({
      error: errors.array()[0].msg
    });
  }

  next();
};
