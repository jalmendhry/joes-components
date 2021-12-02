import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

import commonjs from "@rollup/plugin-commonjs";

import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default [
  {
    input: "./src/index.tsx",
    // output: [
    //   {
    //     file: "dist/index.js",
    //     format: "cjs",
    //   },
    //   {
    //     file: "dist/index.es.js",
    //     format: "es",
    //     exports: "named",
    //   },
    // ],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),

      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      typescript({
        tsconfig: "./tsconfig.json",
      }),

      resolve(),
      commonjs(),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
