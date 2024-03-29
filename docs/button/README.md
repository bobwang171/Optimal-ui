# Button - 按钮
## 预览

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

## 使用方法

```
            // 单个按钮
            <i-button>默认按钮</i-button>
            <i-button icon="settings">默认按钮</i-button>
            <i-button :loading="true">默认按钮</i-button>
            <i-button disabled>默认按钮</i-button>


            // 按钮组
            <o-button-group>
                <o-button name="back"><span>上页</span> </o-button>
                <o-button><span>更多</span> </o-button>
                <o-button name="front" icon-position="right"><span>下页</span> </o-button>
            </o-button-group>
```

## 选项
### 单个按钮
#### 1. 图标
本UI支持在`button`组件中添加任意的icon图标，
<br>并且通过`icon-position`属性改变icon的位置（支持"左" 和 "右",默认值为 ”左“)。

#### 2. 加载中状态
支持通过设置`loading`属性，使按钮处在加载中状态。

#### 3. 不可点击状态
支持通过设置`disabled`属性，使按钮处于不可用状态，不可点击。

### 按钮组

本UI支持将多个按钮自由组合。