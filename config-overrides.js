const path = require('path')
const { injectBabelPlugin } = require('react-app-rewired')
const proxy = require('http-proxy-middleware')

const resolve = (url) => {
  return path.resolve(__dirname, './', url)
}


  
  module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  
    config.resolve.alias = {
      '@': resolve('src'),
      'styles': resolve('src/assets/styles'),
      'images': resolve('src/assets/images'),
      'pages': resolve('src/pages'),
      'components': resolve('src/components')
    }
    return config;
  };
  
 

