// Express
import { Router, Request, Response } from 'express'
// Services
// import CoffeeChatServices from '../../../services/coffee-chat/room'
// Dependency Injection
import { Container } from 'typedi'

// Definitions
const route = Router()

export default (app: Router) => {
	app.use('/', route)

	route.get('/room', async (req: Request, res: Response) => {
		try {
			// const service = Container.get(CoffeeChatServices)
			// const io = await service.connectToSocketIo()
			// console.log('route io ', io)
			// console.log('route req ', req)
			// console.log('route res', res)
			res.status(200).send({
				// data: categories,
				response: 'room'
			})
		} catch (err) {
			res.status(500).send(err)
		}
	})
}
