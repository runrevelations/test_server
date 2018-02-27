var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '../public/index.html'));
});

/* GET routes and descriptions. */
router.get('/routes', function(req, res, next) {
  res.render('index', {});
});

/* GET instructions. */
router.get('/instructions', function(req, res, next) {
  res.render('instructions', {});
});

module.exports = router;
