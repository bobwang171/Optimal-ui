<template>
    <ClientOnly>
        <div class="input_wrapper">
            <!-- Input展示 -->
            <div class="inputModel">
                <o-input v-model="massage"></o-input>
                <span>Value: {{ massage }}</span>
            </div>
            <div class="input">
                <o-input value="Susan" :disabled="true"></o-input>
                <o-input value="Kevin" :readonly="true"></o-input>
                <o-input value="Bob" error="错误信息"></o-input>
            </div>
        </div>
    </ClientOnly>
</template>

<script>
import Input from '../../../src/input/input'
export default {
    components: {
        'o-input': Input
    },
    data() {
        return {
            massage: '支持双向绑定',
        }
    }
}
</script>
<style lang="scss">
.input_wrapper {
    display: flex;
    flex-direction: column;
}

.input {
    display: inline-flex;
    margin-top: 16px;
}
</style>