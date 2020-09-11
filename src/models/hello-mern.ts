import { IHelloMern } from '../interfaces/IHelloMern'
import mongoose from 'mongoose'

const HelloMern = new mongoose.Schema({
  _id: Number,
  imageUrl: String,
  name: String,
  description: String,
  price: String,
})

export default mongoose.model<IHelloMern & mongoose.Document>("Product", HelloMern)