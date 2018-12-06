<template>
  <div class="pengList">
    <mu-container>
      <mu-card v-for="(item,index) in list" :key="index" @click="tourl('/home/pengList/details')">
        <mu-ripple>
          <div class="item">
            <p>大棚名称:<i>{{item.g_name}}</i></p>
            <br>
            <p>大棚温度:<i :class="rollstate(item.roll_status)">{{item.roll_status}}C°</i></p>
            <br>
            <p>卷帘状态:<i :class="inside(item.temperature_inside)">{{item.temperature_inside?'开启':'关闭'}}</i></p>
            <br>
            <p>风口状态:<i :class="wind(item.wind_status )">{{item.wind_status?'开启':'关闭'}}</i></p>
          </div>
        </mu-ripple>
      </mu-card>
    </mu-container>
  </div>
</template>

<script>
  import {greenList} from 'api/clientApi'

  export default {
    name: "pengList",
    data() {
      return {
        list: ""
      }
    },
    methods: {
      tourl(url) {
        this.$router.push({path: url, query: {dapengId: 1}});
      }
    },
    computed: {
      rollstate: function () {
        return function(args){
         var statename= args>50?'state3':args>40?'state2':args>30?'state1':args<0?'state2':''
          return [statename]
        }
      },
      inside:function(){
        return function(args){
            var statename= args?'state1':'state3'
            return [statename]
        }
      },
      wind:function(){
        return function(args){
          var statename= args?'state1':'state3'
          return [statename]
        }
      }

      // inside: function (agrs) {
      //   return {
      //
      //   }
      // },
      // wind(agrs) {
      //   return {
      //
      //   }
      // }
    },
    created() {
      greenList(this.$store.state.userid).then((res) => {
        if (res.ret == 0) {
          this.$message.show('加载完成','success');
          this.list = res.data;
        }
      })
    },
    beforeDestroy() {
      this.$store.state.shoprogress = false
    }
  }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/base"
  .pengList
    padding-top 55px
    .navTitle
      font-size 16px
      text-align center
    .item
      padding 20px
      margin-top 20px
      p
        font-size $font-size-medium
        color $font-title
        i
          font-size $font-size-small-s
          margin-left 20px
        .state1
          color $font-state1
        .state2
          color $font-state2
        .state3
          color $font-state3
        .state4
          color $font-state4
</style>
