<script lang="ts">
export default {
  data() {
    return {
      loadingStatus1: true,
      loadingStatus2: false,
      loadingStatus3: false,
      massage: 'hi'
    }
  },
}
</script>

<template>
  <div id="app" class="app">

    <div class="button_wrapper">
      <!-- button 按钮展示 -->
      <o-button :loading="loadingStatus1" @click="loadingStatus1 = !loadingStatus1" name="setting"
        icon-position="left"><span>按钮</span>
      </o-button>

      <o-button :loading="loadingStatus2" @click="loadingStatus2 = !loadingStatus2" name="setting"
        icon-position="right"><span>按钮</span> </o-button>

      <o-button :loading="loadingStatus3" @click="loadingStatus3 = !loadingStatus3" name="setting"><span>按钮</span>
      </o-button>

      <o-button :disabled="true"><span>按钮</span>
      </o-button>

      <o-button-group>
        <o-button name="back"><span>上页</span> </o-button>
        <o-button><span>更多</span> </o-button>
        <o-button name="front" icon-position="right"><span>下页</span> </o-button>
      </o-button-group>
    </div>
    <div class="input_wrapper">
      <!-- Input展示 -->
      <div class="inputModel">
        <o-input v-model="massage"></o-input>
        <span>Value: {{ massage }}</span>
      </div>
      <o-input value="Susan" :disabled="true"></o-input>
      <o-input value="Kevin" :readonly="true"></o-input>
      <o-input value="Bob" error="错误信息"></o-input>
    </div>
    <!-- grid 格栅展示 -->
    <div></div>
  </div>

</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;

  .button_wrapper {
    display: flex;
    margin-bottom: 20px;

    >.o-button {
      margin-right: 1em;
    }


  }

  .input_wrapper {
    display: flex;
    margin-bottom: 20px;
    align-items: flex-start;

    >.inputModel {
      display: flex;
      flex-direction: column;

      >span {
        font-size: 12px;
        padding-left: 8px;
      }
    }

    >.o-input {
      margin-right: 20px;
    }

  }

}
</style>
