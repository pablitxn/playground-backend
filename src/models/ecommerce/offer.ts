import { IOffer } from 'interfaces/ecommerce/IOffer'
import mongoose, { Document } from 'mongoose'

const Offer = new mongoose.Schema({
	name: String,
	description: String,
	products: Array
})

export default mongoose.model<IOffer & Document>('Offer', Offer)
