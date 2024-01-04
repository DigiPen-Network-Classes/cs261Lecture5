// npm install moment
// npm install express

import express from 'express';
import moment from 'moment';

const app = express();
const port = 4242;

app.use((req, res, next) => {
    // lets set up some simple logging for every request that comes in:
    let timestamp = moment.now();
    console.log(`${timestamp} Received request from agent ${req.headers['user-agent']} for ${req.url}`);
    next();
});

app.get('/', (req, res) => {
//    console.log(`Received request for '${req.url}' from agent ${req.headers['user-agent']}`);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Hello World - the time is ${moment.now()} \n`);
});

app.listen(port, () => { console.log(`started server at ${port}`); });