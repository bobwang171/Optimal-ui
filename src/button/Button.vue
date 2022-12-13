<template>
       <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" >
        <svg class="icon"><use :xlink:href="`#icon-${icon}`"></use></svg>
        <div class="content">
        <slot></slot>
        </div>
       </button> 
</template>

<script lang="ts">

    export default {
    props: {
            icon: {
                type:String
            },
            iconPosition: {
                type: String,
                default:"left"
            },
            loading: {
                type: Boolean,
                default:false
        }}
    }
</script>


<style lang="scss" scoped>
*{margin: 0; padding: 0; box-sizing: border-box;}
.g-button{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height:var(--button-height);
    width: var(--button-width);
    font-size: var(--font-size);
    background: var(--button-bg);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    padding: 0 1em;
    &:hover{
        border: 2px solid var(--border-color-hover);
    }
    &:active{
        background: var(--button-active-bg);
    }
    &:focus{
        outline: none
    }
    >.content{
        order: 2;
    }
    >.icon{
        order: 1;
        width: 1em;
        height: 1em;
        margin-right: 0.2em;

    }
    &.icon-right{
        >.content{
            order: 1;
        }
        >.icon{
            order: 2;
            margin-left: 0.2em;
        }
        
    }
   
}

</style>