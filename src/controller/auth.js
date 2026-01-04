const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = async (req, res) => {
try {
    const errors = validationResult(req);
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
exports.signin = async(req ,res) =>{
    const { email } = req.body;

   const user = await User.findOne({ email });
   if(user.authenticate(req.body.password)){
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