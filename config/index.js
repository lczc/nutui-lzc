const path = require('path')
import ComponentsPlugin from 'unplugin-vue-components/webpack'

const NutUIResolver = () => {
  return name => {
    if (name.startsWith('Nut')) {
      const partialName = name.slice(3)
      return {
        name: partialName,
        from: '@nutui/nutui-taro',
        sideEffects: `@nutui/nutui-taro/dist/packages/${partialName.toLowerCase()}/style`
      }
    }
  }
}

const config = {
  projectName: 'yellow-helmet-client',
  date: '2023-1-29',
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  designWidth(input) {
    // 配置 NutUI 375 尺寸
    if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
      return 375
    }
    // 全局使用 Taro 默认的 750 尺寸
    return 750
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: ['@tarojs/plugin-html'],
  // 给 sass-loader 传递选项 ！！！！ 按需加载方式必须配置
  sass: {
    resource: [path.resolve(__dirname, '..', 'src/style/custom_theme.scss')],
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
  },
  defineConstants: {},
  alias: {
    // 配置taro项目的绝对路径
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/models': path.resolve(__dirname, '..', 'src/models'),
    '@/stores': path.resolve(__dirname, '..', 'src/stores'),
    '@/service': path.resolve(__dirname, '..', 'src/service'),
    '@/api': path.resolve(__dirname, '..', 'src/service/api'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/constants': path.resolve(__dirname, '..', 'src/constants'),
    '@/router': path.resolve(__dirname, '..', 'src/router'),
    '@/pages': path.resolve(__dirname, '..', 'src/pages'),
    '@/style': path.resolve(__dirname, '..', 'src/style'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils')
  },
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'vue3',
  compiler: 'webpack5',
  cache: {
    enable: true // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    webpackChain(chain) {
      chain.merge({
        module: {
          rule: {
            mjsScript: {
              test: /\.mjs$/,
              include: [/pinia/],
              use: {
                babelLoader: {
                  loader: require.resolve('babel-loader')
                }
              }
            }
          }
        }
      })
      chain.plugin('unplugin-vue-components').use(
        ComponentsPlugin({
          resolvers: [NutUIResolver()],
          dts: './types/components.d.ts'
        })
      )
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      }
    },
    miniCssExtractPluginOption: {
      ignoreOrder: true
    }
  },
  h5: {
    webpackChain(chain) {
      chain.plugin('unplugin-vue-components').use(
        ComponentsPlugin({
          resolvers: [NutUIResolver()],
          dts: './types/components.d.ts'
        })
      )
    },
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
