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
    res.write('<form action = "/time-stable" method= "post">');
    res.write('<h2>MultiplicationTable</h2>');
    res.write('<form action>');
    res.write('Initial Number:<br>');
    res.write('<input type="text" name="InitialNumber">');
    res.write('<br>');
    res.write('Ending Number:<br>');
    res.write('<input type="text" name="EndingNumber">');
      res.write('<input type = "submit" value= "send message"/> <br/>');
    res.write('</form>');
    res.write('<br><br>');
      res.write('</body>');
    res.write('</html>');
    res.end()// completes http response I want
  }

  else if (req.method == "POST" && req.url== "/time-stable")
  {
    let data = []; // using an array to store the buffer in an array
    req.on('data',(chunk)=>{
      data.push(chunk); //pushes the information
      console.log('chunk',chunk);
    });



    req.on('end', function()
    {
      data = Buffer.concat(data); // takes each one of the buffers to create a single new buffer into a single new data WARNING. DO NOT USE FOR LARGE data
      // INSTEAD DO AN ITERATION
      console.log('data after concat ', data);
      data = data.toString(); // take data and turn into a string
      console.log('data after serialization',data);
      data= querystring.parse(data); // overwrite with querystring and pass in the data (aiming to send the parsed out version of data)
      console.log('after parsing', data);
     console.log('data after concat ', data);
     var result= '';
     for ( i = data.InitialNumber; i <= data.EndingNumber; i++)
     {
         for ( j = data.InitialNumber; j <= data.EndingNumber; j++)
         {
             if(i == data.InitialNumber && j > data.InitialNumber)
             {
              result += '[' + j + ']';
             }
            else if(j == data.InitialNumber && i>data.InitialNumber)
              {
                result += '[' + i + '] ';
              }
             else if(i > data.InitialNumber && j> data.InitialNumber)
             {
               result+=+ '   '+(j*i)+ '  ';
             }
           }
             result += '\n'

         }
          console.log(result);
          res.write(result);

          res.end('post received');

    });
}
 });


server.listen(port);
