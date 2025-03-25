const http = require('http');

const server = http.createServer((req,res)=> {
    const url = req.url;
    if(url === '/') {
        res.setHeader('Content-Type','text/html');
        res.write('<html');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<form action="message" method="POST"><input type="type" name="message"><button type="submit">Send</button></form>');
        res.write('</html>');
        return res.end();
    }
});
server.listen(3000);