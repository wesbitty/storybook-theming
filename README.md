# Wesbitty Preset Css Modules Plugin

This plugin will add CSS Modules support for Storybook, CSS files will be treated
as modules as long as they end with `.module.css`.

Also, this plugin will respect any previous configuration done to css loaders,
basically means that, if you were using `postcss-loader` or any other extra
webpack loader, it will be also applied to css modules.

For using it:
1. run `npm install -D @wesbitty/postcss-preset-modules` or `yarn add -D @wesbitty/postcss-preset-modules`.
1.just add the following plugin on your `./storybook/main.js`:

```diff
  module.exports = {
    addons: [
+     '@wesbitty/postcss-preset-modules',
    ]
  }
```
