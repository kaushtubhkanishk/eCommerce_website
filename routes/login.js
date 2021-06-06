var express = require('express');
var router = express.Router();
var User  = require('../model/users');

var app = express();

router.get('/login', function(req, res, next) {
    res.render('login');
});
router.get('/login',function(req,res,next){
    res.render('login')
});

app.post('/auth/login',async(req,res)=>{
    const {username,password}  =req.body;
    const user = User.findOne({username}).lean();
    if(!user){
        return res.json({status : 'error', error:'Invalid  '})
    }
    if(await bcrypt.compare(password,user.password)){
        const token  = jwt.sign({id:user._id, username :user.username}, JWT_SECRET)
        return res.json({status: 'ok', data:token});
    }

    res.json({status: 'error', error:'Invalid Username and password'})
})


module.exports = router;
