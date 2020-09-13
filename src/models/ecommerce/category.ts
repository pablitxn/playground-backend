import { ICategory } from 'interfaces/ecommerce/ICategory'
import mongoose, { Document } from 'mongoose'

const Category = new mongoose.Schema(
	{
		name: String,
		imageUrl: String,
		products: Array
	},
	{ timestamps: true }
)

export default mongoose.model<ICategory & Document>('Category', Category)
