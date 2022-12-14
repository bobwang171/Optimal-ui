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
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }

        &:last-child {
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
    }

}
</style>