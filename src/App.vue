<template>
  <div id="app">
    <Loading v-if="this.$store.state.shoprogress"></Loading>
    <mu-slide-top-transition><appbar v-show="this.$route.meta.navbar" :title="this.$route.meta.title"></appbar></mu-slide-top-transition>
    <div class="wapcontain">
    <mu-slide-left-transition>
     <router-view class="mainbox"></router-view>
    </mu-slide-left-transition>
    </div>
  </div>
</template>
<script>
  import LineProgress from 'base/progress'
  import appbar from 'base/navbar'
  import {mapGetters} from "vuex"
  import Loading from "base/loading"
export default {
  name: 'App',
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      "progress"
    ])
  },
  created() {

  },
  components: {
    LineProgress,
    appbar,
    Loading
  }
}
</script>

<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width 100%
  height 100%
  .progress
    position absolute
    top 0
    z-index 999
    width 100%
  .wapcontain
     position relative
     height 100%
     width 100%
     overflow hidden
     max-width 720px
     margin auto
     .mainbox
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        overflow-y auto
        -webkit-transition: -webkit-transform .4s cubic-bezier(.55,0,.1,1)
        transition: -webkit-transform .4s cubic-bezier(.55,0,.1,1)
        transition: transform .4s cubic-bezier(.55,0,.1,1)
        transition: transform .4s cubic-bezier(.55,0,.1,1)
        -webkit-transform .4s cubic-bezier(.55,0,.1,1)
        /*will-change: transform*/
        color: #3c3c3c
        -webkit-overflow-scrolling: touch


</style>
