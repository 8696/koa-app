import { Controller, Get, HttpError, Ctx } from 'routing-controllers'
import { responseService } from '../service'

import { Context } from 'koa'
import http from 'http'

@Controller('/http')
export class RedisController {

  @Get('/500')
  async s500() {
    throw new HttpError(500, 'Internal Server Error')
  }

  @Get('/202')
  async s202(@Ctx() ctx: Context) {
    ctx.status = 502

    return responseService.success()
  }

  @Get('/405')
  async s405() {
    throw new HttpError(405, http.STATUS_CODES['405'])
  }
}
