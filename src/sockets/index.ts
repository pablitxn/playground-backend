// Sockets
import coffeeChat from './coffee-chat'
// Socket io
import { Socket } from 'socket.io'

const Sockets = (io: Socket) => {
	coffeeChat(io)
}

export default Sockets
