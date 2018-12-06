<template>
    <div class="userDapen">
       <mu-container>
         <mu-card class="itemList" @click="tourl({path:'/home/install/userdapen/deviceList',query:{g_id:item.g_id,userid:userid}})" v-for="(item,index) in dapenlist" :key="index">
           <mu-ripple color="green">
             <p>大棚名称:<span>{{item.g_name}}</span></p><br>
             <p>大棚地址:<span>{{item.address}}</span></p><br>
             <p>大棚长度:<span>{{item.length}}</span></p><br>
             <p>大棚高度:<span>{{item.height}}</span></p><br>
             <p>大棚宽度:<span>{{item.width}}</span></p><br>
             <p>创建时间:<span>{{item.create_time}}</span></p>
           </mu-ripple>
         </mu-card>
       </mu-container>
      <div>
        <div class="addDapen" @click="tourl({path:'/home/install/userdapen/add',query:query})">
          <mu-ripple color="black">
           + 添加大棚
          </mu-ripple>
        </div>
      </div>
    </div>
</template>

<script>
  import {getList} from 'api/apihttp'
    export default {
        name: "userDapen",
        data(){
          return {
             dapenlist:'',
             query:this.$route.query,
             userid:this.$route.query.userid
          }
        },
        methods:{
          tourl(url){
            this.$router.push(url)
          }
        },
        created(){
          getList(this.$route.query.userid).then((res)=>{
            if(res.ret==0){
                 // this.$message(res.msg,'success');
                 this.dapenlist=res.data
            }
          })
        }
    }
</script>

<style scoped lang="stylus">
  @import "~common/stylus/base"
  .userDapen
    padding-top 55px
    padding-bottom 50px
    .itemList
        padding 10px
        margin-top 10px
        p
          font-size $font-size-medium
          color $font-title

          span
            display inline-block
            font-size $font-size-small-s
            margin-left 20px
    .addDapen
      background:white
      position fixed
      bottom 0
      width 100%
      height 40px
      line-height 40px
      text-align center

</style>
