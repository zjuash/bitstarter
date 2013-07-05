var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fileContent = fs.readFileSync('index.html');
  var buffer = new Buffer(256);
  buffer=fileContent;
  response.send(buffer.toString());

  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
