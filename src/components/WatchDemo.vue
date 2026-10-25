<script setup>
import { ref, watch } from 'vue'
const name = ref('')
const msg = ref('')

watch(name, (newVal) => {
  msg.value = '你输入了：' + newVal
})
</script>

<template>
  <input v-model="name" placeholder="输入名字...">
  <p>{{ msg }}</p>
</template>
