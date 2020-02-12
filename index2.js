var figlet = require('figlet');

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
},2000);
let Funnies= require('funnies').Funnies;
let funnies= new Funnies();
  setInterval(() => {
    console.log(funnies.message());

    },2000);
