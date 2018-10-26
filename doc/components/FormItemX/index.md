

## 何时使用

表单组件


## 支持组件 `type`

以下基本配置字段，均参照antd官方组件文档，例如[number](https://ant.design/components/input-number-cn/);
特殊自定义配置参考下面👇api及例子。
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


`提一句昂！之前对于select、treeselect之类，参数typeOpts 中的data是必填，不填写就报错！现在改了，不想传就不用传了，也不会报错`😊😊😊😊😊😊😊😊😊😊

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
| modalType | 输入框在modal中，modal对状态`update``create`等，⚠️仅支持`selectx` | String | - |
| modifyDisabled | 只有在modalType为`update`时候才生效，⚠️仅支持`selectx` | Boolean | false |
| dataName | ⚠️仅支持`selectx`，select中options data的key，不设置默认使用`name` | Boolean | Object[$name] |
| mode | ⚠️仅支持`selectx`，参考[antd select](https://ant.design/components/select-cn/) | 'multiple' | 'tags' | - |
| placeholder | 原生placeholder | String | - |
| getFieldDecorator | antd form获取字段值的必要方法 | Fn | - |
| required | 是否必填 | Boolean | false |
| typeOpts | 输入框一些特殊字段，例如select重的options data | Object | {} |
| formItem | 表单初始值，返显，编辑之类的时候 | Obejct | - |
| initValue | 输入框初始值设定，如果没有，从formItem获得 | 不同类型，值类型不同 | - |
| start | 特殊字段：`type`为`rangepickerx`，开始时间 | String`YYYY-MM-DD` | - |
| end | 特殊字段：`type`为`rangepickerx`，结束时间 | String`YYYY-MM-DD` | - |

| exists | 业务页面，想后台请求查询是否重复，请求接口定死：`${this.props.pathname}/exists` | Boolean | - |
| ruleType | 自定义字段支持`email``mobile``phone` | Array | - |

| rules | 校验规则，参考[antd form rules](https://ant.design/components/form-cn/#%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99) | Object | - |
| formItemLayout | lebel和输入框的栅栏，参考[antd form](https://ant.design/components/form-cn/) | Object | 6-14 |



### `selectx`例子



```
...
const itemOpts = {
  typeOpts: {
    alllable:"xxxx"， //配置all选项对中文显示
    style:{ width: 120 },
    all:true, //开启添加 全部 选项 值为“all” ，显示可配置`alllabel`，默认 “所有”
    data:this.props.newData    //data 传入对象Object
  },
  ...
}
render{
  return (
    ...
    <FormItemX
    label="商户名称"
    name="merchId"
    type="selectx" {...itemOpts}
    modalType={} 见👆api解释
    dataName={} 见👆api解释
    mode={} 见👆api解释
    modifyDisabled={} 见👆api解释
    />
    ...
  )
}

```



### `upload`例子


上传地址写死为：`window.path+'upload'`
```

...
<FormItemX label="记录内容" name="upload" {...itemOpts}
type="upload"
uploadCallbak={this.uploadCallbak} //上传结果对回掉函数
uploadType="images"/>

```


###  `uploadimagex` 例子
