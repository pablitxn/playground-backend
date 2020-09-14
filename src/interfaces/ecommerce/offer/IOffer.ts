import { IProduct } from 'interfaces/ecommerce'

export interface IOffer {
	name: string
	description: string
	products: IProduct[]
}
