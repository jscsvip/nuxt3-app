<script setup lang="ts">
const email = useState(() => '')
const onLogin = () => {
  $fetch('/api/login', {
    method: 'post',
    body: {
      email: email.value,
    },
  }).then((user) => {
    console.log(user)
  }).catch((err) => {
    console.log(err)
  })
}
</script>

<template>
  <div>
    <div>
      输入的邮箱{{ email }}
    </div>
    <input v-model="email" />
    <UButton @click="onLogin">
      登录
    </UButton>
  </div>
</template>
