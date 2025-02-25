// 给组件声明一个自定义属性
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $toast: (title: string) => void
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", (vueApp) => {
    vueApp.config.globalProperties.$toast = (title: string) => {
      const toast = useToast();
      toast.add({ title })
    };
  });
});