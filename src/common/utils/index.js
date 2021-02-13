// ua: user-agent, http://npm.vdian.net/package/@vdian/user-agent
// cookie: http://npm.vdian.net/package/@vdian/cookie
// url: http://npm.vdian.net/package/@vdian/url
// 更多工具方法：http://npm.vdian.net/package/@vdian/sheer
import { cookie, ua, url } from '@vdian/sheer'
import { goLogin, isLogin } from './login'
import request from './request'

export default {
  request,
  isLogin,
  goLogin,
  ua,
  cookie,
  url
}
