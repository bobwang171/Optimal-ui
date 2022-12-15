# Optimal UI - 一个Vue UI组件

## 介绍

## 开始使用

1.安装
使用本框架前，请在css中开启border-box

```
*{box-sizing:border-box;}
```
IE 8 及以上浏览器都支持此样式。

你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
``` 
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```
IE 15 及以上浏览器都支持此样式。

安装 Optimal UI
```
npm i --optimal-ui
```
引入 Optimal UI
```
import {Button, ButtonGroup, Icon} from 'optimal-ui'
import 'optimal-ui/dist/index.css'

export default {
  name: 'app',
  components: {
    'o-button': Button,
    'o-icon': Icon
  }
}
```