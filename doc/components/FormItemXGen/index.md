

## 何时使用

根据json生成表单组件


## 例子

```

import {AutoFormItem} from "private_mng_comps";

...

<Form>
  <AutoFormItem
  form={this.props.form}
  newData=[]
  formConfigs={[
    {
      label:"充值账号",
      name:"mobile"
      },
      {
        label:"充值账号",
        name:"mobile",
        type:"selectx",
        opts:{
          search:true,
        }
      }
      ]}/>
</Form>
```


## API


| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| form | Form组件的特殊参数 | - | - |
| newData | 表单中select、treeselect等需要options data的传到这里，设置参考FormItemx | Array | - |
| formConfigs | 生成表单数据，详见下面 | Array | - |
| formItem | 用于编辑时候回显的数据 | Object | - |

## formConfigs 配置

其中的每一个对象，实际上就是FormItemx的一个配置项，可参考FormItemx。


| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| label | 显示名称 | String | - |
| name | 表单提交key | String | - |
| type | 参见FormItem，例如`text` `select` `datepicker` | String | - |
| opts | 特殊属性配置，例如select或者treeselect中的options data | Object | - |

`opts` 中可配置`typeOpts`类型为`Object`，参考如下例子：

```
opts:{

  typeOpts: {
    style:{width: 120}, //设置样式
    all:true, //select 特殊配置项
    data:this.props.newData  //options data
  },
}
```
