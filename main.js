var http = require("http");

//Create an http server that listens on port 8081.
//Inside of create server pass a function that takes a request and create a response
http.createServer(function( request, response) {
    //Send the HTTP header
    //200 is the HTTP Status that means OK
    //The content the response will send will be a text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //Sendn the response body as "Hello World"
    response.end('Hey steph how\'s it going?\n');
}).listen(8081);

console.log("Server is running at http://127.0.0.1:8081");
