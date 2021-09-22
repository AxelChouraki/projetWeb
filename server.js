const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

app.engine('html', require('ejs').renderFile);

app.get('/', function(req,res){
    res.render(path.join(__dirname+'/index.html'));
  });

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);