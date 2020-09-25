// Sockets
import coffeeChat from './coffee-chat'
// Socket io
import { Server } from 'socket.io'

const Sockets = (io: Server) => {
	coffeeChat(io)
}

export default Sockets
