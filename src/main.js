import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import Ninjas from './components/Ninjas.vue'
// Vue.component('ninjas', Ninjas);

new Vue({
  render: h => h(App),
}).$mount('#app')