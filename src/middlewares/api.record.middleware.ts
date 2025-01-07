import { Middleware, KoaMiddlewareInterface } from 'routing-controllers'
import { Context } from 'koa'
import { ApiRecordDbModel  } from '../stores/db/model'
import { asyncRun } from '../utils'

@Middleware({ type: 'before', priority: 200 })
export default class ApiErrorMiddleware implements KoaMiddlewareInterface {
  async use(context: Context, next: () => Promise<void>): Promise<void> {
    await next()
    const model = new ApiRecordDbModel({
      api: context.request.path,
      method: context.method,
      header: JSON.stringify(context.request.headers),
      response_data: JSON.stringify(context.body)
    })
    asyncRun(model.save, model)
  }
}
