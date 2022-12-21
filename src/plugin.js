import Toast from './toast/toast.vue'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = (message) => {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData:{
                    closeButton:{
                        text:"关闭",
                        callback:()=>{
                            console.log('知道了');
                        }
                    }
                }
            }
            )
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}