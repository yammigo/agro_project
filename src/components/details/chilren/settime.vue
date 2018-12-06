<template>
  <mu-col span="12" lg="4" sm="6">
    <mu-date-input  v-model="value1" label="开启时间"  clock-type="24hr" color="green" container="dialog" actions type="time" viewType="list" label-float full-width></mu-date-input>
  </mu-col>
</template>
<script>
    export default {
        name: "settime",
        data(){
          return{
            value1:'',
          }
        },
        watch:{
          'value1':function(input){
             console.log(input.getHours()+":"+input.getMinutes());
          }
        }

    }
</script>

<style scoped>

</style>
