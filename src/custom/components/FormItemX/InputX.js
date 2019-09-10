import React, {Component} from 'react';
import {Input} from 'antd';

import _ from "lodash"

import ishide from "./decorators/ishide"
import isText from "./decorators/isText"
import withChild from "./decorators/withChild"
import formitemLayer from "./decorators/formitemLayer"
import formatData from "./decorators/formatDataForField"


@ishide()
@withChild()
@formatData()
@formitemLayer()
@isText()
class FormItemX extends Component {
  //获取校验规则
  
  
  
  getFormItem = () => {
   
    let typeOpts = JSON.parse(JSON.stringify(this.props.typeOpts));
  
    if(this.props.modalType === 'update') {
      const { modifyDisabled=false } = this.props;
      if(modifyDisabled) {
        typeOpts.disabled=true;
      }
    }

    let placeholder = this.props.placeholder||`请输入${this.props.label}`;
    
   
    let itOpts = {...typeOpts};
    delete itOpts.all;
    delete itOpts.typeName;
    return <Input {...itOpts} placeholder={placeholder}/>;
    
  }
 
  
  render() {

    const {_rules,_intValue} = this.props;
   
   
  
    return (
      
          this.props.getFieldDecorator(this.props.name, {
              rules: _rules,
              validateTrigger:this.props.validateTrigger,
              initialValue: _intValue
          })( this.getFormItem() )
        

        

    );
  }
};

export default FormItemX;
