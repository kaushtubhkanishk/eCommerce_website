var express = require('express');
var router = express.Router();
var User = require('../model/users');
var bcrypt = require('bcryptjs');
var env = require('dotenv').config
 

router.get('/register',function(req,res,next){
    res.render('register');
})


router.post('/api/register/', async (req,res)=>{
    const {email,username,password : plainTextPassword} =req.body;
    const user = User.findOne({username}).lean();
    if(!username || typeof username !=='string'){
        res.json({status:'error',error : 'Invalid Username'})
    }

    if(plainTextPassword.length < 5){
        return res.json({
            status: 'error',
            error : 'Password is too short'
        })
    }
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(plainTextPassword,salt,10)

    try {

        const response  = await User.create({username,email,password});
        console.log('User created successfully: ', response)
    }catch(error){
        if(error.code===11000){
            return res.json({status:'error', error: 'Username is already in use'})
        }
        throw error
    }
    res.json({status:'ok'});
});





module.exports = router;

