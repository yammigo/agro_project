<template>
  <div class="equipment">
    <mu-container>
      <mu-card>
        <mu-ripple color="green">
          <div class="item">
            <p>设备名称:<i>1号设备</i></p>
            <br>
            <p>设备编号:<i>AR123457</i></p>
            <br>
            <p>设备状态:<i>正常</i></p>
            <br>
            <p>设备类型:<i>温控计</i></p>
          </div>
        </mu-ripple>
      </mu-card>
    </mu-container>
  </div>
</template>

<script>
    import Navbar from 'base/navbar'
    export default {
        name: "equipment",
        components:{
          Navbar
        }
    }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/base"
  .equipment
    padding-top 55px
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
