const http= require('http');

const server= http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end("Hello guys");
    }
    if(req.url==='/about')
    {
        res.end("About");
    }
});

server.listen(5000);