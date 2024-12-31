// A cleaner version of "HelloWorldWideWeb"
import express from 'express';
const app = express();
const port = 4242;

// anonymous function that has 3 named args
app.use((req, res, next) => {
    console.log("Middleware Handler Here");
    next();
});

// another anonymous function
app.get('/', (req, res) => {
    console.log(`Received request for '${req.url}' from agent ${req.headers['user-agent']}`);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
});

// one more anonymous function
app.listen(port, () => { console.log(`started server at ${port}`); });
