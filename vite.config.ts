import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import linaria from '@linaria/rollup'
import tsconfigPaths from 'vite-tsconfig-paths'
import css from 'rollup-plugin-css-only'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    linaria({
      include: ['**/*.{ts,tsx}'],
    }),
    css({
      output: 'styles.css',
    }),
    react(),
    eslint(),
  ],
})
