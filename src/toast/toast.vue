<template >
    <div class="toast" :class="positionClass">
        <div v-if="enableHTML" v-html="$slots.default[0]"></div>
        <slot v-else></slot>
        <div v-if="closeButton" class="close" @click="onClickClose">
            {{ closeButton.text }}
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "optimal-toast",
    props: {
        enableHTML: {
            type: Boolean,
            default: false
        },
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 4
        },
        closeButton: {
            type: Object,
            default: () => {
                return {
                    text: "关闭",
                    callback: () => {
                    }
                }

            }
        },
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'middle'].indexOf(value) >= 0
            }

        }
    },
    computed: {
        positionClass() {
            return { [`position-${this.position}`]: true }
        }
    },
    mounted() {
        if (this.autoClose) {
            setTimeout(() => {
                this.close()
            }, this.autoCloseDelay * 1000
            )
        }
    },
    methods: {
        close() {
            this.$el.remove()
            this.$destroy()
        },
        onClickClose() {
            this.close()
            if (this.closeButton && typeof this.closeButton.callback === "function") {
                this.closeButton.callback()
            }
        }
    }
}
</script>
<style lang="scss">
$font-size: 16px;
$line-height: 2.2;
$min-height: 40px;

.toast {
    font-size: $font-size;
    color: aliceblue;
    line-height: $line-height;
    min-height: $min-height;
    position: absolute;
    display: flex;
    align-items: center;
    left: 50%;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    background-color: #404040;
    padding: 0 16px;

    &.position-top {
        position: absolute;
        top: 8px;
    }

    &.position-bottom {
        bottom: 8px;
    }

    &.position-middle {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

.close {
    border-left: 2px solid #666;
    padding-left: 8px;
    margin-left: 8px;
    flex-shrink: 0;
    cursor: pointer;
}
</style>