import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss"

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: 'dist',
        format: "cjs"
      },
      {
        dir: 'dist',
        format: "esm",
        exports: 'named'
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true
      }),

      babel({
        exclude: "node_modules/**",
        babelHelpers:'bundled',
        extensions: [".js", ".ts", ".tsx"],
        

      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          declarationDir: 'dist'
        },
        
      })
    ],
    external: ['react', 'react-dom','react-router-dom', 'react/jsx-runtime']


  }
]


// export default [
//   {
//     input: "src/index.ts",
//     output: [
//       {
//         dir: 'dist',
//         format: "cjs",
//         sourcemap: true,
//       },
//       {
//         dir: 'dist',
//         format: "esm",
//         sourcemap: true,
//       }
//     ],
//     plugins: [
//       resolve({
//         extensions: [".js", ".jsx", ".ts", ".tsx"],
//         skip: ["react", "react-dom"],
//       }),
//       commonjs(),
//       typescript({
//         tsconfig: "./tsconfig.json",
//         exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
//       }),
//       postcss({
//         extensions: [".css"],
//         inject: true,
//         extract: false
//       }),
//     ],
//     external: ["react", "react-dom", "react/jsx-runtime"],
//   },
//   {
//     input: "src/index.ts",
//     output: [{ dir: "dist", format: "esm" }],
//     plugins: [dts()],
//     external: [/\.css$/],
//   },
// ];