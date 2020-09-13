import { IProduct } from './IProduct'

export interface IOffer {
	_id: number
	name: string
	description: string
	products: IProduct[]
}
