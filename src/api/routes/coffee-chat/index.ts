import { Router } from 'express'
// Routes
import room from './room'

// Websocket config
export default () => {
	const app = Router()
	room(app)

	return app
}
