const SUCCESS_CODE = 0
const SUCCESS_MESSAGE = 'success'
const ERROR_CODE = 500
const ERROR_MESSAGE = 'Error: request fail.'
const LOGOUT_CODE = 401
const LOGOUT_MESSAGE = 'Error: authorization has expired.'

export default {
  /**
   * @description 响应 JSON success 状态
   * */
  success(data: any = null) {
    return {
      data,
      code: SUCCESS_CODE,
      message: SUCCESS_MESSAGE
    }
  },
  /**
 * @description 响应 JSON error 状态
 * */
  error(message?: any, data?: any) {
    return {
      data: data || null,
      code: ERROR_CODE,
      message: message || ERROR_MESSAGE
    }
  },
  /**
 * @description 响应 JSON logout 状态
 * */
  logout() {
    return  {
      data: null,
      code: LOGOUT_CODE,
      message: LOGOUT_MESSAGE
    }
  }
}
