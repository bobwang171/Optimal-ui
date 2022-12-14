<script lang="ts">
export default {
  data() {
    return {
      loadingStatus: true
    }
  },
}
</script>

<template>
  <div id="app" class="app">

    <o-button :loading="loadingStatus" @click="loadingStatus = !loadingStatus" name="setting"
      icon-position="left"><span>按钮</span>
    </o-button>

    <o-button name="setting" icon-position="right"><span>按钮</span> </o-button>

    <o-button name="setting"><span>按钮</span> </o-button>
    <o-button-group>
      <o-button name="back"><span>上页</span> </o-button>
      <o-button><span>更多</span> </o-button>
      <o-button name="front" icon-position="right"><span>下页</span> </o-button>
    </o-button-group>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;

  >button {
    margin-right: 1em;
  }

}
</style>
