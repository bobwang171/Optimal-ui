<template >
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default {
    name: "optimal-tabs",
    props: {
        selected: {
            type: String,
            required: true,
            default: "tab1"
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['horizontal', 'vertical'].indexOf(value) >= 0
            }
        }
    },
    data() {
        return {
            eventBus: new Vue()
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        this.eventBus.$emit("update:selected", this.selected)
    }
}
</script>
<style lang="scss">
.tabs {}
</style>