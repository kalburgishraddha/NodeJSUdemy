const fs = require('fs');
const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Hello from Assignment 1</title></head>');
        res.write('<form action="create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/users') {
        res.write('<html>');
        res.write('<head><title>Hello from Assignment 1</title></head>');
        res.write('<div><ul><li>Dummy 1</li></ul></div>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user' && method === "POST") {
        console.log('create-user')
        
        const body = [];
        req.on('data',(chunk)=> {
            body.push(chunk);
        })

        req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            const user = parseBody.split('=')[1];
            console.log("User entered is", user);
        })
        res.statusCode = 302;
        res.setHeader('Location','/');
        res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html');
    res.write('<head>Welcome to Assignment 1</head>');
    res.write('<div>Welcome to Assignment 1</div>');
    res.write('</html>');
    return res.end();
}
exports.handler = requestHandler;