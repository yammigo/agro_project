<template>
  <mu-fade-transition>
    <div class="loading">
      <mu-circular-progress class="pressloading"color="green" :stroke-width="7" :size="56"></mu-circular-progress>
    </div>
  </mu-fade-transition>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped lang="stylus">
 .loading
    position fixed
    left 0
    right 0
    bottom 0
    top 0
    z-index 999
    background rgba(255,255,255,0.5)
    .pressloading
       position absolute
       left 50%
       top 50%
       transform translateX(-50%)
</style>
