
## 何时使用

用于显示markdown文本，格式化解析显示




## 用法示例
```

import MarkdownViewer from "private_mng_comps/lib/custom/plugins/markdownViewer";
import "private_mng_comps/lib/custom/plugins/markdownViewer/typo.less"

。。。

 <MarkdownViewer source={this.state.content} metaInfo={{}}/>
// content 请务必传原始字符串
// metainfo 显示 编辑时间 作者等信息
参考如下格式

metaInfo={
  hits:100, //点击量
  updateAt:时间格式或者时间字符串,  //更新时间
  name:yqh, //作者
}

```

## API


| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| content | markdown解析文本 | String | - |
| metaInfo | 一些文档信息参考上面内容 | Object | - |
