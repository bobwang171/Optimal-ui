<template>
    <div id="app">
        
       <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" >
        <div class="content">
        <slot></slot>
        </div>
        <svg class="iconRight"><use :xlink:href="`#icon-${icon}`"></use></svg>
       </button> 
    </div>
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
    // &:hover{

    // }
    // &:active{

    // }
    // &:focus{

    // }
    >.content{
        order: 2;
    }
    >.icon{
        order: 1;
    }
    &.icon-right{
        >.content{
            order: 1;
        }
        >.icon{
            order: 2;
        }
        
    }
    .iconLeft{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  height: 1em;
  width: 1em;
  margin-right: 0.2em;
}
.iconRight{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  height: 1em;
  width: 1em;
  margin-left: 0.2em;
}
}

</style>