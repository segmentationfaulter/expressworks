var express = require('express');
var crypto = require('crypto');
var app = express();

app.put('/message/:id', function(req, res) {
  'use strict';
  var id = req.param.id;
  var str = crypto.createHash('sha1').update(new Date().toDateString().toString() + id).digest('hex');
  res.end(str);
});
app.listen(process.argv[2]);
