import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('../modules', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  console.log("=====")
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)

    if (matched && matched.length > 1) {
      const locale = matched[1]
      console.log(key,locales(key))
      let keyMessage = key.split('/')[1];
      
      if(messages[locale]){
        messages[locale][keyMessage]=locales(key)
      }else{
        messages[locale] = {}
        messages[locale][keyMessage]=locales(key)
      }
      
    }
  })
  console.log("=====")
console.log("messages",messages)
  return messages
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})