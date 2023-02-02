# Input - 输入框
## 预览

<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

## 使用方法
```
<template>
    <o-input></o-input>
    <o-input disabled></o-input>
    <o-input readonly></o-input>
    <o-input error="错误信息"></o-input>
    <br>
    <o-input v-model="xxx"></o-input>
    <br>
    <span>value:&nbsp;{{ xxx }}</span>
</template>
```

## 选项
本UI支持的Input属性选项有`disabled`, `readonly`和`error`,同时支持数据的双向绑定。

#### 1. `disabled`

可以通过设置`disabled`属性表示是否禁用状态，默认值为false。

#### 2. `readonly`

可以通过设置`readonly`属性表示是否是只读状态，默认值为false。
<br>`readonly`和`disabled`的区别是： disabled 不可以被 Tab 键选中，readonly 可以被选中。

#### 3. `error`

可以通过设置`error`属性在输入框右侧添加警告标识，并提示文字。

#### 4. `v-model`

输入框支持使用v-model实现数据的双向绑定。

### 用法：
```
  <template>
  <div>
    <i-input v-model="value"></i-input> <br>
    value:{{value}}
  </div>
</template>
<script>
  export default {
    data(){
      return{ value:'双向绑定' }
    }
  }
</script>
```