import React, {Component} from 'react';
import {Cascader} from 'antd';


class CascaderX extends Component {
  handleChange(value) {
    // 这里主要是处理选择all后，清空选择内容
    console.log(`selected ${value}`);
    if (value === 'all') {
      //console.log("=============")
      this.setState({value: ''});
    }
  };
  render() {
    const {data = {}} = this.props;
    let options = [];
    options = data[this.props.typeName]
    return (
      <Cascader onChange={this.handleChange} placeholder="请选择" {...this.props} options={options}/>
    );
  }
};

export default CascaderX;
