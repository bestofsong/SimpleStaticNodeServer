var http = require('http')
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({code:0, data:{force:1}}));
}).listen(8888);
console.log('Server running!');
