

## 何时使用
例如显示详情等，右侧拉出modal框


## API

必填字段`title` `visible` `onCancel`

可选参数`footString`

特殊字段`children`，本字段可作为属性放入组件，也可将子组件用本组件包裹，传入其中

其他你们瞎编的字段，写了也没用


### 用法：

```
<Drawer title="" visible={false} onCancel={fn()} footString={}>
... //children
</Drawer>
```

or

```
<Drawer title="" visible={false} onCancel={fn()} footString={} children={}/>
```
