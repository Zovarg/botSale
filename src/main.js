import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import { directive as onClickaway } from 'vue-clickaway'
import vueI18nEsm from "vue-i18n";
Vue.use(VueI18n)

Vue.config.productionTip = false
Vue.directive('on-clickaway', onClickaway)
const i18n = new VueI18n({

})

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
