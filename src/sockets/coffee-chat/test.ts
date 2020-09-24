export default (io) =>
	io.on('connect', (socket) => {
		console.log(`Connected ${socket.id}`)
	})
