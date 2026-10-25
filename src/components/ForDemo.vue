<script setup>
import { ref } from 'vue'
const list = ref(['苹果', '香蕉', '橙子', '葡萄'])
</script>

<template>
  <h2>我喜欢的水果：</h2>
  <ul>
    <li v-for="item in list" :key="item">{{ item }}</li>
  </ul>
</template>
