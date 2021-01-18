const http = require('http')
const config = require('./config').config
const fs = require('fs')
const ejs = require('ejs')
var template = fs.readFileSync(__dirname + '\\hello.ejs', 'utf-8');

const server = http.createServer((req, res) => {
    var data = ejs.render(template, {
        title: 'hello ejs',
        content: '<strong>big hello ejs</strong>'
    });
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200
    res.end(data)
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/plain')
    // switch(req.url){
    //     case '/':
    //         res.end('Hello!');
    //         break;
    //     case '/about':
    //         res.end('This is about page');
    //         break;
    //     case '/home':
    //         res.end('This is home page');
    //         break;
    //     default:
    //         res.end('Not Found');
    // }
    // fs.readFile(__dirname + '/index.html', 'utf8', function (err, data){
    //     if (err){
    //         res.statusCode = 404
    //         res.setHeader('Content-Type', 'text/plain')
    //         res.end('Not Found')
    //     }
    //     else {
    //         res.statusCode = 200
    //         res.setHeader('Content-Type', 'text/html')
    //         res.end(data)
    //     }
    // })
    
});

server.listen(config.port, config.hostname, ()=>{
    console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
