var http = require("http");

const students = require('./data.js');
//console.log(student.getAll());
var all = students.getAll();
//console.log(all.length);
http.createServer(function(req,res){
  //console.log('createServer got request')
  var path = req.url.toLowerCase();
  switch(path) {
    case '/': 
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is home page.'+ 'The array length is: ' + all.length); 
    break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('This is about me page. Hello everybody My name is Taher.');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404:Page not found.');
  }
  
}).listen(process.env.PORT || 3000);