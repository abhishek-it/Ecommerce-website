const jwt = require('jsonwebtoken');
const User = require('../../models/user');

exports.signup = async (req, res) => {
  try {
   

    const { email } = req.body;


    const newUser = new User({
      ...req.body,
      role: 'admin'
    });
await newUser.save();

    return res.status(201).json({
      message: 'Admin created successfully'
    });

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}; 
exports.signin = async(req ,res) =>{
    const { email } = req.body;

   const user = await User.findOne({ email });
   if(user.authenticate(req.body.password) && user.role == "admin"){
      const token = jwt.sign({_id : user._id} , process.env.JWT_SECRET , {expiresIn : "1h"})
      const {firstName , LastName , email , role , fullName} = user;
      res.status(200).json({
        token,
        user : {firstName , LastName , email , role , fullName}
      });
   }
}

exports.requireSignin = (req , res ,next ) =>{
   const token = req.headers.authorization
   console.log(token);
   next();
}