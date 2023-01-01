const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
      ? '/TES2023Seniors/dist/'
      : '/',
  transpileDependencies: [
    'vuetify'
  ]
})
