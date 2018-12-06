<template>
  <div class="install">
    <mu-container>
      <mu-card class="search_user">
        <mu-text-field v-model="phone" label="输入手机号" label-float>
          <template slot="append">
            <div @click="search()">
              <i class="iconfont icon-soushuo"></i>搜索
            </div>
          </template>
        </mu-text-field>
        <br/>
      </mu-card>
      <mu-scale-transition>
        <mu-card class="user_info" v-show="infoshow">
          <div class="headimg"><img :src="info.headimg" width="100%"/></div>
          <div class="contain">
            <div class="info"><b>客户姓名:</b><i>{{info.user_name}}</i></div>
            <br>
            <div class="info"><b>客户住址:</b><i>{{info.address}}</i></div>
            <br>
            <div class="info"><b>客户电话:</b><i>{{info.phone}}</i></div>
            <br>
            <div class="info"><b>大棚数量:</b><i>{{info.h_num}}</i></div>
            <br>
            <div class="sendMsM">
              <mu-text-field v-model="checkCode" label="手机验证码" label-float style="width:60%"></mu-text-field>
              <mu-button color="primary" style="width:38%" @click="sendmsm" :disabled="btndisabled">{{codemsg}}
              </mu-button>
            </div>
            <mu-button color="primary" style="width:100%" class="submit" @click="confirmAddDev"
                       :disabled="commitdisable">确认接入
            </mu-button>
          </div>
        </mu-card>
      </mu-scale-transition>
    </mu-container>
    <mu-snackbar :position="normal.position" :open.sync="normal.open">
      {{normal.message}}
      <mu-button flat slot="action" color="white" @click="normal.open = false">关闭</mu-button>
    </mu-snackbar>
  </div>
</template>

<script>
  import {confirmAdd, getPhoneCode, findUser} from "api/apihttp"

  export default {
    name: "install",
    data() {
      return {
        info: {},
        //需要发送的数据
        phone: '',
        checkCode: '',
        codemsg: "发送验证码",
        btndisabled: false,
        commitdisable: false,
        usermessage: {},
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
        //info显示状态
        infoshow: false


      }
    },
    methods: {
      //搜索用户
      search() {
        this.$loading.show('正在查找...')
        findUser(this.phone).then((res) => {
          if (res.ret == 0) {
            this.infoshow = true;
            this.info = res.data;
            this.$store.state.clientInfo = res.data
            this.$loading.hide();
            this.$message.show(res.msg, 'success');
          } else {
            this.$loading.hide();
            this.$message.show(res.msg, 'error');
          }
        });
      },
      //提示窗口
      openNormalSnackbar(msg) {
        this.normal.message = msg;
        if (this.normal.timer) clearTimeout(this.normal.timer);
        this.normal.open = true;
        this.normal.timer = setTimeout(() => {
          this.normal.open = false;
        }, this.normal.timeout);
      },
      //短信倒计时
      sendms() {
        this.codemsg = "已发送60"
        this.btndisabled = true
        let time = 60
        let sendtime = setInterval(() => {
          time--
          if (time == 0) {
            clearInterval(sendtime);
            this.btndisabled = false
            this.codemsg = `获取验证码`
            return
          }
          this.codemsg = `已发送${time}`;
        }, 1000)
      },
      //发送短信验证码
      sendmsm() {
        getPhoneCode(this.info.phone).then((res) => {
          if (res.ret == 0) {
            this.openNormalSnackbar(res.msg);
            this.sendms();
          } else {
            this.openNormalSnackbar(res.msg);
          }
        }).fail(() => {
          alert('网络错误');
        })
      },
      //确认接入
      confirmAddDev() {
        this.commitdisable = true
        this.$loading.show('正在提交..')
        confirmAdd(this.info.phone, this.checkCode).then((res) => {
          if (res.ret == 0) {
            this.$loading.hide();
            this.commitdisable = false
            this.openNormalSnackbar(res.msg);
            this.$router.push({path: '/home/install/userdapen',query:{userid:this.$store.state.clientInfo.user_id}});
          } else {
            this.$loading.hide();
            this.commitdisable = false
            this.openNormalSnackbar(res.msg);
          }
        }).fail(() => {
          alert('网络错误')
          this.$loading.hide();
          this.commitdisable = false
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .install
    padding-top 55px
    .search_user
      top 30px
      display flex
      flex-direction row
      justify-content center
    .user_info
      top 40px
      padding 20px
      .title
        text-align center
        margin-bottom 30px
      .headimg
        width 60px;
        height 60px;
        border-radius 50%;
        border solid 2px green
        overflow hidden
        margin auto
      .contain
        font-size 16px
        margin-top 10px
        .info
          height 40px
          display flex
          flex-direction row
          align-items center
          i
            margin-left 10px
            font-size 14px

</style>
