// Express
import { Router, Request, Response } from 'express'
// Services
import ProductsService from '../../services/products'
// Dependency Injection
import { Container } from "typedi"

// Definitions
const route = Router()

export default (app: Router) => {
  app.use("/", route)

  // route.get('/products/:id', async (req: Request, res: Response) => {
  //   try {
  //     const productServiceInstance = Container.get(ProductsService);
  //     const products = await productServiceInstance.getProduct()

  //     res.status(200).json({
  //       data: products,
  //       message: "products listed"
  //     })
  //   } catch (err) {
  //     res.status(500).send(err)
  //   }
  // })

  route.get('/products', async (req: Request, res: Response) => {
    try {
      const productServiceInstance = Container.get(ProductsService);
      const products = await productServiceInstance.getProducts()

      res.status(200).json({
        data: products,
        message: "products listed"
      })
    } catch (err) {
      res.status(500).send(err)
    }
  })

  route.post('/add-product', async (req: Request, res: Response) => {
    const { body: product } = req
    try {
      const productServiceInstance = Container.get(ProductsService);
      const createProduct = await productServiceInstance.createProduct({ product })

      res.status(201).json({
        data: createProduct,
        message: "product created"
      })
    } catch (err) {
      console.log(err)
      throw err
    }
  })

  // route.put('/products/:id', async (req: Request, res: Response) => {
  //   try {
  //     const productServiceInstance = Container.get(ProductsService);
  //     const productEdited = await productServiceInstance.editProduct()

  //     res.status(200).json({
  //       data: productEdited,
  //       message: "product was edited"
  //     })
  //   } catch (err) {
  //     res.status(500).send(err)
  //   }
  // })

  // route.delete('/products/:id', async (req: Request, res: Response) => {
  //   try {
  //     const productServiceInstance = Container.get(ProductsService);
  //     const productDeleted = await productServiceInstance.deleteProduct()

  //     res.status(200).json({
  //       data: productDeleted,
  //       message: "product was deleted"
  //     })
  //   } catch (err) {
  //     res.status(500).send(err)
  //   }
  // })

}
