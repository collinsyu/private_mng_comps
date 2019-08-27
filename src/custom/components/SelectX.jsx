import React, {Component} from 'react';
import {Select} from 'antd';
const Option = Select.Option;

class SelectX extends Component {
  getUserType() {
    const {data = {}} = this.props;
    if (data[this.props.typeName]instanceof Array) {
      let dataType = [];
      if (this.props.all === 'true' || this.props.all) {
        let name = '所有';
        if(this.props.alllable) {
          name = this.props.alllable;
        }
        dataType = [
          {
            name: name,
            pinyin: 'all',
            value: 'all'
          },
          ...data[this.props.typeName]
        ];
      } else {
        dataType = data[this.props.typeName]
      }

      return dataType.map(type => <Option key={type.value} pinyin={type.pinyin} value={type.value}>{type.name}</Option>);
    }
  };
  handleChange(value) {
    // 这里主要是处理选择all后，清空选择内容
    console.log(`selected ${value}`);
    if (value === 'all') {
      //console.log("=============")
      this.setState({value: ''});
    }
  };
  render() {
    const {typeName,...restProps} = this.props
    return (
      <div>
        <Select
          dropdownMatchSelectWidth={false}
          style={{width:"100%",minWidth:"120px"}} 
          onChange={this.handleChange} 
          placeholder="请选择" showSearch 
          optionFilterProp="pinyin" 
          notFoundContent="无法找到" {...restProps}>
          {this.getUserType()}
        </Select>
      </div>
    );
  }
};

export default SelectX;
