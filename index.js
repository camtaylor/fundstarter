var fs = require('fs');
var http = require('http')


http.createServer(function(req, res){
    fs.readFile('public/index.html', 'utf8', function (err, data) {
        if (err) { throw err;}
        res.writeHead(  200,  {  'Content-Type' : 'text/html'  } );
        res.write(data);
        res.end(); 
    });

}).listen(8080);
