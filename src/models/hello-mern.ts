import { IHelloMern } from '../interfaces/IHelloMern'
import mongoose from 'mongoose'

const HelloMern = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: [true, "Please enter a valid imageUrl"],
      index: true // que es esto???
    },
    name: {
      type: String,
      required: [true, "Please enter a valid name"],
    },
    description: {
      type: String,
      required: [true, "Please enter a valid description"],
    },
    price: {
      type: String,
      required: [true, "Please enter a valid price"],
    }
  }
)

export default mongoose.model<IHelloMern & mongoose.Document>("HelloMern", HelloMern)