// CREATING HTTP SERVER
//////////////////////////////////////////////////////////
const http = require('http');
const server =  http.createServer( (request,response) =>{
    response.writeHead(200, {"content-type": "text/html"});
    // response.write()
    response.end("<h1>Welcome to this very Node js</h1>");

}).listen(3000, ()=>console.log("http//localhost:3000"));

const server2 =  http.createServer( (request,response) =>{
    response.writeHead(200, {"content-type": "text/html"});
    response.end("<h1>Welcome to another very Node js</h1>");

}).listen(4000, ()=>console.log("http//localhost:4000"));




//CREATING REQUEST///////////////////////////
///////////////////////////////////////////////

const http = require('http');
const server =  http.createServer( (request,response) =>{

    response.writeHead(200, {"content-type": "text/html"});

    if(request.method === "GET"){
        response.end("GET");
    }
    if(request.method ===  "POST"){
        response.end("POST");
    }
    if(request.method === "PUT"){
        response.end("PUT");
    }
    if(request.method === "DELETE"){
        response.end("DELETE");
    }
    
    

}).listen(3000, ()=>console.log("http//localhost:3000"));
