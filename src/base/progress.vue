<template>
    <div class="progressbar">
      <mu-flex class="demo-linear-progress">
        <mu-linear-progress :value="linear" mode="determinate" color="black"></mu-linear-progress>
      </mu-flex>
    </div>
</template>

<script>
    export default {
        name: "progress",
      data () {
        return {
          linear: 10
        }
      },
      created () {
        this.timer = setInterval(() => {
          console.log('正在加载');
          this.linear += 10;
          if (this.linear > 100) this.linear = 0;
        },500)
      },
      beforeDestroy () {
          this.linear=100;
          console.log('加载完成')
        if (this.timer) clearInterval(this.timer);
      }

    }
</script>

<style scoped>

</style>
