// Loaders
import dependencyInjectorLoader from './dependencyInjector'
import mongooseLoader from './mongoose'
import expressLoader from './express'
import Logger from './logger'

export default async ({ expressApp }) => {
	const mongoConnection = await mongooseLoader()
	Logger.info('DB connected successfully!')

	const ProductsModel = {
		name: 'ProductsModel',
		model: require('../models/products').default
	}

	await dependencyInjectorLoader({
		mongoConnection,
		models: [ProductsModel]
	})
	Logger.info('mongoose models successfully injected into DI container')

	await expressLoader({ app: expressApp })
	Logger.info('✌️ Express loaded')
}
