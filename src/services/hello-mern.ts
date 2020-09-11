import { Service, Inject } from 'typedi'
import { EventDispatcher, EventDispatcherInterface } from "../decorators/eventDispatcher"
// model
import HelloMernModel from "../models/hello-mern"

@Service()
export default class HelloMernService {
  constructor(
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface
  ) { }

  public async getProducts() {
    try {
      const data = HelloMernModel.find({})
      console.log("get?", data)
      return data
    } catch (err) {
      this.logger.error(err)
      throw err
    }
  }

  public async createProduct(payload) {
    const params = { ...payload }
    // handling params..
    try {
      // const { data: { jwt }} = await this.generateToken()

      const data = {}

      return data;
    } catch (err) {
      this.logger.error(err)
      throw err
    }
  }
}