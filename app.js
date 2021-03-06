var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



if (process.env.NODE_ENV !== 'production') { //Don't use env variables in a production environment
  require('dotenv').config() //load environment variables from .env file
  //.env now available by accessing 'process.env.[variable name]'
}

//Load db instance
// db = require('./db/postgreSQL') //Old requirement for pg-promise
db = require('./db/sequelize') //load and authenticate db connection with sequelize
console.log(db)


//handler code for specific routes (url paths) i.e. router.get()
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //set path for where views will be served from
app.set('view engine', 'pug'); //set views template

//add middleware libraries into request handling chain
app.use(logger('dev'));
app.use(express.json()); //json parser
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //cookie parser
app.use(express.static(path.join(__dirname, 'public'))); //serve static files from the /public folder

app.use('/', indexRouter); //link index route code to '/' url
app.use('/users', usersRouter); //link user route code to /users url
// routes here act as prefixes to routes defined in imports. 
// if the imported users module defines a route for /profile, you would access that route at /users/profile. 


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; //makes the app module exportable (so it can be called with 'require' in /bin/www)
