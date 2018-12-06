<template>
  <mu-appbar style="width: 100%;" z-depth="1" class="appBar" color="#2196f3">
    <mu-button icon slot="left" @click="history">
      <i class="iconfont icon-zuo"></i>
    </mu-button>
    <div class="navTitle">{{title}}</div>
    <mu-button icon slot="right">

    </mu-button>
  </mu-appbar>
</template>

<script>
    export default {
        name: "navbar",
        props:["title","color"],
        methods:{
          history(){
            // window.history.go(-1);
           this.$router.go(-1);
          }
        }
    }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/base"
 .appBar
   position fixed
   top 0px
   .navTitle
     font-size $font-size-medium-x
     text-align center
</style>
