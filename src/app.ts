import 'reflect-metadata'

import Koa from 'koa'

import address from 'address'

import logService from './service/log.service'

import * as config from './config'

import db from './stores/db/instance'

import cache from './stores/cache/instance'

import useControllers from './controllers'

import useStatic from './static'


const start = async () => {
  const app = new Koa()

  // 连接数据库
  await db.connect()

  // 连接 redis
  await cache.connect()

  // 使用路由控制器
  useControllers(app)

  // 使用静态资源
  useStatic(app)

  // 监听服务
  app.listen(config.SERVER_PORT)
}

start()
  .then(() => {
    logService.info('----------------------')
    logService.info('----------------------')
    logService.info('----------------------')
    logService.info('----------------------')
    logService.info('')
    logService.info('服务启动完成！！！')
    logService.info(`启动环境：${config.FEATURE_ENV}`)
    logService.info('启动配置：')
    logService.info(`${JSON.stringify(config, null, '  ')}`)
    logService.info(`监听地址：http://${address.ip()}:${config.SERVER_PORT}`)
    logService.info('')
    logService.info('----------------------')
    logService.info('----------------------')
    logService.info('----------------------')
    logService.info('----------------------')
  })
  .catch(e => {
    logService.error('启动失败')
    logService.error(e)
  })
