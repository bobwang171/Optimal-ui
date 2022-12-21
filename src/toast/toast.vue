<template >
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name: "optimal-toast"
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
</style>