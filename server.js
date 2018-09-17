const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
var port = process.env.PORT || 4200;

// Angular frontend
app.set('appPath', path.join(__dirname + '/'));

app.use(express.static(app.get('appPath')));

app.get('*', function(req, res) {
  let indexFilePath = __dirname + '/index.html';
  res.sendFile(path.join(indexFilePath));
});

// Start listening
const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server listening on port: ', port);
});