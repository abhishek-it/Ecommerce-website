const express = require('express');
const router = express.Router();
const { signup, signin ,requireSignin} = require('../../controller/admin/auth');
const {validateSignUpRequest,validateSignInRequest,isRequestValidated} = require('../../validator/auth')
// signup route
router.post('/signup',validateSignUpRequest,isRequestValidated , signup);

// signin route
router.post('/signin', validateSignInRequest,isRequestValidated,signin);

//writing code to handle user session
// router.post('/profile',requireSignin , (req , res)=>{
//    res.status(200).json({user : "profile"})
  
// })
 module.exports = router;
