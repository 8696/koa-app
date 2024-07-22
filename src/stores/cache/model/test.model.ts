import instance from '../instance'
import Redis from 'ioredis'
class M {
  private readonly instance: Redis
  constructor() {
    this.instance = instance.getInstance()
  }
  async setTestSession(value: string) {
    return this.instance.set('username', value, 'EX', 10)
  }
  async getTestSession() {
    return this.instance.get('username')
  }
}


export default M
