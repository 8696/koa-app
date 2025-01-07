import { useKoaServer } from 'routing-controllers'
import Koa from 'koa'
import path from 'path'
const useControllers = (app: Koa) => {

  useKoaServer(app, {
    routePrefix: '/api',
    controllers: [`${__dirname  }/*.controller.*s`],
    middlewares: [path.resolve(__dirname, '../middlewares/*.middleware.*s')],
    defaultErrorHandler: false
  })

}

export default useControllers
