<script setup>
import { ref } from 'vue'
const show = ref(true)
</script>

<template>
  <button @click="show = !show">显示/隐藏</button>
  <p v-if="show">你能看到我！</p>
  <p v-else>我藏起来了</p>
</template>

