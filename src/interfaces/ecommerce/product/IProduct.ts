export interface IProductImage {
	src: string
	alt: string
}

export interface IProduct {
	name: string
	slug: string
	updatedAt?: string
	description: string
	price: string
	regular_price: string
	sale_price: string
	on_sale: boolean
	related_ids: number[]
	images: IProductImage[]
}
