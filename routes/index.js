var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res, next) {
  //es.render('index', { title: 'Express' });
});


router.get('/signup', function(req, res, next) {
  //res.render('index', { title: 'Express' });
});


router.get('/profile', function(req, res, next) {
   //res.render('index', { title: 'Express' });
});


router.get('/reserve', function(req, res, next) {
  //res.render('index', { title: 'Express' });
});





module.exports = router;
