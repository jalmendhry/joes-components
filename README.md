# Local dev

Running locally can cause issues with multiple versions of react/styled-components producing an error relating to invalid hook calls.

https://github.com/facebook/react/issues/14257

To fix this locally, run the following:

```
  cd YOUR_PROJECT/
    yarn install

  cd joes-components/
    yarn install
    npm link ../path/to/your-project/node_modules/react
    npm link ../path/to/your-project/node_modules/styled-components
    yarn link

  cd YOUR_PROJECT/
    yarn link @jalmendhry1/joes-components
```

# Commands

```bash
yarn dev
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

will rebuild if you change files within src/

Then run Storybook

### Storybook

Run inside another terminal:

```bash
yarn storybook
```

This loads the stories from `./src/componetns/**/*.stories.tsx`.

## Configuration

TODO:
implement husky hooks for ESlint/Prettier/Tests

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/src
  /components/
    /YourComponent
      YourComponent.tsx         # EDIT THIS
      YourComponent.test.tsx    # EDIT THIS
      YourComponent.stories.tsx # EDIT THIS
      YourComponent.scss        # EDIT THIS
      index.ts
/.storybook
  main.js
  preview.js
.gitignore
package.json
README.md                       # EDIT THIS
tsconfig.json
```

### Rollup

uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Including Styles

There are many ways to ship styles, including with CSS-in-JS. TSDX has no opinion on this, configure how you like.

For vanilla CSS, you can include it at the root directory and add it to the `files` section in your `package.json`, so that it can be imported separately by your users and run through their bundler's loader.
