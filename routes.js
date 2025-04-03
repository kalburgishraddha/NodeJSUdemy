

const fs = require('fs');
const requestHandler = (req,res) =>{
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
            fs.writeFile('message.txt',message, err=> {
                res.statusCode = 302;
                res.setHeader('Loaction', '/');
                return res.end();
            });
        })
    }
    
    res.setHeader('Content-Type','text/html');
    res.write('<html');
    res.write('<head><title>My first page</title></head>');
    res.write('<div>Hello from NodeJS</div>');
    res.write('</html>');
    res.end();
}

/*module.exports = {
    handler: requestHandler,
    someText: 'Some hardcoded text'
};*/

/*module.exports.handler = requestHandler;
module.exports.someText = 'Some hardcoded text';*/

exports.handler = requestHandler;
exports.someText = 'Some hardcoded text';

