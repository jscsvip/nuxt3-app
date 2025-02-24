<template>
  <div>
    <nav>
      <img class="avatar  inline-block" src="~/assets/afei.jpg" alt="avatar" >
      导航栏
      <img class="w-[50px] border-[1px] border-slate-300 rounded-full inline-block" src="/favicon.ico" alt="avatar" >
    </nav>
    <slot />
  </div>
</template>
<style scoped>
.avatar {
  width: 50px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 50%;
}
</style>