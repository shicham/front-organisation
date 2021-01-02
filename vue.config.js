module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/prod/' : '/dev/',
    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
  }