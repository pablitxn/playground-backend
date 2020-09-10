import { Service, Inject } from 'typedi'
import axios from 'axios'
import { EventDispatcher, EventDispatcherInterface } from "../decorators/eventDispatcher"

@Service()
export default class HelloMernService {
  constructor(
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface
  ) { }

  public async getProducts() {
    try {
      // const { data } = await this.generateToken();
      return axios({
        url: '',
        method: 'GET'
      })
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

      const { data } = await axios({
        url: '',
        method: 'POST',
        data: {
          ...params,
          // jwt
        }
      })

      return data;
    } catch (err) {
      this.logger.error(err)
      throw err
    }
  }
}