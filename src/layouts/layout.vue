<script lang="ts">

export default {
    name: "optimal-layout",
    data() {
        return {
            layoutClass: {
                hasSider: false
            },

        }

    },
    mounted() {
        this.$children.map((item) => {
            if (item.$options.name === "o-sider") {
                this.layoutClass.hasSider = true
            }
        })
    },

}
</script>

<template >
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>



<style lang="scss" scoped>
.layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &.hasSider {
        flex-direction: row;

    }
}
</style>
