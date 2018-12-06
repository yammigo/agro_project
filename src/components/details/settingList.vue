<template>
    <div class="settingList">
      <mu-container>
        <mu-card class="itemselect">
          <mu-tabs :value.sync="value"  full-width>
          <mu-tab>手动</mu-tab>
          <mu-tab>定时</mu-tab>
          </mu-tabs>
          <div class="mangslide">
            <div style="float:left;" class="itemname">
              设定值：<span class="val">{{slideColor.value}}%</span>
            </div>
            <mu-slider class="demo-slider" thumb-color="orange" v-model="slideColor.value" style="width:60%;left:20px;"></mu-slider>
          </div>
          <component v-bind:is="currentTabComponent"></component>
          </mu-card>
          <mu-card @click="tourl({path:'/home/pengList/details/equipment',query:{}})">
        </mu-card>
      </mu-container>
    </div>
</template>

<script>
  import Manual from './chilren/Manual'
  import Timeing from "./chilren/settime"
    export default {
        name: "settingList",
        data(){
          return {
            slideColor:{
              color:'red',
              value:100
            },
            componentList: ['Manual', 'Timeing'],
            value: 1
          }
        },
      methods: {
        tourl(url) {
          this.$router.push(url)
        }
      },
      computed: {
        currentTabComponent() {
          return this.componentList[this.value]
        }
      },
      created(){

      },
      components: {
        Manual,
        Timeing
      },
      beforeRouteEnter (to, from, next) {
          to.meta.title=to.query.title;
          next();
      },

    }
</script>

<style scoped lang="stylus">
 .settingList
   padding-top 70px
   .mangslide
      margin-top 40px;
      .itemname
        line-height: 22px;
        padding-left 10px;
        color #666666
        .val
           display inline-block;
           width 40px;
           font-size 20px;
           margin-left 3px;
</style>
