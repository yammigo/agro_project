<template>
  <div class="hello">
    <div @click="showaddress()">
      打开
    </div>
    <my-address :showchose="addressshow" @getAddress="getaddress" :address="addressList" @showaddress="setstatus"></my-address>
  </div>
</template>
<script>
  import MyAddress from 'base/myAddress'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        addressshow:false,
        msg: 'webhomenext',
        addressList:{}
      }
    },
    methods: {
      setstatus(input){
        this.addressshow=input
      },
      showaddress(){
        this.addressshow=true
      },
      getaddress(input){
        this.addressList=input
      }
    },
    components: {
      MyAddress
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .hello
    font-size 12px
    .icon-shouye
      font-size 35px
    .msg
      font-size 12px
</style>
