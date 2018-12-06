<template>
  <div class="author">
    正在授权登录...
  </div>
</template>
<script>
  import {getToken,getuserInfo} from 'api/userApi'
  import {mapMutations,mapGetters} from  'vuex'
  export default {
    name:'author',
    data(){
      return {
        token:'',
        authorUrl:''
      };
    },
    computed: {
      ...mapGetters([
        'getauthor'
      ])
    },
    created(){
      let token=window.localStorage.getItem('token')  //登录状态status
      console.log(token+'本地token');
      // 检测会员有没有登录的状态
      if(!token){
        //未检测到token

        this._getauthorUrl();


      }else{

        // 如果有token 但是vuex中没有用户登录信息则做登录操作
        this.login();//获取登录信息

      }
    },
    methods: {
      ...mapMutations({
        'setopenid':'SET_OPENID',
        'steuserinfo':'SET_USERINFO',
        'setuserid':'SET_USERID'
      }),
      login () {
        //获取用户信息
        let token=window.localStorage.getItem('token');
        getuserInfo(token).then((res)=>{
            console.log(res.data.openid+'服务器存储的openid');
          if(res.ret==0){
            var openid=res.data.openid
            if(openid){
              //有openid 进入到刚开始想进入的页面中
              //有openid 进入到刚开始想进入的页面中
              this.setopenid(res.data.openid); //存储openid到状态管理器中
              this.steuserinfo(res.data);//存储用户所有信息状态管理器
              this.setuserid(res.data.user_id);//存储用户id
              // console.log(this.$store.state.user_author+'状态管理中的openid');
              this.goBeforeLoginUrl();// 页面恢复(进入用户一开始请求的页面)


            }else{
              //没有openid重新去开启授权
              window.localStorage.setItem('token','');
              this._getauthorUrl();
            }

          }else{
            window.localStorage.setItem('token','');
            this._getauthorUrl();
          }

        })


      },
      //获取token
      _getauthorUrl(){
        var _this=this
        getToken().then((res)=>{
          if(res.ret==0){
            _this.authorUrl=res.data.url
            window.localStorage.setItem('token',res.data.token) //存储token
            console.log(res.data.token+'获取token')
            console.log(_this.authorUrl+'微信授权地址')
            if(_this.authorUrl!=''){
              window.location.href=_this.authorUrl
            }else{
              console.log(res.msg)
            }
          }else{
              console.log(res.msg)
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  .author
    font-size 20px
</style>
