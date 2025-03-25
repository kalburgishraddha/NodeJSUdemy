const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=> {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<form action="message" method="POST"><input type="type" name="message"><button type="submit">Send</button></form>');
        res.write('</html>');
        return res.end();
    }
    
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', ()=> {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
            res.statusCode = 302;
            res.setHeader('Loaction', '/');
            return res.end();
        })
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html');
    res.write('<head><title>My first page</title></head>');
    res.write('<div>Hello from NodeJS</div>');
    res.write('</html>');
    res.end();
});
server.listen(3000);