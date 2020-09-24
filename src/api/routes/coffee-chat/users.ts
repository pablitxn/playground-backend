// Express
import { Router, Request, Response } from 'express'
// Services
// import CategoryService from '../../../services/ecommerce/category'
// Dependency Injection
import { Container } from 'typedi'

// Definitions
const route = Router()

export default (app: Router) => {
	app.use('/coffee-chat', route)

	route.get('/users/:room', async (req: Request, res: Response) => {
		try {
			// const service = Container.get(/** service */)
			// const categories = await service.getCategories()
			res.status(200).json({
				// data: categories,
				message: 'categories listed'
			})
		} catch (err) {
			res.status(500).send(err)
		}
	})
}
