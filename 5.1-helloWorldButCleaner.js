// A cleaner version of "HelloWorldWideWeb"
import express from 'express';
const app = express();
const port = 4242;

app.use((req, res, next) => {
    console.log("Middleware Handler Here");
    next();
});

app.get('/', (req, res) => {
    console.log(`Received request for '${req.url}' from agent ${req.headers['user-agent']}`);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
});

app.listen(port, () => { console.log(`started server at ${port}`); });
