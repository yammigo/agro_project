import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Author from 'components/author'
import Home from "components/home/home"
import PengList from "components/dapengList/pengList"
import Details from "components/details/details"
import SettingList from "components/details/settingList"
import Equipment from "components/details/equipment"
import Management from 'components/management/management'
import BindUser from "components/user/bindUser"
import Install from "components/servicClinet/install"
import UserDapen from "components/servicClinet/userDapen"
import AddDapen from "components/servicClinet/adduserdapen"
import UserDevice from "components/servicClinet/deviceList"
import AddDevice from "components/servicClinet/addDevice"
import UserInfo from "components/user/userinfo"
import Unbindphone from "components/user/unbindphone"
import NotFound from "components/404"
Vue.use(Router)
export default new Router({
  mode: 'hash',
  routes: [
    { path: '/',
      redirect: '/home'
    },
    {
      path:'/hello',
      name:'HelloWorld',
      component:HelloWorld
    },
    {
      path:"/author",
      name:'author',
      component:Author
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/home/userinfo',
      component:UserInfo,
      meta:{
        title:'用户信息',
        navbar:true
      }
    },
    {
      path:'/home/userinfo/unbindphone',
      component:Unbindphone,
      meta:{
        title:'更改手机号',
        navbar:true
      }
    },
    {
      path:'/home/install',
      component:Install,
      meta:{
        title:"接入设备",
        navbar:true
      }
    },
    {
      path:'/home/install/userdapen/deviceList',
      component:UserDevice,
      meta:{
        title:"大棚设备",
        navbar:true
      }

    },
    {
      path:'/home/install/userdapen',
      component:UserDapen,
      meta:{
        title:"用户大棚",
        navbar:true
      }
    },
    {
      path:'/home/install/userdapen/add',
      component:AddDapen,
      meta:{
        title:'添加大棚',
        navbar:true
      }

    },
    {
      path:'/home/install/userdapen/deviceList/add',
      component:AddDevice,
      meta:{
        title:'添加设备',
        navbar:true
      }
    },
    {
      path:"/home/pengList",
      name:"pengList",
      component:PengList,
      meta:{
        title:"大棚列表",
        navbar:true
      }
    },
    {
      path:'/home/pengList/details',
      name:'details',
      component:Details,
      meta:{
        title:"大棚详情",
        navbar:true
      }
    },
    {
      path:'/home/pengList/details/settingList',
      component:SettingList,
      meta:{title:'大棚设置',navbar:true}
    },
    {
      path:'/home/pengList/details/equipment',
      name:'equipment',
      component:Equipment,
      meta:{
        title:"大棚设备",
        navbar:true
      }
    },
    {
      path:'/home/management',
      name:'management',
      component:Management,
      meta:{
        title:'统一管理',
        navbar:true
      }
    },
    {
      path:'/home/bindUser',
      component:BindUser,
      meta:{
        title:'绑定信息',
        navbar:true
      }

    },
    {
      path:'*',
      component:NotFound
    }

  ]
})
