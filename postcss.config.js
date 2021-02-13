module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        "Android >= 4",
        "iOS >= 5"
      ],
      cascade: true
    }),
    // postcss-import 需配置在该插件前
    require('@vdian/rpx/lib/plugins/rpx')()
  ]
}