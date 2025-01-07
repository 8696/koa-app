import { Middleware, KoaMiddlewareInterface } from 'routing-controllers'
import { Context } from 'koa'

@Middleware({ type: 'before', priority: 500 })
export default class LogMiddleware implements KoaMiddlewareInterface {
  async use(context: Context, next: () => Promise<void>): Promise<void> {
    await next()
  }
}
