import { Router } from 'express'
import auth from './routes/auth'
import user from './routes/user'
import ecommerce from './routes/ecommerce'

// guaranteed to get dependencies
export default () => {
	const app = Router()
	auth(app)
	user(app)
	ecommerce(app)

	return app
}
