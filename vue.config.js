const path = require('path')
const px2rem = require('postcss-px2rem') // postcss的一个插件
const TransformModulesPlugin = require('webpack-transform-modules-plugin')

module.exports = {
    // 只能写vue封装的配置
    runtimeCompiler: true,
    css: { // 添加postcss配置
        loaderOptions: {
            postcss: {
                plugins: [
                    px2rem({
                        remUnit: 37.5 // 设计稿等分后的rem值   375/10
                    })
                ]
            }
        }
    },

    configureWebpack: { // 内部写webpack原生配置
        resolve: {
            extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
            alias: { // 路径别名(简写方式)
                // 'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配   带vue编译器
                '@': path.resolve(__dirname, 'src'),
                '@components': path.resolve(__dirname, 'src/components'),
                'cube-ui': 'cube-ui/lib'

            }
        },
         plugins: [
             // ...
             new TransformModulesPlugin()
         ]
    },

    devServer: {

    }


}