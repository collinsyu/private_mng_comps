import React, {Component} from 'react';
import {Table,Form,Button} from 'antd';
import {getAuthColumn} from '../tool';
import {query} from '../utils/request';
import {FormItemX} from '../components';
import {filterQueryData} from '../queryTool';
/**
 * 对table组件进行了扩展，增加了权限控制
 * 带查询与分页，应用在小的空间内使用表格
 */
class SearchTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[],
      pagination:{}
    };
  };

  componentDidMount() {
    //组件出现前 就是dom还没有渲染到html文档里面，执行页面数据请求
    this.getTableData({});
  }

  getTableData(params) {
    query(this.props.path,params).then((data)=>{
      if (data && data.data.success) {
        //如果data不为空，执行querySuccess 方法更新state
        const p = {
          total: data.data.data.totalCount,
          current: data.data.data.pageNo,
          pageSize: data.data.data.pageSize
        }
        this.setState({dataSource:data.data.data.result,pagination:p});
      }
    })
  }

  //默认分页处理方法
  onPageChange = (pagination, filters, sorter) => {
    const query = filterQueryData(this.props.form.getFieldsValue());
    const queryData = {
      ...query,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order
    }
    this.getTableData(queryData);
  };

  //数据验证成功后回调事件
  handleSubmit = (_,_1,v) => {
    let values = v;
    if(!values) {
      values = this.props.form.getFieldsValue();
    }
    this.getTableData(filterQueryData(values));
  };

  handleChange = (name,value) => {
    let values = this.props.form.getFieldsValue();
    values[name] = value;
    this.handleSubmit('','',values);
  }

  render() {
    const itemOpts = {
      getFieldDecorator: this.props.form.getFieldDecorator,
      formItem: {},
      typeOpts: {
        style:{width: 120},
        all:true,
        data:this.props.newData
      },
      search:true,
      onChange:this.handleChange
    }

    // 进行权限控制
    const columns=getAuthColumn(this.props.columns, this.props.useName);
    const _tableOpts = {
      rowKey:record => record.id ,
      dataSource:this.state.dataSource,
      pagination:this.state.pagination,
      ...this.props,
      columns
    }
    const _onChange = this.props.onChange ? this.props.onChange : this.onPageChange;
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          {this.props.formitem.map(item => <FormItemX key={item.name} {...item} {...itemOpts} />)}

          <Button style={{
            marginRight: '10px'
          }} type="primary" htmlType="submit">搜索</Button>
        </Form>

        <Table {..._tableOpts} onChange={_onChange}/>
      </div>

    );
  }
}

export default Form.create()(SearchTable);
