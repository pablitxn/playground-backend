// Dependency Injection
import { Service, Inject } from 'typedi'
// Decorators
import {
	EventDispatcher,
	EventDispatcherInterface
} from '../../decorators/eventDispatcher'
// Models
import ProductsModel from '../../models/ecommerce/products'

@Service()
export default class ProductsService {
	constructor(
		@Inject('logger') private logger,
		@EventDispatcher() private eventDispatcher: EventDispatcherInterface
	) {}

	public async getProducts() {
		try {
			// const { data: { jwt }} = await this.generateToken()
			const products = await ProductsModel.find({})

			return products
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

	public async getProductById(payload) {
		const {
			params: { id: productId }
		} = payload
		try {
			// const { data: { jwt }} = await this.generateToken()
			const product = ProductsModel.findById(productId)

			return productId
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

	public async createProduct(payload) {
		const { body: product } = payload
		try {
			// const { data: { jwt }} = await this.generateToken()
			const productCreated = await ProductsModel.create(product)

			return productCreated
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

	public async editProduct(payload) {
		const { body: product } = payload
		const {
			params: { id: productId }
		} = payload

		try {
			// const { data: { jwt }} = await this.generateToken()
			const productEdited = await ProductsModel.findByIdAndUpdate(productId, product)

			return productEdited
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

	public async deleteProduct(payload) {
		const {
			params: { id: productId }
		} = payload
		try {
			// const { data: { jwt }} = await this.generateToken()
			const productEdited = await ProductsModel.findByIdAndRemove(productId)

			return productEdited
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}
}
