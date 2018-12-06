<template>
    <div class="management">
      <mu-container>
        <mu-card class="itemselect">
          <div class="itemsetting" @click="tourl({path:'/home/pengList/details/settingList',query:{title:'风口开启设置'}})">
            <div>风口开启</div><div class="settingType"><div class="type">23:00</div><i class="iconfont icon-you"></i></div>
          </div>
          <div class="itemsetting" @click="tourl({path:'/home/pengList/details/settingList',query:{title:'风口关闭设置'}})">
            <div>风口关闭</div><div class="settingType"><div class="type">手动</div><i class="iconfont icon-you"></i></div>
          </div>
          <div class="itemsetting" @click="tourl({path:'/home/pengList/details/settingList',query:{title:'卷帘开启设置'}})">
            <div>卷帘开启</div><div class="settingType"><div class="type">手动</div><i class="iconfont icon-you"></i></div>
          </div>
          <div class="itemsetting" @click="tourl({path:'/home/pengList/details/settingList',query:{title:'卷帘关闭设置'}})">
            <div>卷帘关闭</div><div class="settingType"><div class="type">手动</div><i class="iconfont icon-you"></i></div>
          </div>
        </mu-card>
      </mu-container>
    </div>
</template>
<script>
    export default {
        name: "management",
        methods:{
        tourl(url){
          this.$router.push(url)
        }
       }
    }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/base"
  .management
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
