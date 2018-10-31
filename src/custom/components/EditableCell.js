import React, { PureComponent } from 'react';
import { Input, Icon,Select ,Checkbox} from 'antd';
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
  _handleChange = (value) => {
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
      case 'checkbox':
        return (
          <Checkbox onBlur={this.check} labelInValue checked={value} autoFocus onChange={(e)=>{this._handleChange(e.target.checked)}}/>
        );
      default:
        return <Input onBlur={this.check} autoFocus value={value} onChange={this.handleChange} onPressEnter={this.check} />
    }
  }
  renderLabel =() => {
    const { type } = this.props;
    const { value,text, editable } = this.state;
    switch (type) {
      case 'checkbox':
        return value?<Icon type="check-circle-o" style={{color:"green"}}/>:<Icon type="close-circle-o" style={{color:"red"}}/>
      default:
        return text ? text : value || ' '
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
              {/* <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              /> */}
            </div>
            :
            <div className="editable-cell-text-wrapper" onDoubleClick={this.edit}>
              {this.renderLabel()}
              {/* {text ? text : value || ' '} */}
              {/* <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              /> */}
            </div>
        }
        <style>{`

            .editable-cell {
              position: relative;
            }
            .editable-cell .editable-cell-input-wrapper,
            .editable-cell .editable-cell-text-wrapper {
              padding-right: 24px;
            }
            .editable-cell .editable-cell-text-wrapper {
              padding: 5px 24px 5px 5px;
            }
            .editable-cell .editable-cell-icon,
            .editable-cell .editable-cell-icon-check {
              position: absolute;
              right: 0;
              width: 20px;
              cursor: pointer;
            }

            .editable-cell .editable-cell-icon {
              line-height: 18px;
              display: none;
            }

            .editable-cell .editable-cell-icon-check {
              line-height: 28px;
            }

            .editable-cell .editable-cell:hover .editable-cell-icon {
              display: inline-block;
            }

            .editable-cell .editable-cell-icon:hover,
            .editable-cell .editable-cell-icon-check:hover {
              color: #108ee9;
            }

            .editable-cell .editable-add-btn {
              margin-bottom: 8px;
            }
        `}</style>
      </div>
    );
  }
}
export default EditableCell;
