var fs = require('fs');
var http = require('http')


http.createServer(function(req, res){
        res.writeHead(  200,  {  'Content-Type' : 'text/html'  } );
        res.write(fs.readFileSync('public/index.html', 'utf-8'));
        res.end(); 

}).listen(8080);
