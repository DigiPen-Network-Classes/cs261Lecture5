const http = require("http");
const util = require("util");
const port = 4242;

function handleServerStart() {
    console.log('started server at', server.address());
}

function handleServerRequests(req, res) {
//   console.log(`${util.inspect(req)}`);

// doesn't work (circular references) but WILL be useful
// for other types of objects.
//    console.log(`${JSON.stringify(req)}`);

    console.log(`Received request for '${req.url}' from agent ${req.headers['user-agent']}`);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
}

// create a server
const server = http.createServer(handleServerRequests);
// listen on a port (register event handler)
server.listen(port, handleServerStart);

