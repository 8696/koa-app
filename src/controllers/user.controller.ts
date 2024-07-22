import { Controller, Get } from 'routing-controllers'
import { responseService } from '../service'
import { UserDbModel } from '../stores/db/model'

@Controller('/user')
export class RedisController {

  @Get('/get')
  async get() {
    return responseService.success()
  }

  @Get('/save')
  async save() {
    const user = new UserDbModel({
      username: 'longjinwenlongjinwenlongjinwenlongjinwenlongjinwenlongjinwenlongjinwen',
      age: '18'
    })
    await user.save()

    return responseService.success()
  }

}
