import { Router } from 'express'
import products from './products'
import categories from './categories'
import offers from './offers'

// guaranteed to get dependencies
export default () => {
	const app = Router()
	products(app)
	categories(app)
	offers(app)

	return app
}
