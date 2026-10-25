<script setup>
import { ref } from 'vue'
const url = ref('https://cn.vuejs.org/logo.svg')
const big = ref(true)
</script>

<template>
  <h2 :class="{ big }">我是标题，点下面按钮变大变小</h2>
  <img :src="url" alt="vue logo" width="100">
  <button @click="big = !big">切换大小</button>
</template>

<style scoped>
.big { font-size: 30px; color: green; }
</style>
