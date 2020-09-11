import { IProducts } from '../interfaces/IProducts'
import mongoose from 'mongoose'

const Products = new mongoose.Schema({
	_id: Number,
	imageUrl: String,
	name: String,
	description: String,
	price: String
})

export default mongoose.model<IProducts & mongoose.Document>('Product', Products)
