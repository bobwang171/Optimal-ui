<template>
    <div>
        <o-button>默认按钮</o-button>
        <o-button name="setting">默认按钮</o-button>
        <o-button name="back">默认按钮</o-button>
        <o-button name="back">默认按钮</o-button>
        <o-button disabled>默认按钮</o-button>
    </div>
</template>

<script>
import Button from '../../../src/button/button'
import Icon from '../../../src/button/icon'
import ButtonGroup from '../../../src/button/button-group'
export default {
    components: {
        'o-button': Button,
        'o-button-group': ButtonGroup
    },
    data() {
        return {
            loadingStatus1: true,
            loadingStatus2: false,
            loadingStatus3: false,
            massage: 'hi',
            selectedTab: "sports"
        }
    },
    methods: {
        showToast1() {
            this.$toast(`我是toast${Math.floor(Math.random() * 100)}`, { enableHTML: true, position: "top" })
        },
        showToast2() {
            this.$toast(`我是toast${Math.floor(Math.random() * 100)}`, { enableHTML: true, position: "middle" })
        },
        showToast3() {
            this.$toast(`我是toast${Math.floor(Math.random() * 100)}`, { enableHTML: true, position: "bottom" })
        }
    }
}
</script>