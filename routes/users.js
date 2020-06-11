var express = require('express');
var router = express.Router();

/* GET users listing. */
//In reality, this is called when users requests /users route.
router.get('/', function(req, res, next) { 
  //next is helpful if you want to add multiple route handlers 
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next){
  res.send('You are cool');
});

module.exports = router;
