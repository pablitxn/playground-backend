import { Router, Request, Response } from 'express'
import HelloMernService from '../../services/hello-mern'

import { Container } from "typedi"

const route = Router()

export default (app: Router) => {
  app.use("/", route)

  route.get('/products', async (req: Request, res: Response) => {
    try {
      const HelloMernServiceInstance = Container.get(HelloMernService);
      const products = await HelloMernServiceInstance.getProducts()

      res.status(200).json({
        data: products,
        message: "products listed"
      })
    } catch (err) {
      res.status(500).send(err)
    }
  })

}
