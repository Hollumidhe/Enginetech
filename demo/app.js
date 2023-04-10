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