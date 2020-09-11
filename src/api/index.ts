import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import products from "./routes/products"

// guaranteed to get dependencies
export default () => {
	const app = Router();
	auth(app);
	user(app);
	products(app)

	return app
}