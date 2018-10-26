import React, {PureComponent} from 'react';

import {Card} from 'antd';
import FormItemX from './FormItemX';
import _ from "lodash";


class FormItemXGen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    const { formConfigs=[],newData, form} = this.props;
    const getFieldDecorator = form?form.getFieldDecorator:this.props.getFieldDecorator
    if(!getFieldDecorator){
      console.error("请务必传入form或者getFieldDecorator");
    }
	  const itemOpts = {
      getFieldDecorator: getFieldDecorator,
      typeOpts: {
        data:newData
      },
      ...this.props,
    }
    return (
      <React.Fragment>
        {formConfigs.map(function(item,ii){
          var newitemOpts = _.cloneDeep(itemOpts);
          newitemOpts = Object.assign(newitemOpts,item.opts||{});
          newitemOpts.typeOpts.data = {};
          newitemOpts.typeOpts.data[item.name] = item.values;
          return  <FormItemX key={ii} {...newitemOpts} label={item.label} name={item.name} type={item.type} />
        })}
      </React.Fragment>
    );
  }
}

export default FormItemXGen;
