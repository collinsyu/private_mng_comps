import React, {PureComponent} from 'react';
import {Table,Alert,message} from 'antd';
import {getAuthColumn} from '../tool';
import _ from "lodash";
// import DbclickCopySpan from "./DbclickCopySpan";
import Ellipsis from "../../components/Ellipsis";
import {CopyToClipboard} from 'react-copy-to-clipboard';


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
  modifyC = (columns) =>{
    // console.log(columns);
    var _bbb = _.cloneDeep(columns);
    // console.info(_bbb);;;
    _bbb.map((dou)=>{
      // NOTE: 添加copied属性
      var _formatDom_fn = dou.render;
      // NOTE: 添加省略属性
      if(dou.omitLength){
        if(dou.omitText){
          return _formatDom_fn = (text)=>{
            return <Ellipsis length={dou.omitLength} tooltip>{dou.omitText}</Ellipsis>
          }
        }
        if(dou.render){
          console.error("使用该属性不支持使用render 方法，请设置omitText属性");
        }
        _formatDom_fn = (text)=>{
          return <Ellipsis length={dou.omitLength} tooltip>{text}</Ellipsis>
        }
      }
      // NOTE: 复制模式
      if(dou.copyText !== undefined){
        var _render = _formatDom_fn?_formatDom_fn:dou.render;
        if(_render){
          _formatDom_fn = function(t,r){
            var _t = dou.copyText;
            if(r[_t] !== undefined){ _t = r[_t]};
            return <CopyToClipboard text={_t}><span style={{cursor:"pointer"}} onClick={()=>{message.success("copy succed")}}>{_render(...arguments)}</span></CopyToClipboard>
          }
        }else{
          _formatDom_fn = (text,r)=>{
            var _t = dou.copyText;
            if(r[_t] !== undefined){ _t = r[_t]};
            return <CopyToClipboard text={_t}><span style={{cursor:"pointer"}} onClick={()=>{message.success("copy succed")}}>{text}</span></CopyToClipboard>
          }
        }
      }
      dou.render = _formatDom_fn;
    })

    return _bbb
  }

  render() {
    const { selectedRowKeys } = this.state;
    // 进行权限控制
    const columns=getAuthColumn(this.props.columns, this.props.useName);

    // NOTE: 修饰columns
    const _columns = this.modifyC(columns)
    const _tableOpts = {
      rowKey:record => record.id ,
      ...this.props,
      columns:_columns
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
