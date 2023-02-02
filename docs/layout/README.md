# Layout - 布局
本UI提供布局组件，供用户自由组合网页布局。
## 预览
<ClientOnly>
<layout-demos></layout-demos>
</ClientOnly>

## 使用方法
```
<template>
  <div class="wrapper">
    <i-layout>
      <i-header> header </i-header>
      <i-layout>
        <i-sider> sider </i-sider>
        <i-content> content </i-content>
      </i-layout>
      <i-footer> footer </i-footer>
    </i-layout>
    <br>
    <i-layout>
      <i-header> header </i-header>
      <i-content> content </i-content>
      <i-footer> footer </i-footer>
    </i-layout>
    <br>
    <i-layout>
      <i-header> header </i-header>
      <i-layout>
        <i-sider> sider </i-sider>
        <i-layout>
          <i-content> content </i-content>
          <i-footer> footer </i-footer>
        </i-layout>
      </i-layout>
    </i-layout>
  </div>
</template>
<style lang="scss" scoped>
$background: #3eaf7c;
.wrapper {
> .layout-wrapper { height: 30vh;
  > .header-wrapper { height: 3em; background: $background; }
  > .content-wrapper { background: lighten($background, 40%); }
  > .layout-wrapper { height: 6em;
    > .sider-wrapper { width: 3em; background: lighten($background, 15%); }
    > .content-wrapper { background: lighten($background, 40%); }
    > .layout-wrapper{
      > .content-wrapper{ background: lighten($background, 40%); }
      > .footer-wrapper { background: $background; }
    }
  }
  > .footer-wrapper { background: $background; }
}
}
</style>
```
### 组件介绍

* `o-layout`:布局的基本容器，可以用来嵌套其他组件，可以放在任何父容器当中，可以嵌套自身。
* `o-header`:头部布局，可以嵌套任何其他组件，只能放在`o-layout`容器中。
* `o-sider`:侧边布局，可以嵌套任何其他组件，只能放在`o-layout`容器中。
* `o-footer`:底边布局，可以嵌套任何其他组件，只能放在`o-layout`容器中。
* `o-content`:内容布局，可以嵌套任何其他组件，只能放在`o-layout`容器中。
