# unvue-plugin-markdown-loader

[![NPM version](https://img.shields.io/npm/v/unvue-plugin-markdown-loader.svg?style=flat)](https://npmjs.com/package/unvue-plugin-markdown-loader) [![NPM downloads](https://img.shields.io/npm/dm/unvue-plugin-markdown-loader.svg?style=flat)](https://npmjs.com/package/unvue-plugin-markdown-loader) [![Build Status](https://img.shields.io/circleci/project/zcong1993/unvue-plugin-markdown-loader/master.svg?style=flat)](https://circleci.com/gh/zcong1993/unvue-plugin-markdown-loader)

## Install

```bash
yarn add unvue-plugin-markdown-loader --dev
```

## Usage

About `unvue` see [egoist/unvue](https://github.com/egoist/unvue), and [offical docs](https://egoistian.com/unvue/#/).

```js
// in your unvue.config.js
const unvuePluginMarkdownLoader = require('unvue-plugin-markdown-loader')

module.exports = {
  plugins: [
    // add markdownLoaderPlugin
    // you can also add some custom options
    markdownLoaderPlugin()
  ]
}
```

For more details can see [example](https://github.com/zcong1993/unvue-plugin-markdown-loader/tree/master/examples), more about `vue-markdown-loader` please see [QingWei-Li/vue-markdown-loader](https://github.com/QingWei-Li/vue-markdown-loader).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**unvue-plugin-markdown-loader** © [zcong1993](https://github.com/zcong1993), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by zcong1993 with help from contributors ([list](https://github.com/zcong1993/unvue-plugin-markdown-loader/contributors)).

> [github.com/zcong1993](https://github.com/zcong1993) · GitHub [@zcong1993](https://github.com/zcong1993)
