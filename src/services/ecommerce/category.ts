// Dependency Injection
import { Service, Inject } from 'typedi'
// Decorators
import { EventDispatcher, EventDispatcherInterface } from 'decorators/eventDispatcher'
// Models
import categoriesModel from 'models/ecommerce/categories'

@Service()
export default class Categories {
	constructor(
		@Inject('logger') private logger,
		@EventDispatcher() private eventDispatcher: EventDispatcherInterface
	) {}

	public async getCategories() {
		try {
			// const { data: { jwt }} = await this.generateToken()
			const categories = await categoriesModel.find({})

			return categories
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

	public async getProductsByCategory(payload) {
		const {
			params: { id: category }
		} = payload
		try {
			// const { data: { jwt }} = await this.generateToken()
			const products = categoriesModel.findById(category)

			return products
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

	public async createCategory(payload) {
		const { body: newCategory } = payload
		try {
			// const { data: { jwt }} = await this.generateToken()
			const categoryCreated = await categoriesModel.create(newCategory)

			return categoryCreated
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

	public async editCategory(payload) {
		const { body: newData } = payload
		const {
			params: { id: category }
		} = payload

		try {
			// const { data: { jwt }} = await this.generateToken()
			const categoryEdited = await categoriesModel.findByIdAndUpdate(category, newData)

			return categoryEdited
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

	public async deleteCategory(payload) {
		const {
			params: { id: category }
		} = payload
		try {
			// const { data: { jwt }} = await this.generateToken()
			const categoryDeleted = await categoriesModel.findByIdAndRemove(category)

			return categoryDeleted
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}
}
