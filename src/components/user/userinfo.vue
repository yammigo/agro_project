<template>
  <div class="userInfo">
    <mu-container>
      <mu-card class="info-box">
        <mu-list>
          <mu-list-item button :ripple="true" class="listitem">
            <mu-list-item-title>昵称</mu-list-item-title>
            <mu-list-item-action>
             {{this.$store.state.userInfo.nickname}}
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item button :ripple="true" class="listitem">
            <mu-list-item-title>性别</mu-list-item-title>
            <mu-list-item-action>
              {{this.$store.state.userInfo.sex?'男':'女'}}
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item button :ripple="true" class="listitem" @click="tourl({path:'/home/userinfo/unbindphone'})">
            <mu-list-item-title>电话</mu-list-item-title>
            <mu-list-item-action class="itemmsg">
             <span>{{this.$store.state.userInfo.phone}}</span><i class="iconfont icon-you"></i>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
      </mu-card>
    </mu-container>
  </div>

</template>

<script>
  export default {
    name: "userinfo",
    data(){
      return{

      }

    },
    methods:{
      tourl(url){
        this.$router.push(url);
      }
    }
  }
</script>

<style scoped lang="stylus">
 .userInfo
   padding-top 55px
   .info-box
     top 20px
     .listitem
       border-bottom solid 1px #eeeeee
     .listitem:last-child
       border-bottom solid 0px #eeeeee
     .itemmsg
       width 50%
       flex-direction row
       align-items center
 .mu-item-action
   white-space nowrap
</style>
