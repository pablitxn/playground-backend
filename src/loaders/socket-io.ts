import socketIo from 'socket.io'
import cors from 'cors'
import bodyParser from 'body-parser'
import Logger from '../loaders/logger'
import config from '../config'
// Routes
import routes from '../api/routes/coffee-chat'

import {
	addUser,
	removeUser,
	getUser,
	getUsersInRoom
} from '../sockets/coffee-chat/users'

export default ({ socket: app, server }) => {
	/**
	 * Health Check endpoints
	 * @TODO Explain why they are here
	 */
	app.get('/status', (req, res) => {
		res.send({ response: 'status ok' }).status(200).end()
	})

	app.head('/status', (req, res) => {
		res.status(200).end()
	})

	app.use(cors())
	app.use(bodyParser.json())

	app.use('/', routes())

	Logger.info('Websocket server in http://localhost:4420/')

	const io = socketIo(server)

	io.on('connect', (socket) => {
		socket.on('join', ({ name, room }, callback) => {
			const { error, user } = addUser({ id: socket.id, name, room })

			if (error) return callback(error)

			socket.join(user.room)

			socket.emit('message', {
				user: 'admin',
				text: `${user.name}, welcome to room ${user.room}.`
			})
			socket.broadcast
				.to(user.room)
				.emit('message', { user: 'admin', text: `${user.name} has joined!` })

			io.to(user.room).emit('roomData', {
				room: user.room,
				users: getUsersInRoom(user.room)
			})

			callback()
		})

		socket.on('sendMessage', (message, callback) => {
			const user = getUser(socket.id)

			io.to(user.room).emit('message', { user: user.name, text: message })

			callback()
		})

		socket.on('disconnect', () => {
			const user = removeUser(socket.id)

			if (user) {
				io.to(user.room).emit('message', {
					user: 'Admin',
					text: `${user.name} has left.`
				})
				io.to(user.room).emit('roomData', {
					room: user.room,
					users: getUsersInRoom(user.room)
				})
			}
		})
	})

	/// catch 404 and forward to error handler
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
}
