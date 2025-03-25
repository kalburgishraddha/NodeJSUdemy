const http = require('http');

const server = http.createServer((req,res)=> {
    console.log(req.url,req.method, req.headers);
    //process.exit(); // exited the event loop 
});
server.listen(3000);