import { useKoaServer } from 'routing-controllers'
import Koa from 'koa'
import path from 'path'
// import { ApiErrorMiddleware, ApiRecordMiddleware } from '../middlewares'
const useControllers = (app: Koa) => {

  useKoaServer(app, {
    routePrefix: '/api',
    controllers: [`${__dirname  }/*.controller.*s`],
    middlewares: [path.resolve(__dirname, '../middlewares/*.middleware.*s')],
    // middlewares: [ApiRecordMiddleware, ApiErrorMiddleware],
    defaultErrorHandler: false,
    cors: true
  })

}

export default useControllers
