
// Included here because you'll see lots of examples like this:
// require('modulename'); -- the old way.  Do one or the other, but never both! 
//const http = require("http");

// import {} from ''; -- the new hotness
import express from 'express';
const app = express();
const port = 4242;

// a function we'll call when the server starts
function handleServerStart() {
    console.log(`started server at ${port}`);
}

// a function that gets called to handle all the requests 
// (not a very interesting web application)
function handleServerRequests(req, res, next) {

    console.log("handle server request (middleware)");
    // note: this is important!
    // (otherwise the request processing will 'stall')
    next();
}

function getIndexPage(request, response) {
    console.log(`Received request for '${request.url}' from agent ${request.headers['user-agent']}`);
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello World\n");
}

// middleware that gets called on all requests:
app.use(handleServerRequests);

// lets make a handler for a specific path:
app.get('/', getIndexPage);

// if we don't listen, the program just wires up everything and then exits.
app.listen(port, handleServerStart);