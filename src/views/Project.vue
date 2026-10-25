<script setup>
import UserCard from '../components/UserCard.vue'
import MyButton from '../components/MyButton.vue'
import Box from '../components/Box.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'

const msg = ref('')
function onBtn(data) {
  msg.value = data
}
</script>

<template>
  <h1>我的项目</h1>
  <UserCard name="张三" :age="20" />
  <UserCard name="李四" :age="21" />
  <hr>
  <MyButton @click="onBtn" />
  <p>{{ msg }}</p>
  <hr>
  <Box>
    <p>这是插槽里的内容</p>
  </Box>
  <Box>
    <p>我也在插槽里</p>
  </Box>
  <Footer />
</template>
