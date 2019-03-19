

## 何时使用

懒人表格


## 用法示例
```
const columns = [
  {title: '订单号', dataIndex: 'orderId', key: 'orderId',copyText:"orderId",render:(text)=><p className="ppppp">{text}</p>,omitLength:5},
  {title: '状态', dataIndex: 'statusName', key: 'statusName',copyText:"statusName",},
  ...
];



<TableX
  columns={columns}
  dataSource={dataSource}
  ...... //参考antd官网
/>
```

## API

其他api参考 [antd](https://ant.design/components/table-cn/)

本组件目前主要扩展cloumns 部分，如下：

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| omitLength | 单元格内字符串省略长度，⚠️⚠️设置该属性回复改掉render方法，如果需要组合字符串，请设置omitText属性 | Number | - |
| omitText | 设置该属性，覆盖掉默认的table组件中的text返回，不设置，默认text | String | {text} |
| copyText | 鼠标单机复制的内容，如果设置为key值，会从record中获取value值，找不到，直接现实copyText | String | - |
