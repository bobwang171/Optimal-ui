<template >
    <div class="wrapper">
        <input class=" o-input" :value="value" type="text" :disabled="disabled" :readonly="readonly" :error="error"
            @input="$emit('input', $event.target?.value)">
        <div v-if="error" class="error_wrapper">
            <Icon name="warning"></Icon>
            <span>{{ error }}</span>
        </div>
    </div>
</template>
<script lang="ts">
import Icon from '../button/icon.vue'
export default {
    name: "optimal-input",
    components: {
        Icon
    },
    props: {
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        }
    }
}
</script>
<style lang="scss" scoped>
$height: 24px;
$border-color: #999;
$border-color-hover: #666;
$border-radius :4px;
$font-size: 8px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$error-color: #f1453d;

.wrapper {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;

    >input {
        display: inline-flex;
        font-size: $font-size;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        margin: 0 8px;
        height: $height;

        &:focus {
            box-shadow: inset 0 1px 3px $border-color-hover;
            outline: none;
        }

        &[disabled],
        &[readonly] {
            border-color: #bbb;
            color: #bbb;
            cursor: not-allowed;
        }

        &[error] {
            border-color: $error-color;
        }
    }

    .error_wrapper {
        display: inline-flex;
        font-size: 12px;
        color: $error-color;
        vertical-align: middle;
        align-items: center;

        >input {
            border-color: $error-color;
        }

        >span {
            padding-left: 2px;
        }
    }
}
</style>