<template>
    <div id="app">
       <button class="g-button" v-if="!iconPosition|| iconPosition==='left'">
        <svg v-if="icon" class="iconLeft"><use :xlink:href="`#icon-${icon}`"></use></svg>
        <slot></slot>
       </button> 
       <button class="g-button" v-else>
        <slot></slot>
        <svg v-if="icon" class="iconRight"><use :xlink:href="`#icon-${icon}`"></use></svg>
       </button> 
    </div>
</template>

<script lang="ts">
    export default {
        props:["icon","iconPosition"]
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
.iconLeft{
  display: inline-flex;
  align-items: center;
  margin: 0.1em;
  height: 1em;
  width: 1em;
  top: 0.25em;
  margin-right: 0.6em;
}
.iconRight{
  display: inline-flex;
  align-items: center;
  margin: 0.1em;
  height: 1em;
  width: 1em;
  top: 0.25em;
  margin-left: 0.6em;
}
</style>