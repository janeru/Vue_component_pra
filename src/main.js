import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component(
  'app-servers', App
)

new Vue({
  // 這裡會渲染出app的template
  render: h => h(App),
}).$mount('#app')
