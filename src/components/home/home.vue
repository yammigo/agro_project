<template>
  <div class="Home">
    <!--<mu-appbar color="primary">-->
    <!--</mu-appbar>-->
    <mu-container>
      <mu-card style="margin:auto;margin-top:10px;">
        <mu-card-header :title="this.$store.state.userInfo.nickname" :sub-title="`大棚数量${this.$store.state.userInfo.h_num}`">
          <mu-avatar slot="avatar" style="overflow:hidden">
             <img :src=this.$store.state.userInfo.headimg width="100%" height="100%">
          </mu-avatar>
        </mu-card-header>
        <div class="icon-right">
          <mu-button icon color="primary" @click="tourl('/home/userinfo')">
            <i class="iconfont icon-you"></i>
          </mu-button>
        </div>
      </mu-card>
      <mu-card style="margin-top:20px">
        <div class="weather">
          <div class="city">
             <span></span><b>{{weath.city}}</b>
          </div>
          <h1><span>{{weath.temperature}}</span><b>°</b><em>{{weath.weather}}</em></h1>
          <div class="weather_state">
            <div class="state_1">
              <span class="icon"></span><span>{{weath.winddirection}}风：<b>{{weath.windpower}}级</b></span>
            </div>
            <div class="state_2">
              <span class="icon"></span><span>相对湿度：<b>{{weath.humidity}}</b></span>
            </div>
          </div>
        </div>
      </mu-card>
      <mu-paper :z-depth="1" class="botton_nav">
        <div class="iconsetting" @click="tourl('home/pengList')">
          <mu-button icon color="primary">
            <i class="iconfont icon-dapeng"></i>
          </mu-button>
          <p>我的大棚</p>
        </div>
        <div class="iconsetting" @click="tourl('/home/management')">
          <mu-button icon color="primary">
            <i class="iconfont icon-guanli"></i>
          </mu-button>
          <p>统一管理</p>
        </div>
        <div class="iconsetting" @click="tourl('/home/bindUser')">
          <mu-button icon color="primary">
            <i class="iconfont icon-jieruguanli"></i>
          </mu-button>
          <p>申请接入</p>
        </div>
      </mu-paper>

      <mu-card style="margin-top:20px">
        <div class="staff">
          <mu-button color="primary" style="width:100%" @click="tourl({path:'/home/install'})">我是工作人员</mu-button>
        </div>
      </mu-card>

      <mu-card style="margin-top:20px">
        <div style="text-align: center" class="copyright">
            &copy;南狮科技有限公司技术支持
        </div>
      </mu-card>

    </mu-container>
  </div>
</template>

<script>
  import {getWeather,getipaddress} from "../../api/libapi";
  export default {
    name: "home",
    data(){
      return {
          weath:{}
      }
    },
    methods:{
      tourl(url){
        this.$router.push(url)
      }
    },
    created: function () {

        getWeather().then((res)=>{
             this.weath=res.lives[0]
        })
    }
  }
</script>

<style scoped lang="stylus">
  .Home
    .staff
      padding 20px
      text-align center
    .icon-right
      position absolute
      top 50%
      right 10px
      transform translateY(-50%)
    .botton_nav
      width 100%;
      height 150px;
      margin-top 10px
      position relative
      display flex
      flex-direction row
      align-items center
      justify-content space-around
    .iconsetting
      width 80px
      height 80px
      text-align center
      i
       font-size 30px
    .morecontent
       padding 20px
    .copyright
       padding 20px
       text-align center
    .weather
       height 200px
       background url("../../assets/whill.png") no-repeat;
       background-position 0 100%
       background-size 100%
       color white
       position relative
       .city
        position absolute
        right 10px
        top 10px
       h1
         height 100px;

         padding-left 20px
         span
           font-size 70px;
         b
            font-size 70px
            margin-left 10px
         em
            font-size 20px
       .weather_state
          display flex
          flex-direction row
          align-items center
          .state_1,.state_2
             display flex
             flex-direction row
             align-items center
             .icon
               display inline-block
               width 30px
               height 30px
               border-radius 50%
               margin-right 10px
               margin-left 10px
               background-image url("../../assets/bg.png")
               background-size: 200px;
          .state_1 .icon

               background-position: -84px 122px;

          .state_2 .icon

                background-position: -128px 160px;







</style>
