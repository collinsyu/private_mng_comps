import React, { PureComponent } from 'react';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class RadioX extends PureComponent {
  renderRadio = (options) => {
    const {style} = this.props;
    if(style === "button"){
      return options.map(opt => <RadioButton key={opt.value} value={opt.value}>{opt.name}</RadioButton>);

    }
    return options.map(opt => <Radio key={opt.value} value={opt.value}>{opt.name}</Radio>);
  }

  render() {
    const {data,typeName, ...restProps} = this.props;
    let options = [];
    if (data[typeName]instanceof Array) {
      options = data[typeName];
    }
    delete restProps.all;
    delete restProps.style;
    return (
        <RadioGroup {...restProps}>
          {this.renderRadio(options)}
        </RadioGroup>
    );
  }
};

export default RadioX;
