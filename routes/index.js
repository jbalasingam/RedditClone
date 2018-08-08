var express = require('express');
var router = express.Router();

//placeholder for subs
var subreddit = "testyy"


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('content', {
    title: 'HomePage'
  });
});

router.get('/subreddits', function (req, res, next) {
  res.render('index', {
    title: `AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH`
  });
});

router.get('/post', function (req, res, next) {
  res.render('post', {
    title: `Post It!`
  });
});

router.get('/error', function (req, res, next) {
  res.render('error', {
    title: `error page`
  });
});

router.get('/r/:subreddit', function (req, res, next) {
  res.render('index', {
    title: req.params.subreddit
  });


});



router.get('/r/', function (req, res) {
  // redirect to / in current router
  res.redirect(req.baseUrl + '/subreddits');
});



router.get('/testy', function (req, res, next) {
  res.render('testy', {
    title: 'TESTYTESTY'
  });
});

module.exports = router;