const markdownLoaderPlugin = require('unvue-plugin-markdown-loader')

module.exports = {
  plugins: [
    // add markdownLoaderPlugin with custom options
    // you also can use it without any options, markdownLoaderPlugin()
    markdownLoaderPlugin({
        preprocess: function (MarkdownIt, Source) {
          MarkdownIt.renderer.rules.table_open = function () {
            return '<div class="table-container"><table class="table">'
          }
          MarkdownIt.renderer.rules.table_close = function () {
            return '</table></div>'
          }
          return Source
        }
      })
  ]
}
