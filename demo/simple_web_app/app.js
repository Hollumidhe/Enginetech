const http = require('http');
const fs = require('fs');
const dir   = './public';
const port = process.env.PORT | 3000;

//creating the server and routing
// creating the server starts
const server = http.createServer( (request, response) =>{

    // routing the frontend here startssss
    if(request.url === './'){
        render(response, 'index.html');
    }else if(request.url === '/about'){
        render(response, 'about.html');
    }else if(request.url === '/contact'){
        render(response, 'contact.html');
    }else{
        response.writeHead(404, {'content-type' : 'text/html'});
        response.end('<h1> 404 file not found </h1>')
    }
     // routing the frontend here end

}).listen( port, ()=>{
    console.log(`http//localhost:${port}`);
})
// creating the server endsssssssssssss

// we will load the document on the front end here (or we will use the fs read file here)
// startsssssssssssssss
const render = (response, file) =>{
    fs.readFile(dir+file, (error, data) =>{
        //if error
        if(error){
            response.writeHead(404, {'content-type' : 'text/html'});
        response.end('<h1> 404 file not found </h1>')
        }
        // if no error
        response.writeHead(200, {'content-type' : 'text/html'});
        return response.end(data);
    });
}