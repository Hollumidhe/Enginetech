const http = require('http')
const data = JSON.stringify({
    title: "MEAN STACK"
})

// for option
const options = {
    hostname: "localhost",
    port:3000,
    path: "/",
    method: "GET", // PUT, POST DELETE
    headers: {
        "content-type": "application/json",
        "content-Lenght": "data.length"
    }
}

const request = http.request(options, response =>{
    response.on('data', chunk =>{
        process.stdout.write(chunk);
    })
})

// if there will be error
request.on('error', error =>{
    console.error(error);
})
request.end();