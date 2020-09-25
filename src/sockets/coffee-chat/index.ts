// Socket io
import { Socket } from 'socket.io'
// Utils
import { addUser, removeUser, getUser, getUsersInRoom } from './utils'

const coffeeChat = (io: Socket) =>
	io.on('connect', (socket: Socket) => {
		/** Join chat **/
		socket.on('join', ({ name, room }, callback) => {
			const { error, user } = addUser({ id: socket.id, name, room })
			if (error) return callback(error)

			socket.join(user.room)

			socket.emit('info-message', {
				user: 'admin',
				text: `${user.name}, welcome to room ${user.room}.`
			})
			socket.broadcast
				.to(user.room)
				.emit('info-message', { user: 'admin', text: `${user.name} has joined!` })

			io.to(user.room).emit('roomData', {
				room: user.room,
				users: getUsersInRoom(user.room)
			})

			callback()
		})

		/** Messages room listener  **/
		socket.on('send-message', (message) => {
			const { room } = message
			io.to(room).emit('new-message', message)
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

export default coffeeChat
