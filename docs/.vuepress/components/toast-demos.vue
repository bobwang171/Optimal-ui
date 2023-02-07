<template>
    <div class="toast_wrapper">
        <o-button @click="showToast1"> 点击查看Toast</o-button>
        <o-button @click="showToast2"> 点击查看Toast</o-button>
        <o-button @click="showToast3"> 点击查看Toast</o-button>
    </div>
</template>

<script>
import Vue from 'vue'
import Toast from '../../../src/toast/toast'
import Button from '../../../src/button/button'
import plugin from '../../../src/plugin'
Vue.use(plugin)
export default {
    components: {
        'o-toast': Toast,
        'o-button': Button
    },
    methods: {
        showToast1() {
            this.$toast(`我是toast`, { enableHTML: true, position: "top" })
        },
        showToast2() {
            this.$toast(`我是toast`, { enableHTML: true, position: "middle" })
        },
        showToast3() {
            this.$toast(`我是toast`, { enableHTML: true, position: "bottom" })
        }
    }
}
</script>

<style lang="scss">
.toast_wrapper {
    display: flex;

    >* {
        margin-right: 8px;
    }
}
</style>