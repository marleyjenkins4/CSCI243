const http = require('http');
const querystring= require('querystring');

let port= 8000;

const server = http.createServer(function(req,res) {
  if(req.method == "GET" && req.url=="/" )
  {
    // Deliver a response for the home page
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/html')
    res.write('<!DOCTYPE html>');// this goes back to client
    res.write('<html>');
    res.write('<form action = "/info" class="form" method= "post">');
    res.write('Name: <input type = text" name= "name"/> </textarea> <br/>');
    res.write('Repeat: <input type = "text" name= "quantity"/></textarea><br/>');
    res.write('<input type = "submit" value= "send message"/> <br/>');
      res.write('</form>');
      res.write('</body>');
    res.write('</html>'); // completes http response I want
    res.end()// completes http response I want
  }
  else if (req.method == "POST" && req.url== "/info")
  {
    let data = []; // using an array to store the buffer in an array
    req.on('data',(chunk)=>{
      data.push(chunk); //pushes the information
      console.log('chunk',chunk);
    });

 req.on('end', function() {
   data = Buffer.concat(data)// takes each one of the buffers to create a single new buffer into a single new data WARNING. DO NOT USE FOR LARGE data
   // INSTEAD DO AN ITERATION
   console.log('data after concat ', data);
   data = data.toString();
   // take data and turn into a string
   console.log('data after serialization',data);
   data= querystring.parse(data); // overwrite with querystring and pass in the data (aiming to send the parsed out version of data)
   console.log('after parsing', data);
   for ( i = 0; i < data.quantity; i++)
   {
     console.log(' '+data.name+ ' ');
     res.write(data.name);
   }
  res.end('');
 });
}
});




server.listen(port);
