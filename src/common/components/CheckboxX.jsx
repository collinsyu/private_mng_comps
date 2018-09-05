import React, {Component} from 'react';
import {Checkbox} from 'antd';
const CheckboxGroup = Checkbox.Group;

class CheckboxX extends Component {
  render() {
    const {data,typeName, ...restProps} = this.props;
    let options = [];
    if (data[typeName]instanceof Array) {
      options = data[typeName];
    }
    delete restProps.all;
    delete restProps.style;
    return (
        <CheckboxGroup options={options} {...restProps}/>
    );
  }
};

export default CheckboxX;
