<template >
    <div class="button-group">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {

}
</script>
<style lang="scss" >
.button-group {
    display: inline-flex;
    vertical-align: middle;

    >.o-button {
        border-radius: 0;

        &:not(:first-child) {
            margin-left: -1px;
        }


        &:first-child {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }

        &:last-child {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }

}
</style>