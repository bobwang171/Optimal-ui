<template>
    <ClientOnly>
        <div class="button_wrapper">
            <o-button><span>默认按钮</span></o-button>
            <o-button name="setting">默认按钮</o-button>
            <o-button name="setting" icon-position="right">默认按钮</o-button>
            <o-button :loading="true">默认按钮</o-button>
            <o-button disabled>默认按钮</o-button>
            <o-button-group class="button-group">
                <o-button name="back"><span>上页</span> </o-button>
                <o-button><span>更多</span> </o-button>
                <o-button name="front" icon-position="right"><span>下页</span> </o-button>
            </o-button-group>
        </div>
    </ClientOnly>
</template>

<script>
import Button from '../../../src/button/button'
import ButtonGroup from '../../../src/button/button-group'
export default {
    components: {
        'o-button': Button,
        'o-button-group': ButtonGroup,
    },
}
</script>
<style lang="scss">
.button_wrapper {
    display: flex;

    >* {
        margin-right: 8px;
    }


}
</style>