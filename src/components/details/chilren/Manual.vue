<template>

  <div class="Manual">
    <!--手动任务-->
       <div class="M-setting">
         <mu-button large fab :color='state?"green":"#666"' @click="">
           <i class="iconfont icon-kaiguan"></i>
         </mu-button>
         <div class="state" :style="{color:state?'green':'#666'}">{{state?'开启状态':'关闭状态'}}</div>
         <div class="waring">
           <i style="color:red">*提示：</i>这里的开关将立即生效!
         </div>
       </div>

  </div>
</template>

<script>
    export default {
        name: "Manual",
        data(){
          return {
            state:false,
            normal: {
              checkbox: true,
              radio: 1,
              switch1:true,
            }
          }
        }

    }
</script>

<style scoped lang="stylus">
.Manual
   .M-setting
     padding 20px
     display flex
     display flex
     flex-direction column
     justify-content center
     align-items center
     .icon-kaiguan
       font-size 40px
     .waring
        margin-top 20px
        font-size 12px
     .state
        margin-top 20px
        font-size 16px

</style>
