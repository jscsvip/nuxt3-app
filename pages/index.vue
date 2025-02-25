<template>
    <div class="flex items-center flex-col gap-2">
    <h1>技术成神-首页</h1>
        <!-- 处理加载状态 -->
        <div v-if="pending">加载中...</div>

        <!-- 处理请求错误 -->
        <div v-else-if="error" class="text-red-300">{{ error.message }}</div>

        <!-- 正常显示内容 -->
        <div v-else>
            <div v-for="post in posts" :key="post.id">
            <NuxtLink class="text-lg" :to="`/detail/${post.id}`">{{
                post.title
            }}</NuxtLink>
            <p class="text-slate-500">发布于: {{ post.date }}</p>
            </div>
            <div>当前页数:{{ page }}</div>
            <UButton @click="prev">上一页</UButton>
            <UButton @click="next">下一页</UButton>
        </div>
      <UButton>Button</UButton>

    <NuxtLink to="/blogs">博客首页</NuxtLink> <br/>
    <NuxtLink to="/blogs/1">博客详情:blogs-1</NuxtLink> <br/>
    <!-- ref与useState的区别 -->
    <Counter />
    <!-- 使用全局状态,可以看到全局的变量在不同的组件中可以共享,而ref是不共享的 -->
    <Counter2 />
    <Counter2 />
    <Counter2 />
  </div>
  {{ message }}
</template>
<script setup lang="ts">
    const { message } = await $fetch('/api/hello')
    const page = ref(1);
    const {
      data: posts,
      pending,
      error,
      refresh, // 获取刷新函数
    } = await useFetch(() => `/api/posts?page=${page.value}&size=2`); // 注意修改为工厂函数方式

    function prev() {
      page.value--;
      refresh();//刷新接口
    }

    function next() {
      page.value++;
      refresh();//刷新接口
    }
    // 使用post传递参数
    $fetch('/api/create-post', { method: 'post', body: { id: 'new id' } })
    // 使用get传递参数
    $fetch('/api/query?param1=a&param2=b')

</script>