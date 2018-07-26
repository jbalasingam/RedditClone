var express = require('express');
var router = express.Router();
var subreddit = "subreddits"


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



router.get('/r/', function(req, res){
  // redirect to / in current router
  res.redirect(req.baseUrl + '/subreddits');
});



router.get('/testy', function(req, res, next) {
  res.render('testy', { title: 'TESTYTESTY' });
});

module.exports = router;
