
// Modules vs. CommonJS
// require('modulename'); -- the old way.
//const http = require("http");
// const express = require('express');

// import {} from ''; == the new hotness
import express from 'express';
const app = express();
const port = 4242;

// let's declare some functions!
// a function we'll call when the server starts
function handleServerStart() {
    console.log(`started server at ${port}`);
}

// a function that gets called to handle all the requests 
// (not a very interesting web application)
function handleServerRequest(req, res, next) {

    console.log("handle server request (middleware)");
    // pass control to next link in the chain
    next();
}

// this is still a function, declared anonymously
const getIndexPage = function (request, response) {
    console.log(`Received request for '${request.url}' from agent ${request.headers['user-agent']}`);
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end("Hello World\n");
}

// another function
const helloName = function (name) {
    console.log(`Hello, ${name}}`)
}
helloName("YourName");

// Express Middlware:
// that gets called on all requests:
app.use(handleServerRequest);

// Express Route
// a handler for a specific path
app.get('/', getIndexPage);

// if we don't listen, the program just wires up everything and then exits!
app.listen(port, handleServerStart);