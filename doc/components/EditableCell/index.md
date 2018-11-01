

## 何时使用

表格中，双击修改单元格数据


## 支持组件 `type`

以下基本配置字段，均参照antd官方组件文档，例如[number](https://ant.design/components/input-number-cn/);
但是不支持扩展

* `input` 输入框
* `select` 单选
* `multiselect` 多选
* `checkbox` 只有一个对复选框
* `textarea` 文本框



## 用法示例
```
<EditableCell
record={record}  //单条表格数据
type="textarea"  //类型
dataIndex=""     // 自定义数据，会在onchange中返回
value={text}     // 输入框对值
onChange={(_a,_b,e)=>{this.onCellChange(record,"remarks",e)}} //组件内自定义处理返回的数据

// 其中 _a,_b,e 依次返回 传入对record dataIndex 和编辑后对value

/>



```

## API


| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| record | 单条表格数据 | Object | - |
| type | 类型 | String | input |
| dataIndex | 自定义标签数据，会在onchange中返回 | String | - |
| value | 输入框对值 | 不同输入框数据结构不同 | - |
| onChange | 组件内自定义处理返回的数据 | fn | - |
