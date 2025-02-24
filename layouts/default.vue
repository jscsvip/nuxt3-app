<template>
  <div>
    <nav>
      <img class="avatar" src="~/assets/afei.jpg" alt="avatar" >
      导航栏
      <img class="avatar" src="/favicon.ico" alt="avatar" >
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