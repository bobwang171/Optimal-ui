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
  methods: {
    showToast() {
      this.$toast('我是toast', { enableHTML: true })
    }
  }
}
</script>

<template>
  <div id="app" class="app">

    <div>
      <button @click="showToast"> 点我</button>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

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
