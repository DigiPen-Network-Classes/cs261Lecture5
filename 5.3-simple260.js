import tcp from 'net';
const port = 8888

// old way of doing async programming:
const tcpServer = tcp.createServer().on('connection', (socket) => {
	socket.setEncoding('utf8')
	console.log(`Connection from ${socket.remoteAddress} on port ${socket.remotePort}`)

	socket.on('data', (str) => {
		console.log(`Data from ${socket.remoteAddress} on port ${socket.remotePort}: ${str}`)

		socket.write(`You sent ${str}`, () => {
			console.log(`Closing connection from ${socket.remoteAddress} on port ${socket.remotePort}`)

			socket.end(() => {
				console.log(`Closed from ${socket.remoteAddress} on port ${socket.remotePort}`)
			})
		})
	})
});

tcpServer.listen(port, () => {
	console.log(`tcp listening on port ${port}`)
});