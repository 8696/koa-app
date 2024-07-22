import { Model, DataTypes } from 'sequelize'
import instance from '../instance'

interface AttributesType {
  /** 接口地址 */
  api: string
  /** 请求方法 */
  method: string
  /** 请求头 JSON */
  header: string
  /** 响应数据 */
  response_data: string
}

class M extends Model<AttributesType> {
}

M.init(
  {
    api: {
      comment: '接口地址',
      type: DataTypes.TEXT
    },
    method: {
      comment: '请求方法',
      type: DataTypes.STRING(12)
    },
    header: DataTypes.TEXT,
    response_data: {
      comment: '响应数据',
      type: DataTypes.TEXT
    }
  },
  {
    tableName: 'api_record',
    comment: 'API 接口请求记录',
    sequelize: instance.getInstance(),
    updatedAt: false,
    createdAt: 'create_time'
  }
)

export default M

