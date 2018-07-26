var express = require('express');
var router = express.Router();
var subreddit = "subreddits"
var user = "test_user"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HomePage' });
});

router.get('/subreddits', function(req, res, next) {
  res.render('index', { title: `${subreddit}` });
});

router.get('/error', function(req, res, next) {
  res.render('error', { title: `error page` });
});

router.get('/u/:user', function(req, res, next) {
  res.render('userpage', { title: `${user}` });
});

router.get('/r/', function(req, res){
  // redirect to / in current router
  res.redirect(req.baseUrl + '/subreddits');
});

router.get('/u/', function(req, res){
  // redirect to / in current router
  res.redirect(req.baseUrl + '/error');
});

router.get('/testy', function(req, res, next) {
  res.render('testy', { title: 'TESTYTESTY' });
});

module.exports = router;
