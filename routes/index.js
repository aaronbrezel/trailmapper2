var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); //'index' points to the views/index.pug this is defined as part of the express app
  //the 'title' variable is now accessable in the index.pug file
});

module.exports = router;
