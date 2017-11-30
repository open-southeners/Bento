const pkg = require('./package.json')

module.exports = (ctx) => ({
  // input: 'dist/bento.css',
  // output: [
  //   'dist/bento.css',
  //   'dist/bento.min.css',
  // ],
  plugins: {
    'postcss-replace': {
      data: pkg,
      commentsOnly: true
    },
    'postcss-cssnext': {}
  }
})
