<template >
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name: "optimal-tabs-body",
    inject: ['eventBus'],
    created() {
        console.log("爷爷给body的eventbus")
        console.log(this.eventBus)
    }
}
</script>
<style lang="scss">
.tabs-body {}
</style>