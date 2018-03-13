const http = require('http');
const port = 3000;


const requestHandler = (req, res) => {
    console.log(req.url);
    res.end('Hello Node.js Server!');
}


const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        console.log('Bad news, something happened.', err);
    }
    
    console.log('Server up and running on port ' + port);
});