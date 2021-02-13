import Login from '@vdian/login'

function isLogin() {
  return Login.isLogin()
}

function goLogin() {
  const url = Login.login({
    environment: '$$_ENVIRONMENT_$$',
    device: 1
  })
  window.location.href = window.spider.transferActionBy(url, {
    actionName: '登录'
  })
}

export { isLogin, goLogin }
