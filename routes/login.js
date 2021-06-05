var express = require('express');
var router = express.Router();

<<<<<<< HEAD
router.get('/login', function(req, res, next) {
    res.render('login');
=======
router.get('/login',function(req,res,next){
    res.render('login')
>>>>>>> b43d6b6937031ee5e541f982d7a610fba34bd267
});

module.exports = router;