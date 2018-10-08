import React, {PureComponent} from 'react';
import {Table,Alert} from 'antd';
import {getAuthColumn} from '../tool';
/**
 * 对table组件进行了扩展，增加了权限控制
 */
class TableX extends PureComponent {
  state = {
    selectedRowKeys: [],
    totalCallNo: 0,
  };

  componentWillReceiveProps(nextProps) {
    // clean state
    if (nextProps.selectedRows&&nextProps.selectedRows.length === 0) {
      this.setState({
        selectedRowKeys: [],
        totalCallNo: 0,
      });
    }
  };

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    const totalCallNo = selectedRows.reduce((sum, val) => {
      return sum + parseFloat(val.callNo, 10);
    }, 0);

    if (this.props.onSelectRow) {
      this.props.onSelectRow(selectedRows);
    } else {
      this.handleSelectRows(selectedRows);
    }

    this.setState({ selectedRowKeys, totalCallNo });
  };

  //默认分页处理方法
  onPageChange = (pagination, filters, sorter) => {
    const {dispatch} = this.props;
    const queryData = {
      ...this.props.searchItem,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order
    }
    const pathname = this.props.pathname.replace('/','');
    dispatch({
      type: `${pathname}/query`,
      payload: queryData,
    });
  };

  handleSelectRows = (rows) => {
    const {dispatch} = this.props;
    const data = {
      selectedRows:rows
    }
    const pathname = this.props.pathname.replace('/','');
    dispatch({
      type: `${pathname}/dosetstate`,
      payload: data,
    });
  };

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  }

  render() {
    // const status = ['关闭', '运行中', '已上线', '异常'];
    const { selectedRowKeys } = this.state;
    // 进行权限控制
    const columns=getAuthColumn(this.props.columns, this.props.useName);
    const _tableOpts = {
      rowKey:record => record.id ,
      ...this.props,
      columns
    }
    const _onChange = this.props.onChange ? this.props.onChange : this.onPageChange;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    };

    return (
      <div>
        <div >
          {this.props.shwoRows&&
          <Alert
            message={(
              <div>
                已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项&nbsp;&nbsp; {/*更多的显示可以由调用者进行处理*/}
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>清空</a>
              </div>
            )}
            type="info"
            showIcon
          />}
        </div>
        <Table size="small" {..._tableOpts} onChange={_onChange} rowSelection={this.props.shwoRows&&rowSelection}/>
      </div>
    );
  }
}

export default TableX;
