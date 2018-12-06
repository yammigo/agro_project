<template>
      <mu-snackbar :color="color.color" :open.sync="color.open">
        {{message}}
        <mu-button flat slot="action" color="#fff" @click="color.open = false">关闭</mu-button>
      </mu-snackbar>
</template>

<script>
    export default {
        name: "mssage",
        props:["message"],
        data () {
          return {
            colors: ['success', 'info', 'error', 'warning'],
            color: {
              color: 'info',
              message: '这个一个测试消息!',
              open: false,
              timeout: 3000
            }
          };
        },
        computed: {
          icon () {
            return {
              success: 'check_circle',
              info: 'info',
              warning: 'priority_high',
              error: 'warning'
            }[this.color.color]
          }
        },
        methods: {
          openColorSnackbar () {
            if (this.color.timer) clearTimeout(this.color.timer);
            this.color.open = true;
            this.color.timer = setTimeout(() => {
              this.color.open = false;
            }, this.color.timeout);
          }
        }
    }
</script>

<style scoped>

</style>
