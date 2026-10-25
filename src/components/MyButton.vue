<script setup>
const emit = defineEmits(['click'])
</script>

<template>
  <button @click="emit('click', '按钮被点了！')">点我</button>
</template>
