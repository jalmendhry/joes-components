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
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
        strict: false,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
        strict: false,
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
        presets: [
          "es2017",
          "es2016",
          [
            "es2015",
            {
              modules: false,
            },
          ],
        ],
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
    output: [{ file: "dist/index.d.ts" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
