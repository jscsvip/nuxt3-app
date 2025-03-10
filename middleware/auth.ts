export default defineNuxtRouteMiddleware((to, from) => {
  const store = useUser1();
  // 未登录，导航到登录页
  if (!store.isLogin) {
    return navigateTo("/login?callback=" + to.path)
  }
})
