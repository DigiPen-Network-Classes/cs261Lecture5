const http = require("http");
const port = 4242;

// create a server, register a callback, and
// then register a 'listen' callback for the startup,
// using better javascript "style"
const server = http.createServer((req, res) => {

    console.log(`Received request from agent ${req.headers['user-agent']}`);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");

}).listen(port, () => {
   console.log('started server at location', server.address());
});
