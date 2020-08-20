var createError = require('http-errors');
var express = require('express');
var path = require('path');
var ejs = require('ejs')
var logger = require('morgan');


var indexRouter = require('./routes/index');
const { db } = require('./models/todo');

require('dotenv').config();
// const mongoose = require('mongoose')
// const mongo_port = process.env.MONGO_PORT

// mongoose.connect(process.env.MONGO_URL+mongo_port ,{useNewUrlParse:true})
// .then(()=> console.log('succefully connected to mongod'))
// .catch(e=> console.error(e));


//mongodb url
const mongo_url = process.env.MONGO_URL+process.env.MONGO_PORT





var app = express();

//view engine setup
app.set('views', path.join(__dirname, '/views'));
app.engine('html', ejs.renderFile);
//app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.html');
});

module.exports = app;
