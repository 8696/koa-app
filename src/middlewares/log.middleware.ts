import { Middleware, KoaMiddlewareInterface } from 'routing-controllers'
import { Context } from 'koa'

@Middleware({ type: 'before', priority: 50 })
export default class LogMiddleware implements KoaMiddlewareInterface {
  async use(context: Context, next: () => Promise<void>): Promise<void> {
    console.log('log.middleware.start')

    // console.log(`${context.method} ${context.url}`)
    await next()
    console.log('log.middleware.end')
  }
}
