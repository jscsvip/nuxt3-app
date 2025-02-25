<template>
  <Head>
    <Title>{{  data?.title }}</Title>
    <Meta name="description" :content="data?.title" />
  </Head>
  <div class="p-5">
    <div v-if="pending">加载中...</div>
     <!-- 添加error显示 -->
    <div v-else-if="error">{{ (error as NuxtError).data.message }}</div>
    <div v-else>
      <h1 class="text-2xl">{{  data?.title }}</h1>
      <div v-html="data?.content"></div>
      <!-- 评论区 -->
      <div class="py-2">
          <UTextarea
            v-model="value"
            placeholder="输入评论"
          />
          <UButton @click="onSubmit">发送</UButton>
        </div>
    </div>
   
  </div>
</template>

<script setup lang="ts">
// useHead({
//   title: '文章详情'
// })
definePageMeta({
  middleware: ['auth']
})
const route = useRoute();
const fetchPost  =  () =>  $fetch(`/api/detail/${route.params.id}`);
const { data, pending, error  } = await useAsyncData(fetchPost);

const router = useRouter();
// 增加评论相关逻辑，注意登录状态的获取和使用
const value = useState("comment", () => "");
// 获取状态，转换为 Ref，其他代码无需改变
// const store = useUser1();
// const { isLogin } = storeToRefs(store)
const toast = useToast()
const onSubmit = () => {
  // if (isLogin.value) {
    // 提示用户
    toast.add({ title: '已提交评论!' })
    console.log( getCurrentInstance()?.proxy)
    // 测试无法获取
    // getCurrentInstance()?.proxy?.$toast('已提交评论!')
    // 提交留言...
    value.value = ''
  // } else {
    // 要求登录
    // router.push('/login?callback=' + route.path)
  // }
}
</script>