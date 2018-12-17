import React, { Component } from 'react';
import { Popconfirm, Button } from 'antd';



export default class PopconfirmButton extends Component {
  confirm(){
    if(this.props.onConfirm){
      return this.props.onConfirm();
    }
    console.log("请添加onConfirm方法");
  }
  cancel(){
    if(this.props.onCancel){
      return this.props.onCancel();
    }
    console.log("请添加onCancel方法");
  }
  render() {
    const {children,label} = this.props;
    return (
      <Popconfirm title="确认删除此项？" onConfirm={this.confirm} onCancel={this.cancel} okText="确定" cancelText="取消" {...this.props}>
        {children?children:<Button>{label?lable:"请添加label或者children"}<Button/>}
      </Popconfirm>

    );
  }
}
