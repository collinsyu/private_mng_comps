import React, {Component} from 'react';
import {Cascader} from 'antd';


class CascaderX extends Component {
  render() {
    const {data = {}} = this.props;
    let options = [];
    options = data[this.props.typeName]
    return (
      <Cascader  placeholder="请选择" {...this.props} options={options} />
    );
  }
};

export default CascaderX;
