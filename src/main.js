import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronUp, faCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {i18n} from '@/plugins/i18n';
library.add(faChevronDown, faChevronUp, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
