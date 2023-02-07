
# 快速上手
## 引入UI
```
import {Button} from "optimal-ui";
import "optimal-ui/dist/index.css";
```

## 注册组件

```
export default {
  components: {
    "o-button": Button,
  },
}
```

## 使用
```
<template>
  <div>
    <o-button>默认按钮</o-button>
  </div>
</template>
```

## 预览
<button-demos></button-demos>
