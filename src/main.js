import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faMedium, faDiscord } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'

library.add(faCoffee)
library.add(faGithub)
library.add(faTwitter)
library.add(faMedium)
library.add(faDiscord)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

dom.watch()

new Vue({
  render: h => h(App)
}).$mount('#app')
