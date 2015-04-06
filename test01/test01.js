var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){

  var result = url.parse(request.url, true);

  if ( result.pathname == '/' )
    var path = '/artigos'
  else
    var path = result.pathname

  console.log('Access: ' + path);

  if (fs.existsSync(__dirname + path + '.html')) {
    fs.readFile(__dirname + path + '.html', function(erro, html){
      response.writeHeader(200, {'Content-Type': 'text/html'});
      response.end(html);
    });
  } else {
    fs.readFile(__dirname + '/error.html', function(erro, html){
      response.writeHeader(200, {'Content-Type': 'text/html'});
      response.end(html);
    });
  }

});

server.listen(3000, function(){
  console.log('Executando Site Pessoal');
});
