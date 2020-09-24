// Loaders
import dependencyInjectorLoader from './dependencyInjector'
import mongooseLoader from './mongoose'
import expressLoader from './express'
import websocketLoader from './socket-io'
import Logger from './logger'

export default async ({ expressApp, websocketApp: { socket, server } }) => {
	const mongoConnection = await mongooseLoader()
	Logger.info('DB connected successfully!')

	const userModel = {
		name: 'userModel',
		model: require('../models/auth/user').default
	}

	await dependencyInjectorLoader({
		mongoConnection,
		models: [userModel]
	})
	Logger.info('mongoose models successfully injected into DI container')

	await expressLoader({ app: expressApp })
	Logger.info('✌️ Express loaded')

	await websocketLoader({ socket, server })
	Logger.info('✌️ Websockets loaded')
}
