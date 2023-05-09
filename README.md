# `@wesbitty/storybook-theming`

Get started in Storybook 7 faster with popular styling tools.

[@wesbitty/storybook-theming](https://github.com/wesbitty/storybook-theming) addon can be used to run `postcss` preprocessor against your stories in Storybook, all css files will be treated as modules as long as they end with `.module.css`. Also, previous css configuration done to css loaders won't be override,
`i.e` if you were using `postcss-loader` or any other extra webpack loader, it will automatically be applied to css modules.

## ✨ Features

- ⚡️ storybook css modules loader
- 🎨 Provide postcss preprocessor

## 🏁 Getting Started

To get started, **install the package** as a dev dependency

npm:

```zsh
npm install -D @wesbitty/storybook-theming
```

yarn:

```zsh
yarn add -D @wesbitty/storybook-theming
```

## Configuration
- just add the following plugin on your `./storybook/main.js`:

```diff
  module.exports = {
    addons: [
+     '@wesbitty/storybook-theming',
    ]
  }
```
