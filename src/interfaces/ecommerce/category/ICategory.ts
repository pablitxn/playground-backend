import { IProduct } from 'interfaces/ecommerce'

export interface ICategory {
	name: string
	slug: string
	description: string
	parent: number
	count: number
	image: {
		src: string
	}
	products: IProduct[]
}
