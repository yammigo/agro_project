<template>
  <div class="deviceList">
    <mu-container>
        <mu-card class="DevItem">
          <mu-ripple v-for="(item,index) in devicedata" :key="index">
          <p>设备名称:<i>1号设备</i></p>
          <br>
          <p>设备编号:<i>AR123457</i></p>
          <br>
          <p>设备状态:<i>正常</i></p>
          <br>
          <p>设备类型:<i>温控计</i></p>
          </mu-ripple>
        </mu-card>
    </mu-container>
    <div class="addDevice" @click="tourl({path:'/home/install/userdapen/deviceList/add',query:{g_id:g_id}})">
      <mu-ripple color="black">
        + 添加设备
      </mu-ripple>
    </div>
  </div>
</template>

<script>
  import {userdevList} from 'api/clientApi'
  export default {
    name: "deviceList",
    data() {
      return {
        g_id:'',
        devicedata:''
      }
    },
    methods:{
      tourl(url){
        this.$router.push(url)
      },
      _adddevice(){

      }
    },
    created(){
      this.g_id=this.$route.query.g_id
      userdevList(this.g_id).then((res)=>{
         if(res.ret==0){
            this.devicedata=res.data
         }else{
            this.$message.show(res.msg,'error')
         }
         console.log(res.data)
      })
    }
  }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/base"
  .deviceList
    padding-top 55px
    .addDevice
      background:white
      position fixed
      bottom 0
      width 100%
      height 40px
      line-height 40px
      text-align center
    .DevItem
      padding 20px
      margin-top 20px
      p
        font-size $font-size-medium
        color $font-title
        i
          font-size $font-size-small-s
          margin-left 20px

</style>
