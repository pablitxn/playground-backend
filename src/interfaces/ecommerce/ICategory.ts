import { IProduct } from './IProduct'

export interface ICategory {
	_id: number
	name: string
	imageUrl: string
	products: IProduct[]
}
