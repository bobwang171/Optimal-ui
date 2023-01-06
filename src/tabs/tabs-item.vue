<template >
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name: "optimal-tabs-item",
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss">
.tabs-item {}
</style>