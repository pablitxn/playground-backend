import { ICategory } from 'interfaces/ecommerce'
import mongoose, { Document } from 'mongoose'

const Category = new mongoose.Schema(
	{
		name: String,
		slug: String,
		description: String,
		parent: Number,
		count: Number,
		products: Array,
		image: {
			src: String
		}
	},
	{ timestamps: true }
)

export default mongoose.model<ICategory & Document>('Category', Category)
