const express = require('express');
const router = express.Router();


const { signup, signin ,requireSignin} = require('../../controller/admin/auth');

// signup route
router.post('/signup', signup);

// signin route
router.post('/signin', signin);

//writing code to handle user session
// router.post('/profile',requireSignin , (req , res)=>{
//    res.status(200).json({user : "profile"})
  
// })
 module.exports = router;
