import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import helloMern from "./routes/hello-mern"

// guaranteed to get dependencies
export default () => {
	const app = Router();
	auth(app);
	user(app);
	helloMern(app)

	return app
}