const http = require('http');
const fs = require('fs');
const dir   = './public/';
const port = process.env.PORT | 4000;

//creating the server and routing
// creating the server starts
const server = http.createServer( (req, res) =>{

    // routing the frontend here startssss
    if(req.url === '/'){
        render(res, 'index.html');
    }else if(req.url === '/about'){
        render(res, 'about.html');
    }else if(req.url === '/contact'){
        render(res, 'contact.html');
    }else{
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.end('<h1> 404 file not found </h1>')
    }
     // routing the frontend here end

}).listen( port, ()=>{
    console.log(`http//localhost:${port}`);
})
// creating the server endsssssssssssss

// we will load the document on the front end here (or we will use the fs read file here)
// startsssssssssssssss
const render = (res, file) => {
    fs.readFile(dir+file, (err, data) =>{
        //if error
        if(err){
            res.writeHead(404, {'Content-Type' : 'text/html'});
        res.end('<h1> 404 file not found </h1>')
        }
        // if no error
        res.writeHead(200, {'Content-Type' : 'text/html'});
        return res.end(data);
    });
}