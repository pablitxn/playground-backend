import { IProducts } from '../interfaces/IProducts'
import mongoose from 'mongoose'

const Products = new mongoose.Schema(
	{
		imageUrl: String,
		name: String,
		description: String,
		price: String
	},
	{ timestamps: true }
)

export default mongoose.model<IProducts & mongoose.Document>('Product', Products)
