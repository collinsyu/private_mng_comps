var CopyWebpackPlugin = require('copy-webpack-plugin')

plugins: [

  new CopyWebpackPlugin([
    { from: 'src/*.less', to: 'lib/', flatten: false }
  ])
]
