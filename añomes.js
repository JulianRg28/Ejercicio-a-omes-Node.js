var http = require('http');
var url =require('url');

http.createServer(function(req,res){
    //fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        var q = url.parse(req.url, true).query;
        var txt = q.year + " " + q.month;
        //res.write(data);
        res.end(txt);
    }).listen(8080);