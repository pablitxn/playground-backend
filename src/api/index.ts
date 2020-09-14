// Router
import { Router } from 'express'
// Routes
import auth from './routes/auth/auth'
import user from './routes/auth/user'
import product from './routes/ecommerce/product'
import ecommerce from './routes/ecommerce'

export default () => {
	const app = Router()
	auth(app)
	user(app)
	ecommerce(app)

	return app
}
