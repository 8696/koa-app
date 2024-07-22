
import { SyncOptions } from 'sequelize'

import { UserDbModel, ApiRecordDbModel } from './model'

export default {
  async sync() {
    const syncOptions: SyncOptions = {
      alter: true
    }
    await UserDbModel.sync(syncOptions)
    await ApiRecordDbModel.sync(syncOptions)
  }
}
