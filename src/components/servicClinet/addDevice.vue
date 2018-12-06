<template>
  <div class="addDevice">
    <mu-container>
      <mu-card class="dev-box">
        <mu-text-field v-model="devnmae" label="设备名称" label-float></mu-text-field>
        <br>
        <mu-text-field v-model="devId" label="设备ID" label-float></mu-text-field>
        <mu-text-field v-model="devcomment" label="备注" label-float></mu-text-field>
        <br>
        <mu-select label="设备类型" v-model="devtype" label-float>
          <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
        <mu-button color="primary" style="width:60%" class="submit" :disabled="disenable" @click="_addDevice">确认添加</mu-button>
      </mu-card>
    </mu-container>
  </div>
</template>
<script>
  import {addDevice} from "../../api/apihttp";

  export default {
    name: "addDevice",
    data() {
      return {
        disenable:false,
        options: [
          '',
          'Option 1', 'Option 2', 'Option 3', 'Option 4',
          'Option 5', 'Option 6', 'Option 7', 'Option 8',
          'Option 9', 'Option 10'
        ],
        g_id:'',
        devcomment:'',
        devnmae: '',
        devId: '',
        devtype: ''
      }
    },
    methods: {
      _addDevice(){
        this.disenable=true
        addDevice(this.g_id,this.devId,this.devtype,this.devnmae,this.devcomment,this.$store.state.openid,this.$store.state.userid).then((res)=>{
               if(res.ret==0){
                 this.disenable=false
                 this.$message.show(res.message,'success')
               }else{
                  this.disenable=true
                  this.$message.show(res.message,'error')
               }
        })
      }
    },
    created() {
      this.g_id = this.$route.query.g_id
    }
  }
</script>

<style scoped lang="stylus">
  .addDevice
    padding-top 55px
    .dev-box
      margin-top 10px
      padding-top 20px
      text-align center
      padding-bottom 20px

</style>
