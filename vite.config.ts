import { defineConfig } from 'vite'
import { crx, defineManifest } from '@crxjs/vite-plugin'

const manifest = defineManifest({
  manifest_version: 3,
  name: "文字数カウント",
  description: "テキストボックスに入力された文字数をリアルタイムにカウントします。",
  version: "1.0.0",
  icons: {
    16: 'src/assets/img/icon16.png',
    48: 'src/assets/img/icon48.png',
    128: 'src/assets/img/icon128.png'
  },
  action: {
    default_icon: 'src/assets/img/icon16.png',
    default_popup: 'src/popup/index.html'
  }
})

export default defineConfig({
  plugins: [crx({ manifest })],
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
})
