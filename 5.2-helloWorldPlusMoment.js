const http = require("http");
const moment = require("moment")
const port = 4242

http.createServer((req, res) => {
    let timestamp = moment()
    console.log(`${timestamp}: Received request from agent ${req.headers['user-agent']}`);
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello World\n")
}).listen(port, () => {
    let timestamp = moment()
    console.log(`Server started on port ${port} at ${timestamp}`)
})