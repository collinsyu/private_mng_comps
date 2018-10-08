这里定义了许多组件，需要写出每个组件的使用方式

defaultOpts = {
  hasFeedback:true,
  getFieldDecorator: getFieldDecorator,
  ...formItemLayout
}
<FormItemX label="联通" name="" initvalue="" type=""/>

start end


type:
input
InputNumber
select
selectx
...

const itemOpts = {
  getFieldDecorator: this.props.form.getFieldDecorator,
  formItem: this.props.formItem
}
<FormItemX label="主题" name="subject" {...itemOpts} required/>

const tableOpts = {
  useName: 'TradeorderList',
  dispatch: this.props.dispatch,
  query:this.props.query,
  columns:columns,
  dataSource:this.props.dataSource,
  pagination:this.props.pagination,
  pathname:'/tradeorders'
}

<TableX {...tableOpts}/>


结构改善收集：
全局配置，conifg
异步请求增加GET,POST等多个方法
TableX 增加权限功能
表单也增加权限功能
这些都收集到组件里面去
登录，修改密码做成组件
代理中重复出现的代码，收集到工具箱中去

在此收集项目中遇到的问题，想输出的组件
