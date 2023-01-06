<template >
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name: "optimal-tabs-item",
    inject: ['eventBus'],
    data() {
        return {
            active: false
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
    methods: {
        xxx() {
            this.eventBus.$emit('update:selected', this.name)
        }
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
        }
    },

}
</script>
<style lang="scss" scoped>
.tabs-item {
    flex-shrink: 0;
    padding: 0 2em 0.2em 2em;
    cursor: pointer;
    border-bottom: 2px solid #f6f5f6;

    &.active {
        color: #3EAF7C;
        border-bottom: 2px solid #3EAF7C;
        font-weight: 800;
    }

    &.disabled {
        cursor: not-allowed;
    }
}
</style>