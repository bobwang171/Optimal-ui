<template >
    <div class="tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>
<script lang="ts">
export default {
    name: "optimal-tabs-head"
}
</script>
<style lang="scss">
.tabs-head {}
</style>