<script setup>
import { ref } from 'vue'
const count = ref(0)
function add() { count.value++ }
</script>

<template>
  <h2>点按钮计数：{{ count }}</h2>
  <button @click="add">点我+1</button>
  <button @click="count = 0">归零</button>
</template>
