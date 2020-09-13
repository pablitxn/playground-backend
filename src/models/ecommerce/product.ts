import { IProduct } from 'interfaces/ecommerce/IProduct'
import mongoose, { Document } from 'mongoose'

const Product = new mongoose.Schema(
	{
		imageUrl: String,
		name: String,
		description: String,
		price: String
	},
	{ timestamps: true }
)

export default mongoose.model<IProduct & Document>('Product', Product)
