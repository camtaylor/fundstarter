var fs = require('fs');
var http = require('http')



http.createServer(function(req, res){
        fs.stat('public/index.html', function(err, success){
        if (err==null) {

        }  else if ( err.code == 'ENOENT'){
            console.error('File does not exist'); 
        }
        else {
            console.error(err);
        }        
        fs.open("public/index.html", 'r', function(error, data) {
            var buffer = new Buffer(4096);
            fs.read(data, buffer, 0, buffer.length, 0, function(err, bytes) {
                var textData = buffer.slice(0, bytes).toString('ascii');
                res.writeHead(  200,  {  'Content-Type' : 'text/html'  } );
                res.write(textData);
                res.end();
                fs.close(data, function(error) {
                    if (err) { throw error; }
                });
            });
        });
        
        });

}).listen(8080);
