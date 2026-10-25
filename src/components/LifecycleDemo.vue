<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  alert('页面加载完成了！这个组件刚显示出来')
})
</script>

<template>
  <h2>我刚加载出来，你看到弹窗了吗？</h2>
</template>
