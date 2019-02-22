var express = require('express');
var path = require('path');
var logger = require('morgan');

var router = require('./routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', router);

module.exports = app;