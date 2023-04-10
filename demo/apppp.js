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



////ROUTING ///////////////////////////////////////////////
const http = require('http');
const server =  http.createServer( (request,response) =>{

    response.writeHead(200, {"content-type": "text/html"});

if(request.url === './get'){
    response.write('You have gotten to GET page');
    if(request.method === "GET"){
        response.end("GET");
    }
}else if(request.url === './put'){
    response.write('You have gotten to PUT page');
     if(request.method === "PUT"){
        response.end("PUT");
    }
}else if(request.url === './post'){
    response.write('You have gotten to POST page');
     if(request.method === "POST"){
        response.end("POST");
    }
}else if(request.url === './delete'){
    response.write('You have gotten to DELETE page');
     if(request.method === "DELETE"){
        response.end("DELETE");
    }
}else {
    response.end('REQUEST NOT FOUND');
}
   response.end();
}).listen(3000, ()=>console.log("http//localhost:3000"));
