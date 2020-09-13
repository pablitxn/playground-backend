// Express
import { Router, Request, Response } from 'express'
// Services
import CategoriesService from 'services/ecommerce/category'
// Dependency Injection
import { Container } from 'typedi'

// Definitions
const route = Router()

export default (app: Router) => {
	app.use('/ecommerce', route)

	route.get('/categories', async (req: Request, res: Response) => {
		try {
			const service = Container.get(CategoriesService)
			const categories = await service.getCategories()

			res.status(200).json({
				data: categories,
				message: 'categories listed'
			})
		} catch (err) {
			res.status(500).send(err)
		}
	})

	route.get('/category/:id', async (req: Request, res: Response) => {
		try {
			const service = Container.get(CategoriesService)
			const products = await service.getProductsOfCategory(req)

			res.status(200).json({
				data: products,
				message: 'list products of category'
			})
		} catch (err) {
			res.status(500).send(err)
		}
	})

	route.post('/add-category', async (req: Request, res: Response) => {
		try {
			const service = Container.get(CategoriesService)
			const categoryCreated = await service.createCategory(req)

			res.status(201).json({
				data: categoryCreated,
				message: 'category created'
			})
		} catch (err) {
			console.log(err)
			throw err
		}
	})

	route.patch('/edit-category/:id', async (req: Request, res: Response) => {
		try {
			const service = Container.get(CategoriesService)
			const categoryEdited = await service.editCategory(req)

			res.status(201).json({
				data: categoryEdited,
				message: 'category edited'
			})
		} catch (err) {
			res.status(500).send(err)
		}
	})

	route.delete('/delete-category/:id', async (req: Request, res: Response) => {
		try {
			const service = Container.get(CategoriesService)
			const categoryDeleted = await service.deleteCategory(req)

			res.status(200).json({
				data: categoryDeleted,
				message: 'category deleted'
			})
		} catch (err) {
			res.status(500).send(err)
		}
	})
}
