<template>
    <div class="popover" @click="xxx">
        <div v-if="visible">
            <slot name="content"></slot>
        </div>
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
    display: flex;
    flex-direction: column;
}
</style>