module.exports = markdownLoaderOptions => {
  return ctx => {
    ctx.extendConfig(config => {
      const cfg = config.module
        .rule('markdown')
          .test(/\.md$/)
          .use('vue-markdown')
            .loader('vue-markdown-loader')

      // add custom options
      if (markdownLoaderOptions) {
        cfg.options(markdownLoaderOptions)
      }

      // end
      cfg.end()
        .end()
    })
  }
}
