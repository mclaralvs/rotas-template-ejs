const express = require('express');
const indexRouter = require('./routes/index');
const expressLayouts = require('express-ejs-layouts')
const path = require('path');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts)
app.use(express.static('public'));

app.set("layout social", false);

app.get('/', function(req, res) {
    res.render('../views/index')
})

app.get('/social', function(req, res) {
    res.render('social', {layout: 'social'});
})

app.listen(3000)

module.exports = app;