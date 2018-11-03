import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Body from './components/Body.vue'
import Nav1 from './components/Nav-1.vue'
import List from './components/List.vue'
import Detail from './components/Detail.vue'
import WaitingList from './components/WaitingList.vue'
// import purchased_item from './purchased_item'
// import {
//   Sequelize,
//   sequelize
// } from "./connections";


// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
// console.log(purchased_item.findAll())
// async function name() {
//   const purchased_item_model = await purchased_item.findAll();
//   console.log(purchased_item_model)
// }
// purchased_item_model.findAll().then(item => {
//   console.log(item)
// })
// import purchased_item from './purchased_item_2'
//  async function name() {
//   const test= await purchased_item();
//   await console.log(test)
// }
// name();

Vue.use(BootstrapVue);
Vue.component('Body', Body)
Vue.component('Nav1', Nav1)
Vue.component('List', List)
Vue.component('Detail', Detail)
Vue.component('WaitingList', WaitingList)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')