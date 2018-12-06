<template>
    <div class="bindUser">
      <mu-container>
        <mu-card class="inputbox" color="#eee">
          <mu-text-field full-width v-model="phone" label="手机号"  label-float ></mu-text-field><br/>
          <mu-text-field full-width v-model="address" label="住址"  label-float @focus="showaddress()"></mu-text-field><br/>
          <mu-text-field full-width v-model="user_name" label="姓名"  label-float ></mu-text-field><br/>
          <mu-text-field v-model="checkCode" label="手机验证码"  label-float style="width:60%"></mu-text-field>
          <mu-button  color="primary" style="width:38%" @click="sendmsm" :disabled="btndisabled">{{codemsg}}</mu-button><br>
          <div class="menber">
          <mu-checkbox v-model="checkbox" label="用户协议"></mu-checkbox><div class="mu-checkbox " @click="openScrollDialog">查看协议</div>
          </div>
            <mu-button  color="primary" style="width:100%" class="submit" @click="bindUser" :disabled="commitdisable">提交</mu-button>
          <mu-button  color="primary" style="width:100%" class="submit" @click="toutergo">返回</mu-button>
        </mu-card>
      </mu-container>
      <mu-snackbar :position="normal.position" :open.sync="normal.open">
        {{normal.message}}
        <mu-button flat slot="action" color="white" @click="normal.open = false">关闭</mu-button>
      </mu-snackbar>
      <mu-dialog title="用户协议" width="360" scrollable :open.sync="openScroll" :esc-press-close="false" :overlay-close="false">
        <mu-list>
          此信息将记录为本平台用户，即可获得上门安装服务
          此信息将记录为本平台用户，即可获得上门安装服务
          此信息将记录为本平台用户，即可获得上门安装服务
          此信息将记录为本平台用户，即可获得上门安装服务
          v 此信息将记录为本平台用户，即可获得上门安装服务
          vv 此信息将记录为本平台用户，即可获得上门安装服务
          此信息将记录为本平台用户，即可获得上门安装服务
          此信息将记录为本平台用户，即可获得上门安装服务
          此信息将记录为本平台用户，即可获得上门安装服务
          此信息将记录为本平台用户，即可获得上门安装服务
          此信息将记录为本平台用户，即可获得上门安装服务
          此信息将记录为本平台用户，即可获得上门安装服务
          此信息将记录为本平台用户，即可获得上门安装服务
        </mu-list>
        <mu-button slot="actions" flat color="primary" @click="closeScrollDialog" >ok</mu-button>
      </mu-dialog>
      <my-address :showchose="addressshow" @getAddress="getaddress" :address="addressList" @showaddress="setstatus" @addressname="getaddressname"></my-address>
    </div>
</template>
<script>
  import {getPhoneCode} from "api/apihttp"
  import {addUser} from "../../api/userApi"
  import MyAddress from 'base/myAddress'
  export default {
        name: "bindUser",
        data () {
          return {
            //地址相关
            addressshow:false,
            msg: 'webhomenext',
            addressList:{},
            addresslistname:{},
            //地址相关end

            checkbox:false,
            user_name: '',
            checkCode: '',
            address: '',
            phone: '',
            codemsg:'获取验证码',
            btndisabled:false,
            commitdisable:false,
            //
            normal: {
              position: 'bottom',
              message: '发送成功',
              open: false,
              timeout: 1500
            },
            //弹窗层
            openScroll: false,
            ringtone: 'None',
          }
        },
      methods:{
         // 地址组件相关
        setstatus(input){
          this.addressshow=input
        },
        showaddress(){
          this.addressshow=true
          document.activeElement.blur();
        },
        getaddress(input){
          this.addressList=input
        },
        getaddressname(input){
          this.addresslistname=input
          this.address=input.province+' '+input.city+' '+input.district
        },
        // 地址组件end

        toutergo(){
          this.$router.go(-1);
        },
        //提示窗口
        openNormalSnackbar (msg) {
          this.normal.message=msg;
          if (this.normal.timer) clearTimeout(this.normal.timer);
          this.normal.open = true;
          this.normal.timer = setTimeout(() => {
             this.normal.open = false;
          }, this.normal.timeout);
        },
        //用户协议
        openScrollDialog () {
          this.openScroll = true;
        },
        closeScrollDialog () {
          this.openScroll = false;
        },
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
           getPhoneCode(this.phone).then((res)=>{
             if(res.ret==0){
               this.openNormalSnackbar(res.msg);
               this.sendms();
             }else{
               this.openNormalSnackbar(res.msg);
             }

           }).fail(()=>{
               alert('网络错误');
           })
         },
        //绑定用户
        bindUser(){
          this.commitdisable=true
            addUser(this.$store.state.openid,this.user_name,this.phone,this.checkCode,this.address,this.checkbox).then((res)=>{
                if(res.ret==0){
                  this.commitdisable=false
                  this.openNormalSnackbar(res.msg);
                }else{
                  this.commitdisable=false
                  this.openNormalSnackbar(res.msg);
                }
            }).fail(()=>{
               alert('网络错误')
              this.commitdisable=false
            })
        }

      },
      created(){

      },
      components: {
        MyAddress
      }
    }
</script>

<style scoped lang="stylus">
  .bindUser
    padding-top 55px
    .inputbox
       padding 20px
       top 10px
       .submit
         margin-top 20px
       .menber
         display flex
         flex-direction row
         align-items center
         justify-content space-between

</style>
