// Dependency Injection
import { Service, Inject } from 'typedi'
// Decorators
import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher'
// Models
import ProductsModel from '../models/products'

@Service()
export default class ProductsService {
	constructor(
		@Inject('logger') private logger,
		@EventDispatcher() private eventDispatcher: EventDispatcherInterface
	) {}

	public async getProduct(payload) {
		const params = { ...payload }
		// handling params..
		try {
			// const { data: { jwt }} = await this.generateToken()

			const data = {}

			return data
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

	public async getProducts() {
		try {
			const products = ProductsModel.find({})
			return products
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

	public async createProduct(payload) {
		const params = { ...payload }
		// handling params..
		try {
			// const { data: { jwt }} = await this.generateToken()

			const data = {}

			return data
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

	public async editProduct(payload) {
		const params = { ...payload }
		// handling params..
		try {
			// const { data: { jwt }} = await this.generateToken()

			const data = {}

			return data
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

	public async deleteProduct(payload) {
		const params = { ...payload }
		// handling params..
		try {
			// const { data: { jwt }} = await this.generateToken()

			const data = {}

			return data
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}
}
