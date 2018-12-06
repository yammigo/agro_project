<template>
  <div class="adduserdapen">
    <mu-container>
      <mu-card class="info-box">
        <mu-text-field v-model="name" label="大棚名称" label-float></mu-text-field>
        <br>
        <mu-text-field v-model="width" label="大棚长度" label-float suffix="m（米）"></mu-text-field>
        <br>
        <mu-text-field v-model="wide" label="大棚宽度" label-float suffix="m（米）"></mu-text-field>
        <br>
        <mu-text-field v-model="height" label="大棚高度" label-float suffix="m（米）"></mu-text-field>
        <br>
        <mu-text-field v-model="address" label="大棚地址" label-float></mu-text-field>
        <br>
        <mu-button color="primary" style="width:60%" class="submit" :disabled="false" @click="_addGreenHouse()">确认添加
        </mu-button>
      </mu-card>
    </mu-container>
  </div>
</template>
<script>
  import {addGreenHouse} from "../../api/apihttp";

  export default {
    name: "adduserdapen",
    data() {
      return {
        // 大棚信息
        name: '',
        width: '',
        wide: '',
        height: '',
        address: ''
      }
    },
    methods: {
      _addGreenHouse() {
        addGreenHouse(this.$route.query.userid, this.name, this.width, this.wide, this.height, this.address).then((res) => {
          if (res.ret == 0) {
            this.$router.go(-1)
          }
        })
      }
    }

  }
</script>

<style scoped lang="stylus">
  .adduserdapen
    padding-top 55px
    .info-box
      margin-top 10px
      padding-top 20px
      text-align center
      padding-bottom 20px
</style>
