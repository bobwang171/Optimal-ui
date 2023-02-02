<template>
    <pre>
        <code>
            {{ content }}
        </code>
    </pre>
</template>
<script>
export default {
    data() {
        return {
            content: `
            // 单个按钮
            <i-button>默认按钮</i-button>
            <i-button icon="settings">默认按钮</i-button>
            <i-button :loading="true">默认按钮</i-button>
            <i-button disabled>默认按钮</i-button>


            // 按钮组
            <o-button-group>
                <o-button name="back"><span>上页</span> </o-button>
                <o-button><span>更多</span> </o-button>
                <o-button name="front" icon-position="right"><span>下页</span> </o-button>
            </o-button-group>`,
        }
    },
}
</script>