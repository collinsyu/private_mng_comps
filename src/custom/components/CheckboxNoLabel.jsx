import React, {Component} from 'react';
import {Checkbox} from 'antd';

class CheckboxX extends Component {
  render() {
    const {data,typeName, ...restProps} = this.props;
    console.log(this.props);
    return (
      <Checkbox style={{paddingRight:30}} checked={this.props.value} {...restProps}  />

    );
  }
};

export default CheckboxX;
