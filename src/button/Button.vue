<template>

    <button class="o-button" :class="{
        [`icon-${iconPosition}`]: true,
        [`disabled-${disabled}`]: true
    }" @click="$emit('click')">
        <o-icon v-if="name && !loading && !disabled" :name="name" class="icon"></o-icon>
        <o-icon v-if="loading && !disabled" name="loading" class="loading icon"></o-icon>
        <div class=" content">
            <slot></slot>
        </div>
    </button>
</template>

<script lang="ts">

export default {
    props: {
        name: {
            type: String
        },
        iconPosition: {
            type: String,
            default: "left"
        },
        loading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>


<style lang="scss" scoped>
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.o-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: var(--button-height);
    width: var(--button-width);
    font-size: var(--font-size);
    background: var(--button-bg);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    padding: 0 1em;

    &:hover {
        border: 1.5px solid var(--border-color-hover);
        z-index: 1;
    }

    &:active {
        background: var(--button-active-bg);
    }

    &:focus {
        outline: none
    }

    >.content {
        order: 2;
    }

    >.loading {
        animation: spin 1s infinite linear;
    }



    >.icon {
        order: 1;
        width: 1em;
        height: 1em;
        margin-right: 0.2em;

    }

    &.disabled-true {
        color: #C0C0C0;
        cursor: not-allowed;

    }

    &.icon-right {
        >.content {
            order: 1;
        }

        >.icon {
            order: 2;
            margin-left: 0.2em;
        }

    }

}
</style>