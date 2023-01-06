<template >
    <div class="tabs-head">
        <slot></slot>
        <div class="actions_wrapper">
            <slot name="actions"></slot>
        </div>

    </div>
</template>
<script lang="ts">
export default {
    name: "optimal-tabs-head",
    inject: ['eventBus'],
    created() {
        console.log("爷爷给爸爸的eventbus")
        console.log(this.eventBus)
        this.$emit('update:selected', 'tabs-head抛出的数据')
    }
}
</script>
<style lang="scss" scoped>
$tab-height: 40px;

.tabs-head {
    display: flex;
    min-height: $tab-height;
    align-items: center;
}

.actions_wrapper {
    margin-left: auto;
}
</style>