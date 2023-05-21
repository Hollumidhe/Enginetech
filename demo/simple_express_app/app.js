const express = require('express');
const fs = require('fs');
const dir = './public/';
const port = process.env.PORT | 3000;

//creating the server and routing
// creating the server starts
const app = express ();
    
   // routing the frontend here startssss
   app.get('/', (req,res) =>{
    render(res, './');
   })

   app.get('/about', (req, res) =>{
    render(res, 'about.html');
   })

   app.get('/contact', (req, res) =>{
    render(res, 'contact.html');
   })

 // routing the frontend here end

    app.listen( port, ()=>{
        console.log(`http://localhost:${port}`);
    })

    // creating the server endsssssssssssss

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