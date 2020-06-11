module.exports = {
  parser: 'src/sugarss',
  plugins: [
    require('precss')({}),
    require('postcss-easy-import')({ extensions: ['.sss'] }),
    require('postcss-mixins')({ mixinsDir: './src/sugarss/mixins' }),
    require('postcss-functions')({ glob: './src/functions' }),
    require('postcss-color-function')({ preserveCustomProps: true }),
    require('postcss-contrast')({}),
    require('postcss-preset-env')({ preserve: true }),
    require('postcss-bem')({ defaultNamespace: undefined, style: 'suit' }),
    require('postcss-map')({ basePath: './src/maps', maps: [] }),
    require('mdcss')({ theme: require('mdcss-theme-github') }),
    require('lost')
  ],
}
