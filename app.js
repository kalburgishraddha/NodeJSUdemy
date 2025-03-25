const http = require('http');

const server = http.createServer((req,res)=> {
    console.log(req.url,req.method, req.headers);
    //process.exit(); // exited the event loop
    res.setHeader('Content-Type','text/html');
    res.write('<html');
    res.write('<head><title>My first page</title></head>');
    res.write('<div>Hello from NodeJS</div>');
    res.write('</html>');
    res.end();
});
server.listen(3000);