<script setup>
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <h2>输入框内容：{{ text }}</h2>
  <input v-model="text" placeholder="在这里打字...">
</template>
