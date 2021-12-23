const currentAuth = ['admin'] // 根据用户设置
export { currentAuth }

export function getCurrentAuthority() {
  return currentAuth
}

// 校验用户权限
export function check(authority: any) {
  const current = getCurrentAuthority()
  return current.some((item) => authority.includes(item))
}

// 用户登录
export function isLogin() {
  const current = getCurrentAuthority()
  return current && current[0] !== 'guest'
}
