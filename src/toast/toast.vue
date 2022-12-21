<template >
    <div class="toast">
        <slot></slot>
        <div v-if="closeButton" class="close" @click="onClickClose">
            {{ closeButton.text }}
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "optimal-toast",
    props: {
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
                    callback: (toast) => {
                        toast.close()
                    }
                }

            }
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
            this.closeButton.callback()
        }
    }
}
</script>
<style lang="scss">
$font-size: 16px;
$line-height: 2.2;
$height: 40px;

.toast {
    font-size: $font-size;
    color: aliceblue;
    line-height: $line-height;
    height: $height;
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    background-color: #404040;
    padding: 0 16px
}

.close {
    border-left: 2px solid #666;
    padding-left: 5px;
    margin-left: 5px;
}
</style>