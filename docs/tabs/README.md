# Tabs - 标签
## 预览
<tabs-demos></tabs-demos>

## 使用方法


```
<template>
  <div class="tabs-wrapper">
    <i-tabs :selected.sync="selectedTab">
      <i-tabs-head>
        <i-tabs-item name='tab1'>
          <i-icon icon-name="settings"></i-icon>
          Tab1
        </i-tabs-item>
        <i-tabs-item name='tab2'>Tab2</i-tabs-item>
        <i-tabs-item name='tab3'>Tab3</i-tabs-item>
        <i-tabs-item name='tab4'>Tab4</i-tabs-item>
      </i-tabs-head>
      <i-tabs-body>
        <i-tabs-pane name='tab1'>内容1</i-tabs-pane>
        <i-tabs-pane name='tab2'>内容2</i-tabs-pane>
        <i-tabs-pane name='tab3'>内容3</i-tabs-pane>
        <i-tabs-pane name='tab4'>内容4</i-tabs-pane>
      </i-tabs-body>
    </i-tabs>
  </div>
</template>
<script>
  export default {
    data() { return { selectedTab: 'tab1' } }
  }
</script>
```
## 选项
* `o-tabs` `o-tabs-item` `o-tabs-pane` 组件中必须具备一一对应的`name`属性。
  
* `o-tabs`组件可以通过设置`selected`属性来确定默认标签。