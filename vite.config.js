import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 👉 把【仓库名】替换成你等下在GitHub新建仓库的名字，前后斜杠不能丢！
export default defineConfig({
  base: '/web2/',
  plugins: [vue()],
})
