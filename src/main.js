import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'

//Use packages
Vue.use(VueResource);
Vue.use(VueRouter);

//Register routes
const router = new VueRouter({
  routes: Routes
})

//Filters

Vue.filter('snippet', function(value) {
  return value.slice(0, 100) + '...';
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')