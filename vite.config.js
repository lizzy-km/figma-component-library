import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss"

export default defineConfig({
  plugins: [
    react(),
    postcss({
      plugins: [],
      minimize: true
    }),

    babel({
      exclude: "node_modules/**",
      prsets: ['@babel/preset-react', '@babel/preset-typescript', '@babel/preset-env']
    }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      compilerOptions: {
        declarationDir: 'dist/types'
      }
    })
  ], 
  build: {
    lib: {
      // entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'QuixUI',
      formats: ['es', 'cjs'],
      fileName: (format) =>
        format === 'es'
          ? 'index.es.js'
          : 'index.cjs.js',
      entry:'src/index.ts',
      
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
})
