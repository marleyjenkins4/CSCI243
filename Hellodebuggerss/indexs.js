const http = require('http');

const req = http.request(
	{
	 hostname: "deltona.birdnest.org",
	 path:"/~acc.besmera2/csci243.txt",
	 method: "GET"
	},
	(res) => {
	let response = '';
	res.on('data', (data)=> {
		response += data;
	});
	res.on('end', ()=>{
		let answer=0;
		for(let ct=0; ct<response.length; ct++) /// the program now iterates through each letter until it reaches the end. (answer is iterated to find each letter).
		{
			answer += response.charCodeAt(ct);
		}
		console.log(response);
	});
});

req.end();
