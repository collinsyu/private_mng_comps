

## 何时使用

表单组件


## 支持组件 `type`

* `input` 输入框
* `select` 搜索框
* `selectx` 多选
* `number` 数字
* `checkboxx` 多选check
* `radiox` 单选radio
* `rangepickerx` 日期区间
* `datepicker` 日期单选
* `textarea` 文本输入
* `upload` 上传
* `uploadimagex` 上传样式显示图片
* `treeselect` 树形选择
* `null` 空，显示自定义文本
* `text` 空，显示值




## 用法示例
```

<Form layout="horizontal">

  <FormItemX
  {...this.props}
  label="规则CODE"
  name="ruleCode"
  getFieldDecorator={this.props.form.getFieldDecorator}
  typeOpts: {
    data:this.props.newData
  },
  type="xxxx"
  required
  />

</Form>
```

## API


| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| label | 输入框之前的标题 | String | - |
| name | 表单提交的key | String | - |
| type | 输入框类型：支持上述`type`类型 | String | input |
| getFieldDecorator | antd form获取字段值的必要方法 | Fn | - |
| required | 是否必填 | Boolean | false |
| typeOpts | 该输入框一些特殊字段，例如select重的options data | Object | {} |
| formItem | 表单初始值，返显，编辑之类的时候 | Obejct | - |
| initValue | 输入框初始值设定，如果没有，从formItem获得 | 不同类型，值类型不同 | - |
| start | 特殊字段：`type`为`rangepickerx`，开始时间 | String`YYYY-MM-DD` | - |
| end | 特殊字段：`type`为`rangepickerx`，结束时间 | String`YYYY-MM-DD` | - |
| formItemLayout | lebel和输入框的栅栏，参考[antd form](https://ant.design/components/form-cn/) | Object | 6-14 |
