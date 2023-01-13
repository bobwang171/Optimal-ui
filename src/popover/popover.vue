<template>
    <div class="popover" @click="xxx">
        <slot name="content" v-if="visible"></slot>
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name: "optimal-popover",
    data() {
        return {
            visible: false
        }
    },
    methods: {
        xxx() {
            this.visible = !this.visible
        }
    }
}
</script>
<style lang="scss">
.popover {
    display: inline-flex;
}
</style>