import { Middleware, KoaMiddlewareInterface } from 'routing-controllers'
import { Context } from 'koa'

@Middleware({ type: 'before', priority: 9999 })
export default class LogMiddleware implements KoaMiddlewareInterface {
  async use(context: Context, next: () => Promise<void>): Promise<void> {
    // console.log('cors.middleware.start')
    if (context.headers.origin) {
      context.set('Access-Control-Allow-Origin', context.headers.origin)
      context.set('Access-Control-Allow-Headers', 'Content-Type')
      context.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
      context.set('Access-Control-Allow-Credentials', 'true')
    }
    await next()
    // console.log('cors.middleware.end')
  }
}
