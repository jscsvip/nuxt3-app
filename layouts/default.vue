<template>
  <div>
    <nav
      class="border-b border-slate-200 px-5 py-2 flex items-center justify-between"
    >
      <h1 class="text-2xl font-bold">技术成神-Nuxt3</h1>
      <img
        class="w-[50px] border-[1px] border-slate-300 rounded-full inline-block"
        src="~/assets/afei.jpg"
        alt="avatar"
      />
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