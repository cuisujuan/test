import { network } from '@vdian/sheer'
import * as login from './login'

export default function request(opts) {
  return network
    .request(opts.url, {
      method: opts.method || 'get',
      data: {
        param: opts.data || {}
      }
    })
    .then((response) => {
      console.log('response', response)
      // 请求正常返回且 status.code === 0
      return Promise.resolve(response)
    })
    .catch((errorResponse) => {
      // 请求正常返回但 status.code !== 0，则 reject(response)
      // 网络异常、接口异常或者返回响应不是JSON, 为了统一响应格式，方便业务处理，则 reject( { status: { code: -1 }, result: null } )
      const code = errorResponse && errorResponse.status && errorResponse.status.code
      if (code === 2) {
        // 未登录
        login.goLogin()
      } else {
        return Promise.reject(errorResponse)
      }
    })
}
