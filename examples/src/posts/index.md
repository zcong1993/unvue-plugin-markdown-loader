# index

## unvue plugin markdown-loader

### source

```js
module.exports = (markdownLoaderOptions) => {
  return ctx => {
    ctx.extendConfig(config => {
      const cfg = config.module
        .rule('markdown')
          .test(/\.md$/)
          .use('vue-markdown')
            .loader('vue-markdown-loader')
      if (markdownLoaderOptions) {
        cfg.options(markdownLoaderOptions)
      }
      cfg.end()
        .end()
    })
  }
}
```

## API
| name |  | age |
|------|-------|---------|-------|--------|
| zcong1993 |  | 18 |

