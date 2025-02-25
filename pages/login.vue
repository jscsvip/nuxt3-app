<template>
  <div>
    <UButton @click="onLogin">登录</UButton>
  </div>
</template>

<script setup lang="ts">
// 获取状态，转换为 Ref，其他代码无需改变
const store = useUser1();
const { isLogin } = storeToRefs(store)
const router = useRouter()
const route = useRoute()

const onLogin = () => {
  isLogin.value = true
  const callback= route.query.callback?.toString() || ''
  router.push(callback)
}
</script>
