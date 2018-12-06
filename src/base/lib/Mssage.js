import MessageComponent from 'base/lib/components/message.vue'

let $vm
export default {
  install(Vue, options) {
    if (!$vm) {
      const Message = Vue.extend(MessageComponent);
      $vm = new Message({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el);
    }
    let message = {
      show(msg,type) {
        $vm.openColorSnackbar();
        $vm.message=msg;
        if(type){
           $vm.color.color=type;
        }
      }
    }
    if (!Vue.$message) {
          Vue.$message = message
    }else{
        console.log('$message此属性已被注册')
    }

    Vue.mixin({
      created() {
        this.$message = Vue.$message
      }
    })

  }

}
