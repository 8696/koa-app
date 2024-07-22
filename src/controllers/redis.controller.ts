import { Controller, Get } from 'routing-controllers'
import { responseService } from '../service'
import { TestCacheModel } from '../stores/cache/model'

@Controller('/redis')
export class RedisController {

  @Get('/get')
  async get() {
    const data = await new TestCacheModel().getTestSession()

    return responseService.success(data)
  }

  @Get('/save')
  async save() {
    await new TestCacheModel().setTestSession(new Date().toString())

    return responseService.success()
  }
}
