var express = require('express');
var router = express.Router();
var user = "test_user"

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res){
  res.redirect(req.baseUrl + '/error');
});

router.get('/error', function(req, res, next) {
  res.render('error', { title: `error page` });
});

router.get('/:user', function(req, res, next) {
  res.render('userpage', { title: `${user}` });
});

module.exports = router;
