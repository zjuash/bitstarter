var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fileContent = fs.readFileSync('index.html');
  var buffer = new Buffer(256);
  buffer=fileContent;
  response.send(buffer.toString());
<<<<<<< HEAD
=======

  //response.send('Hello World 2!');
>>>>>>> 1fb2688f931e9d7c81386cdab09f7b84f8b52859
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
