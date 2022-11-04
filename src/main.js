import Vue from 'vue'
import router  from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

//设置基础值
axios.defaults.baseURL = '/api'; // 接口代理//根据前端的跨越方式做调整 /api/a/b => /a/b
axios.defaults.timeout = 8000; //超时时间
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data  //获取接口返回值
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){  //未登录状态码，自己定义
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
})

Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
