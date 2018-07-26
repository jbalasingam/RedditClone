var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testy', function(req, res, next) {
  res.render('testy', { title: 'Express' });
});

module.exports = router;
