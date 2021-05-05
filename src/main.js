import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueScrollTo from 'vue-scrollto'
import store from './store'
import VueYoutube from 'vue-youtube'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VueScrollTo)
Vue.use(VueYoutube)
Vue.use(VModal)

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')