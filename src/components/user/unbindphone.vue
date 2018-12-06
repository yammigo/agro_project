<template>
  <div class="unbindPhone">
    <mu-container>
      <mu-card class="inputbox" color="#eee">
        <mu-text-field full-width v-model="phone" label="手机号"  label-float ></mu-text-field><br/>
        <mu-text-field v-model="checkCode" label="手机验证码"  label-float style="width:60%"></mu-text-field>
        <mu-button  color="primary" style="width:38%" @click="sendmsm" :disabled="btndisabled">{{codemsg}}</mu-button><br>
        <mu-button  color="primary" style="width:100%" class="submit" @click="bindUser" :disabled="commitdisable">提交</mu-button>
      </mu-card>
    </mu-container>
  </div>
</template>

<script>
  import {getPhoneCode,addUser} from "api/apihttp"
    export default {
        name: "unbindphone",
        data(){
          return{
            btndisabled:false,
            commitdisable:false,
            phone:"",
            checkCode:'',
            codemsg:'发送验证码'

          }
        },
        methods:{
          //短信倒计时
          sendms(){
            this.codemsg="已发送60"
            this.btndisabled=true
            let time=60
            let sendtime=setInterval(()=>{
              time--
              if(time==0){
                clearInterval(sendtime);
                this.btndisabled=false
                this.codemsg=`获取验证码`
                return
              }
              this.codemsg=`已发送${time}`;
            },1000)
          },
          //发送短信验证码
          sendmsm(){
            this.$loading.show('发送中...')
            getPhoneCode(this.phone).then((res)=>{
              if(res.ret==0){
                this.$loading.hide();
                this.$message.show(res.msg,'success');
                this.sendms();
              }else{
                this.$loading.hide();
                this.$message.show(res.msg,'error')
              }

            }).fail(()=>{
              alert('网络错误');
            })
          },
          //绑定用户
          bindUser(){
            this.commitdisable=true;
            this.$loading.show("提交数据中...");
            addUser(this.$store.state.userInfo.openid,this.$store.state.userInfo.user_name,this.phone,this.checkCode,this.$store.state.userInfo.address).then((res)=>{
              if(res.ret==0){
                this.$loading.hide();
                this.commitdisable=false;
                this.$message.show(res.msg,'success');
                this.$store.state.userInfo.phone=this.phone;
                this.$router.go(-1);

              }else{
                this.commitdisable=false;
                this.$message.show(res.msg,'success');
                this.$loading.hide();
              }
            })
          }
        }
    }
</script>

<style scoped lang="stylus">
  .unbindPhone
     padding-top 55px
     .inputbox
       padding 20px
       top 10px


</style>
