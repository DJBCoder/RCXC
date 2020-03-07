import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import commanderData from '@/utils/commander'
import gunnerData from '@/utils/gunner'
import driverData from '@/utils/driver'

Vue.config.productionTip = false

let app = new Vue({
  router,
  store,
  data() {
    return {
      commanderData,
      gunnerData,
      driverData
    }
  },
  created() {
    console.log(JSON.stringify(this.commanderData))
    console.log(JSON.stringify(this.gunnerData))
    console.log(JSON.stringify(this.driverData))
  },
  render: h => h(App)
}).$mount('#app')

window.setCommander = function(jsonData) {
  let obj = JSON.parse(jsonData)
  Object.keys(obj).forEach( key => {
    Vue.set(app.commanderData, key, obj[key])
  })
}

window.setGunner = function(jsonData){
  let obj = JSON.parse(jsonData)
  Object.keys(obj).forEach( key => {
    Vue.set(app.gunnerData, key, obj[key])
  })
}

window.setDriver = function(jsonData){
  let obj = JSON.parse(jsonData)
  Object.keys(obj).forEach( key => {
    Vue.set(app.driverData, key, obj[key])
  })
}


// const msg = {
//   header: {
//     from: '12',
//     to: '12'
//   },
//   body: {
//     codec: '123',
//     content: {

//     }
//   }
// }

// console.log(JSON.stringify(msg))


// {"header":{"from":"12","to":"12"},"body":{"codec":"123","content":{}}}

// window.setGunner(JSON.stringify(jsonData))
