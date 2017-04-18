var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/first_template', function(req, res){
  res.render('first_view');
});
app.get('/dynamic_template/:id', function(req, res){
  res.render('dynamic', {
    idNum: req.params.id
  });
});

app.listen(3000);
