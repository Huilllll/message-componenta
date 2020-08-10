import Vue from 'vue'
import MessageComponent from './message.vue';
// 手动挂载vue
let MessageConstructor = Vue.extend(MessageComponent);
const Message = (options) =>{
  // 统一入口
  let instance = new MessageConstructor({
    // 给这个数组传入了data数据
    data:options
  });
  // 可以通过instance.$mount()手动将组件挂载到DOM上面
  instance.$mount(); //表示挂载组件，这个挂载后的结果会放到instance.$el;
  document.body.appendChild(instance.$el);
  // 显示隐藏动画
  instance.visible = true; //扔到页面时候，
}
['success','error','warning'].forEach(type=>{
  Message[type] = function(options){
    options.type = type;
    return Message(options)
  }
})

export {Message}
