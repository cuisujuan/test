/*
 * @vbuilder.config.js
 */

// vbuilder 文档：http://vbuilder-doc.daily.vdian.net/vbuilder/doc/default-vue-scaffold-config.html

module.exports = ({ userFolder, srcFolder, buildFolder, currentEnv, webpack, webpackDevServer }) => {
    const VueLoaderPlugin = require('vue-loader/lib/plugin')

    return {
        buildFolder: './build',

        // debugPort: 9003, // 调试端口号，默认 9000

        replace: {
            $$_THOR_HOST_$$: {
                // "dev-daily": "//thor.daily.weidian.com",
                "dev-daily": "//h5.dev.weidian.com:7000",
                "dev-pre": "//thor.pre.weidian.com",
                "dev-prod": "//thor.weidian.com",

                // 发布相关
                "build-daily": "//thor.daily.weidian.com",
                "build-pre": "//thor.pre.weidian.com",
                "build-prod": "//thor.weidian.com"
            },
            $$_ENVIRONMENT_$$: {
                "dev-daily": 1,
                "dev-pre": 2,
                "dev-prod": 3,

                // 发布相关
                "build-daily": 1,
                "build-pre": 2,
                "build-prod": 3
            },
        },

        px2rem: {
            open: false, // 如果要开启，需要设置为 true
            loader: 'px2rem-loader', // 开发者在当前目录需要自行安装 px2rem-loader: npm i px2rem-loader
            options: {
                remUnit: 75
            }
        },

        // 可以合并到 webpack 的配置，按照 webpack 的配置风格
        webpackConfig: {
            resolve: {
                alias: {
                    vue: 'vue/dist/vue.esm.js'
                }
            },
            plugins: [
                // 请确保引入这个插件！
                new VueLoaderPlugin()
            ]
        },
        // html 创建或修改后的回调函数，参数为数组，数组项为 html 文件地址
        onHtmlBuild(htmlFileArray) {
            // console.log(htmlFileArray);
        },

        // 启用 rpx 单位的适配方案
        rpx: true 
        // 启动 rem 转为 rpx
        // remToRpx: true,
        // https: {
        //     domain: "h5.dev.weidian.com" // 本地开发域名
        // },
    };
};

module.exports.vbuilderScaffold = '@vdian/mechanic@4.3.19-beta';
