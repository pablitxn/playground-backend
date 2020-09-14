import { IProduct } from 'interfaces/ecommerce'
import mongoose, { Document } from 'mongoose'

const Product = new mongoose.Schema(
	{
		name: String,
		slug: String,
		description: String,
		price: String,
		regular_price: String,
		sale_price: String,
		on_sale: Boolean,
		related_ids: Array,
	},
	{ timestamps: true }
)

export default mongoose.model<IProduct & Document>('Product', Product)
