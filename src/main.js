// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'jquery'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import "lib-flexible/flexible"
import FastClick from 'fastclick'
import museUi from 'muse-ui';
import Loading from 'base/lib/index'
import Message from 'base/lib/Mssage.js'
import "common/css/reset.css";
import "muse-ui/dist/muse-ui.css";
import "common/font/iconfont.css";

window.$ = $
FastClick.attach(document.body);
Vue.use(museUi);
Vue.use(Loading);
Vue.use(Message);
//授权成功后的数据清理
// 登录后跳转方法
Vue.prototype.goBeforeLoginUrl = () => {
  let url = window.localStorage.getItem('beforeLoginUrl');
  console.log('检查内存中的url'+url);
  if (!url || url.indexOf('/author') != -1) {
    window.localStorage.setItem('token', '')//清空浏览器缓存token
    router.push('/home')
  } else {
    if (url == '/') {
      url = '/home'
    }
    // window.localStorage.setItem('beforeLoginUrl', '')
    window.localStorage.setItem('token', '')//清空浏览器缓存token
    console.log('进入存储的url' + url+'token');
    router.push(url)
  }
}
//ajax全局拦截器
$.ajaxSetup({
  timeout: 10000,
  beforeSend(xhr) {
    Vue.$loading.show();
  },
  complete: function (xhr, status) {
    Vue.$loading.hide();
  },
  success: function (result) {
    if (result.ret == 0) {
      Vue.$message.show(result.msg,'success');
      Vue.$loading.hide();
    } else {
      if(result.status==0){

      }else{
        Vue.$loading.hide();
        // Vue.$message.show(result.msg, 'error');
      }

    }

  },
  error: function (xhr, status, error) {
    console.log(error + '网络请求错误' + xhr.status);
  }
});
router.beforeEach((to, from, next) => {
  let openid = store.getters.getauthor;
  console.log('openid:'+openid);
  console.log('开始进入导航'+to.path);
  openid=true;
  if (!openid && to.path != '/author') {
    // 第一次进入项目
    console.log('开始进入授权页面')
    if(to.path!='/author/'){
      window.localStorage.setItem("beforeLoginUrl", to.fullPath);
    }
    console.log(window.localStorage.getItem("beforeLoginUrl"));
    router.push('/author');
  }

  if (to.path == '/author' && openid) {
    // 用户使用后退返回到授权页，则默认回到首页
      next('/home');
  }

  console.log('授权成功');
  next();

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
