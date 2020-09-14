import { ICategory } from 'interfaces/ecommerce'
import mongoose, { Document } from 'mongoose'

const Category = new mongoose.Schema(
	{
		id: Number,
		name: String,
		slug: String,
		description: String,
		parent: Number,
		count: Number,
		image: {
			id: Number,
			src: String
		}
	},
	{ timestamps: true }
)

export default mongoose.model<ICategory & Document>('Category', Category)
