<template >
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name: "optimal-tabs-pane",
    inject: ['eventBus'],
    data() {
        return {
            active: false
        }
    },
    props: {
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        classes() {
            return {
                active: this.active
            }
        }
    },
    created() {
        this.eventBus.$on('update:selected', (name) => {
            this.active = name === this.name
        })
    },
}
</script>
<style lang="scss" scoped>
.tabs-pane {
    &.active {}
}
</style>