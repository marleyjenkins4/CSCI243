const http = require('http');
let port = 8000;

const server = http.createServer(function(req,res) {
  if(req.method == "GET" && req.url=="/" )
  {
    // Deliver a response for the home page
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/html')
    res.write('<!DOCTYPE html>');// this goes back to client
    res.write('<html>');
    res.write('<head> <link rel="stylesheet"  href="/styles.css"><title>Home Page</title> </head>');
    res.write('<body> <h1> The Homepage </h1></body>');
    res.write('</html>'); // completes http response I want
    res.end()// completes http response I want
  }
  else if(req.method == "GET" && req.url=="/styles.css")
  {
    // Deliver a response for the home page
    res.writeHead(200, {
      'Content-Type': 'text/css'
    });
    res.write('body');
    res.write('{');
    res.write('background-color:	#00000;');
    res.write('color: #808080;');
      res.write('}');
    // completes http response I want
    res.end()// completes http response I want
  }
  else if (req.method == "GET" && req.url =="/about")
  {
    //Deliver the about page
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write('<!DOCTYPE html>');// this goes back to client
    res.write('<html>');
    res.write('<head> <title> About Page </title> <link rel="stylesheet"  href="index.js"> </head>');
    res.write('<body> <h1> The about page </h1></body>');
    res.write('</html>');

      res.end(); // completes http response I want

  }
  else {
    //Generate a 404 page!
    res.statusCode= 404;
    res.statusMEssage= "Not Found!";
    res.end('Sorry. could not find what you are looking for.');

  }
});
server.listen(port);
