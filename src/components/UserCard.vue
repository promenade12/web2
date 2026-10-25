<script setup>
defineProps({
  name: String,
  age: Number
})
</script>

<template>
  <div style="border:1px solid #000; padding:10px; margin:5px;">
    <p>名字：{{ name }}</p>
    <p>年龄：{{ age }}</p>
  </div>
</template>
