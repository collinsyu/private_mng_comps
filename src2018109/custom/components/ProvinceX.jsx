import React, {Component} from 'react';
import {Cascader} from 'antd';

class ProvinceX extends Component {
   onChange=(value)=> {
    console.log(value);
  }

  // 只展示最后一项
   displayRender=(label)=> {
    return label[label.length - 1];
  }
  render() {
  let options =  window.areaAll;
  if(this.props.treeData) {
	options=this.props.treeData;
  }
    return (
      <div>
        <Cascader options={options}  onChange={this.onChange} placeholder="请选择地区"
        />
      </div>
    );
  }
};

export default ProvinceX;
