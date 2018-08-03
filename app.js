var createError = require('http-errors');
var https = require('https');
var express = require('express');
var path = require('path');
var fs = require('fs');
//var logger = require('morgan');

var options = {
  key: fs.readFileSync('./keys/server.key'),
  cert: fs.readFileSync('./keys/server.crt'),
  requestCert: false,
  rejectUnauthorized: false
};

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var db = require("./models");

var PORT = process.env.PORT || 8080;


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'pug');

//app.use(logger('dev'));


app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/u/', usersRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


db.sequelize.sync({
  force: true
}).then(function () {
  // http.createServer(app).listen(3000)
  var server = https.createServer(options, app).listen(3000, function () {
    console.log("server started at port 3000");
  });
});

module.exports = app;