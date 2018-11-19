

## 何时使用

![](./eg.png)
使用umi框架时候，引用全局布局，

## API

必填参数 `logo`,`currentUser`,`collapsed`,`menuData`,


`currentUser` 示例：

```
currentUser={{
  avatar:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
  name:window.user.username,
  notifyCount:0,
  userid:"00000001",
}}

```

### 用法：


```
<BasicLayout
  {...this.props}
  logo={require("../assets/logo.svg")}
  currentUser={{
    avatar:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
    name:window.user.username,
    notifyCount:0,
    userid:"00000001",
  }}
  collapsed={true}
  menuData={window.menus}
/>
```
