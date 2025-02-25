<template>
  <div class="p-4">

    
    useState定义的Counter(含缓存): {{ counter }} 使用ref定义CounterRef: {{ counterRef }}
    <div class="mt-2">
      <UButton @click="counter++; counterRef++;">+</UButton>
      <UButton @click="counter--; counterRef--;">-</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const counterRef = ref(Math.round(Math.random() * 1000));
const counter = useState("counter", () => Math.round(Math.random() * 1000));
</script>
