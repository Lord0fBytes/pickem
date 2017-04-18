var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(cookieParser());

app.get('/first_template', function(req, res){
  res.render('first_view');
});
app.get('/dynamic_template/:id', function(req, res){
  res.render('dynamic', {
    idNum: req.params.id
  });
});
app.get('/cookie', function(req,res){
  res.cookie('username', 'jmasse').send('cookies set');
});
app.get('/cookie/get', function(req,res){
  res.render('dynamic', {
    idNum: req.cookies.username
  });
});

app.listen(3000);
