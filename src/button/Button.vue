<template>
    <div id="app">
       <button class="g-button">
        <svg v-if="icon" class="icon"><use :xlink:href="`#icon-${icon}`"></use></svg>
        <slot></slot>
       </button> 
    </div>
</template>

<script lang="ts">
    export default {
        props:["icon"]
    }
</script>


<style lang="scss" scoped>
*{margin: 0; padding: 0; box-sizing: border-box;}
:root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: #fff;
    --button-active-bg: #fff;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666
}
.g-button{
    height:var(--button-height);
    font-size: var(--font-size);
    background: var(--button-bg);
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    padding: 0 1em;
}
.icon{
  height: 1em;
  width: 1em;
}
</style>