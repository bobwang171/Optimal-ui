<template>
    <svg class="icon">
        <use :xlink:href="`#icon-${$props.name}`"></use>
    </svg>
</template>
  
<script lang="ts">
export default {
    props: {
        name: {
            type: String
        }
    }
}
</script>
  
<style lang="scss" scoped>
.icon {
    width: 1em;
    height: 1em;
}
</style>