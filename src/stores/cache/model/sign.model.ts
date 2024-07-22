import instance from '../instance'
import Redis from 'ioredis'
class M {
  private readonly instance: Redis
  constructor() {
    this.instance = instance.getInstance()
  }
}


export default M
