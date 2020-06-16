import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import './assets/javascript/index.js'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

const about = new Vue({
  el: '#about',
  data: {
    message: 'Hello Vue!'
  }
})

export default about;
