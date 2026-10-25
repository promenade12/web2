<script setup>
import { ref, computed } from 'vue'
const price = ref(10)
const count = ref(2)
const total = computed(() => price.value * count.value)
</script>

<template>
  <p>单价：<input v-model.number="price" type="number"></p>
  <p>数量：<input v-model.number="count" type="number"></p>
  <p>总价：{{ total }} 元</p>
</template>
