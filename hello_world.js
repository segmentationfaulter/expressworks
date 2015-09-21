var express = require('express');
var app = express();
app.get('/home', (req, res) => {
  'use strict';
  res.end('Hello World!');
});
app.listen(process.argv[2]);
