import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import linaria from '@linaria/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), linaria(), eslint()],
})
