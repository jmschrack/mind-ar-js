const path =require('path');
const webpack = require('webpack');
module.exports=  {
  entry: {
    /* 'mindar-image': './src/image-target/index.js', */
    'mindar-image-aframe': './src/image-target/aframe.mjs',
    /* 'mindar-image-three': './src/image-target/three.js',
    'mindar-face': './src/face-target/index.js', */
    'mindar-face-aframe': './src/face-target/aframe.mjs',
    /* 'mindar-face-three': './src/face-target/three.js' */
  },
  mode: 'production',
  target:'web',
  
  output: {
    filename: '[name].prod.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
    
  },
  externals: {three: 'three'},
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      }
    ],
  },
  resolve: {
    alias:{
      "mindar-face":path.resolve(__dirname, 'dist/mindar-face.prod.cjs'),
      "mindar-image":path.resolve(__dirname, 'dist/mindar-image.prod.cjs'),
    },
    fallback: {
      fs: false,
      path: false,
      crypto: false,
      zlib:false,
      http:false,
      https:false,
      stream:false,
      buffer:false,
      util:false,
      url:false,
    }
  },
  plugins: [],
  optimization: {
     
     minimize: true,
    /*splitChunks: {
      chunks: 'all',
    }, */
  },
};
