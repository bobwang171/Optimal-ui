<template >
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name: "optimal-tabs",
    props: {
        selected: {
            type: String,
            required: true,
            default: "sports"
        },
        direction: {
            type: String,
            required: true,
            default: 'horizontal',
            validator(value) {
                return ['horizontal', 'vertical'].indexOf(value) >= 0
            }
        }
    },
    created() {
        this.$emit("update:selected", 'xxx')
    }
}
</script>
<style lang="scss">
.tabs {}
</style>