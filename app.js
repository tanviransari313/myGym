var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


var mongoose = require('mongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});



mongoose.set("debug", true); // debugging is on        
mongoose.connect('mongodb://127.0.0.1:27017/mytest', { useNewUrlParser: true })
  //mongoose.connect('mongodb://root:root@127.0.0.1:27017/happymeter-dev1?authSource=admin', { useMongoClient: true })
  .then(() => {
    console.log(`Succesfully Connected to the Mongodb Database at URL : mongodb://127.0.0.1:27017/myTest`);
  })
  .catch((error) => {
    console.log(error);
    console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/myTest`);
  });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

