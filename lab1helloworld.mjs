
import http from 'http';
const port = 4242;

// create a server, register a callback, and
// then register a listener callback for the startup
// following javascript "style":
const server = http.createServer((req, res) => {
    console.log(`Received request from agent ${req.headers['user-agent']}`);
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello, world!\n");
}).listen(port, () => {
    console.log('started server at location', server.address());
});
