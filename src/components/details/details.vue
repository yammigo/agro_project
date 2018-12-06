<template>
  <div class="details">
    <mu-container>
      <mu-card>
        <mu-ripple color="green">
          <div class="item">
            <p>大棚名称:<i>蔬菜1号大棚</i></p>
            <br>
            <p>大棚温度:<i>30C°</i></p>
            <br>
            <p>卷帘状态:<i :style="{color:state?'green':'#2b2b2b'}">{{state?'卷起':'放下'}}</i></p>
            <br>
            <p>风口状态:<i :style="{color:state1?'green':'#2b2b2b'}">{{state1?'开启':'关闭'}}</i></p>
          </div>
        </mu-ripple>
      </mu-card>
      <mu-card class="itemselect">
        <div class="itemsetting" @click="tourl({path:'/home/pengList/details/settingList',query:{title:'风口开启设置'}})">
          <div>风口开启</div><div class="settingType"><div class="type">23:00</div><i class="iconfont icon-you"></i></div>
        </div>
        <div class="itemsetting" @click="tourl({path:'/home/pengList/details/settingList',query:{title:'风口关闭设置'}})">
          <div>风口开启</div><div class="settingType"><div class="type">手动</div><i class="iconfont icon-you"></i></div>
        </div>
        <div class="itemsetting" @click="tourl({path:'/home/pengList/details/settingList',query:{title:'卷帘开启设置'}})">
          <div>卷帘开启</div><div class="settingType"><div class="type">手动</div><i class="iconfont icon-you"></i></div>
        </div>
        <div class="itemsetting" @click="tourl({path:'/home/pengList/details/settingList',query:{title:'卷帘关闭设置'}})">
          <div>卷帘关闭</div><div class="settingType"><div class="type">手动</div><i class="iconfont icon-you"></i></div>
        </div>
      </mu-card>
      <mu-card @click="tourl({path:'/home/pengList/details/equipment',query:{}})">
      <mu-ripple color="black">
      <div class="item look" style="width:100%;text-align:center;">
      查看大棚设备
      </div>
      </mu-ripple>
      </mu-card>
    </mu-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        state:true,
        state1:false

      }
    },
    methods:{
      tourl(url){
        this.$router.push(url)
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/base"
  .details
    padding-top 55px
    padding-bottom 10px
    .navTitle
      font-size 16px
      text-align center
    .look
      font-size $font-size-medium
    .itemselect
      margin-top 20px
      padding 10px
      .itemsetting
         display flex
         height 40px
         line-height 40px
         justify-content space-between

         border-bottom  dashed 1px grey

         padding-left 10px
      .itemsetting:last-child
           border-bottom  dashed 0px grey
         .settingType
           display flex
           justify-content space-between

    .item
      padding 20px
      margin-top 20px
      p
        font-size $font-size-medium
        color $font-title
        i
          font-size $font-size-small-s
          margin-left 20px
</style>
