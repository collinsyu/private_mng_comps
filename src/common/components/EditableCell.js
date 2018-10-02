import React, { PureComponent } from 'react';
import { Input, Icon,Select } from 'antd';
import   './EditableCell.less';
const Option = Select.Option;

class EditableCell extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      text:this.props.text,
      editable: false,
    };
  };

  componentWillReceiveProps(nextProps){
    this.setState({value:nextProps.value});
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }
  handleSelectChange = (value) => {
    this.setState({ value:value.key, text:value.label });
  }
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.props.record,this.props.dataIndex,this.state.value);
    }
  }
  edit = () => {
    this.setState({ editable: true });
  }
  getSelectOption() {
    if (this.props.option instanceof Array) {
      return this.props.option.map(type => <Option key={type.value} value={type.value}>{type.name}</Option>);
    }
  }
  // 通过type属性，返回不同的控件类型
  getInputItem =() => {
    const { value } = this.state;
    let type = this.props.type;
    if(!type) {
      //设置默认值
      type = 'input';
    }
    switch (type) {
      case 'select':
        return (
          <Select onBlur={this.check} labelInValue defaultValue={{ key: value }} autoFocus onChange={this.handleSelectChange} style={{width: '100%'}}>
            {this.getSelectOption()}
          </Select>
        );
      default:
        return <Input onBlur={this.check} autoFocus value={value} onChange={this.handleChange} onPressEnter={this.check} />
    }
  }
  render() {
    const { value,text, editable } = this.state;
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              {this.getInputItem()}
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper" onDoubleClick={this.edit}>
              {text ? text : value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}
export default EditableCell;
