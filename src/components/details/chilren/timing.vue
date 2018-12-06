<template>
  <div class="Timeing">
    <!--定时任务-->
    <div class="T-setting">
        <div class="setTime" @click="openSimpleDialog(1)"><span>选择卷帘开启时间:</span><span>{{time1.startTime.Hours?time1.startTime.Hours:'00'}}:{{time1.startTime.Minutes?time1.startTime.Minutes:'00'}}</span>
        </div>
        <div class="setTime" @click="openSimpleDialog(2)"><span>选择卷帘关闭时间:</span><span>{{time1.endTime.Hours?time1.endTime.Hours:'00'}}:{{time1.endTime.Minutes?time1.endTime.Minutes:'00'}}</span>
        </div>
        <div class="setTime" @click="openSimpleDialog(3)"><span>选择风口开启时间:</span><span>{{time2.startTime.Hours?time2.startTime.Hours:'00'}}:{{time2.startTime.Minutes?time2.startTime.Minutes:'00'}}</span>
        </div>
        <div class="setTime" @click="openSimpleDialog(4)"><span>选择风口关闭时间:</span><span>{{time2.endTime.Hours?time2.endTime.Hours:'00'}}:{{time2.endTime.Minutes?time2.endTime.Minutes:'00'}}</span>
        </div>
    </div>
    <mu-dialog :open.sync="openSimple">
      <div slot="title" style="width:100%;font-size:14px;text-align:center">请选择一个时间</div>
      <mu-time-picker @change='gettime' style="width:100%" :no-display="!display" :view-type="viewType"
                      :time.sync="time" :format="type" :landscape="landscape"></mu-time-picker>
      <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">关闭</mu-button>
    </mu-dialog>
  </div>
</template>

<script>
  export default {
    name: "timing",
    data() {
      return {
        typeTime: '',
        //类型
        time: new Date(),
        landscape: false,
        display: true,
        type: '24hr',
        viewType: 'list',
        //时间选择器
        openSimple: false,
        time1: {
          startTime: {
            Hours: '',
            Minutes: '',
            time: new Date()
          },
          endTime: {
            Hours: '',
            Minutes: '',
            time: new Date()
          }

        },
        time2: {
          startTime: {
            Hours: '',
            Minutes: '',
            time: new Date()
          },
          endTime: {
            Hours: '',
            Minutes: '',
            time: new Date()
          }
        }
      };
    },
    methods: {
      setTime(timeType, time) {
        if(new Date(time).getHours()<10){
          timeType.Hours = "0"+new Date(time).getHours();
        }else{
          timeType.Hours = new Date(time).getHours();
        }
        if (new Date(time).getMinutes() < 10) {
          timeType.Minutes = "0" + new Date(time).getMinutes();
        } else {
          timeType.Minutes = new Date(time).getMinutes();
        }
        timeType.time = time;
      },
      gettime(time) {
        //时间设置
        if (this.typeTime == 1) {
          this.setTime(this.time1.startTime, time);
        }
        if (this.typeTime == 2) {
          this.setTime(this.time1.endTime, time);
        }
        if (this.typeTime == 3) {
          this.setTime(this.time2.startTime, time);
        }
        if (this.typeTime == 4) {
          this.setTime(this.time2.endTime, time);
        }
      },
      openSimpleDialog(type){
        this.typeTime = type;
        if (type == 1) {
          this.time = this.time1.startTime.time
        }
        if (type == 2) {
          this.time = this.time1.endTime.time
        }
        if (type == 3) {
          this.time = this.time2.startTime.time
        }
        if (type == 4) {
          this.time = this.time2.endTime.time
        }
        this.openSimple = true;
      },
      closeSimpleDialog() {
        this.openSimple = false;
      }
    }
  }
</script>

<style scoped lang="stylus">
  .Timeing
    .T-setting
      padding 20px
      .setTime
        margin-top 10px;
        display flex
        flex-direction row
        justify-content space-between
        padding-top 10px
        padding-bottom 10px
        background #eeeeee
        padding-left 10px
        padding-right 10px
        border-radius 5px
</style>
