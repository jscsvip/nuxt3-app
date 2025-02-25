<template>
    <div class="flex items-center flex-col gap-2">
    <h1>技术成神-首页</h1>
    <div>
      <UButton>Button</UButton>
    </div>
    <NuxtLink to="/detail">Detail Page</NuxtLink> <br/>
    <NuxtLink to="/detail-1">路由参数:detail 1</NuxtLink> <br/>
    <NuxtLink to="/blogs">博客首页</NuxtLink> <br/>
    <NuxtLink to="/blogs/1">博客详情:blogs-1</NuxtLink> <br/>
  </div>
  {{ message }}
</template>
<script setup lang="ts">
    const { message } = await $fetch('/api/hello')
</script>