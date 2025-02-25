<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
    <UNotifications />

  </div>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (s) => {
    return s ? `${s} - 技术成神` : "技术成神";
  },
});
</script>
