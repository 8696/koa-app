import Redis from 'ioredis'

import { logService } from '../../service'

class R {
  private readonly instance: Redis
  constructor() {
    this.instance = new Redis({
      lazyConnect: true,
      retryStrategy: (times: number)  => {
        return Math.min(times * 500, 10000)
      }
    })
    this.instance.on('error', logService.error)
  }
  public async connect() {
    await this.instance.connect()
  }
  public getInstance() {
    return this.instance
  }
}

export default new R()
