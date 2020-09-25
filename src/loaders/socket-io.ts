// Socket Io
import SocketIo from 'socket.io'
// Types
import { Application } from 'express'
import { Server } from 'http'
// Request Configs
import cors from 'cors'
import bodyParser from 'body-parser'
// Sockets
import sockets from '../sockets'

const SocketServer = (app: Application, server: Server) => {
	/**  Server Status  **/
	app.get('/status', (req, res) => {
		res.status(200).end()
	})
	app.head('/status', (req, res) => {
		res.status(200).end()
	})

	/**  Middlewares  **/
	app.use(cors())
	app.use(bodyParser.json())
	// Make server avaible //
	app.get('/', (req, res) => {
		res.send({ response: 'Websocket server - Coffee chat - Connected' }).status(200)
	})

	/**  Apply sockets servers  **/
	const io = SocketIo(server)
	sockets(io)

	/** Error handlers  **/
	app.use((req, res, next) => {
		const err = new Error('Not Found')
		err['status'] = 404
		next(err)
	})
	app.use((err, req, res, next) => {
		res.status(err.status || 500)
		res.json({
			errors: {
				message: err.message
			}
		})
	})
	app.use((err, req, res, next) => {
		if (err.name === 'UnauthorizedError') {
			return res.status(err.status).send({ message: err.message }).end()
		}
		return next(err)
	})
}

export default SocketServer
