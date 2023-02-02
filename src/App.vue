<script lang="ts">
export default {
  data() {
    return {
      loadingStatus1: true,
      loadingStatus2: false,
      loadingStatus3: false,
      massage: 'hi',
      selectedTab: "sports"
    }
  },
  methods: {
    showToast1() {
      this.$toast(`我是toast${Math.floor(Math.random() * 100)}`, { enableHTML: true, position: "top" })
    },
    showToast2() {
      this.$toast(`我是toast${Math.floor(Math.random() * 100)}`, { enableHTML: true, position: "middle" })
    },
    showToast3() {
      this.$toast(`我是toast${Math.floor(Math.random() * 100)}`, { enableHTML: true, position: "bottom" })
    }
  }
}
</script>

<template>
  <div id="app" class="app">
    <o-button name="setting">默认按钮</o-button>
    <o-tabs :selected.sync="selectedTab">
      <o-tabs-head>
        <template slot="actions">
          <button>设置</button>
        </template>
        <o-tabs-item name="finance">财经</o-tabs-item>
        <o-tabs-item name="fancy">时尚</o-tabs-item>
        <o-tabs-item name="sports">体育</o-tabs-item>
      </o-tabs-head>
      <o-tabs-body>
        <o-tabs-pane name="finance">财经相关资讯</o-tabs-pane>
        <o-tabs-pane name="fancy">时尚相关资讯</o-tabs-pane>
        <o-tabs-pane name="sports">体育相关资讯</o-tabs-pane>
      </o-tabs-body>
    </o-tabs>

    <o-popover>
      <template slot="content">
        <div>visible内容</div>
      </template>
      <button>点我</button>
    </o-popover>
    <o-popover>
      <template slot="content">
        <div>visible内容</div>
      </template>
      <button>点我</button>
    </o-popover>
  </div>
</template>


<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  .toast_wrapper {
    display: flex;
    margin-bottom: 20px;
    background-color: #fff;
    border: none;

    >button {
      margin-right: 8px;
    }
  }


  .demo {
    display: flex;
    border: 1px solid;
  }

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

  .grid-wrapper {
    $background: #3eaf7c;

    >.row {
      padding: .2em;

      >.col-item {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

        &:nth-child(odd) {
          background: $background;
        }

        &:nth-child(even) {
          background: lighten($background, 20%);
          color: black;
        }
      }
    }
  }
}
</style>
