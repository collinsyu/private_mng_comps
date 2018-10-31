import React, { PureComponent } from 'react';
import { Input, Icon,Select ,Checkbox,Tag} from 'antd';
import  Ellipsis from "../../components/Ellipsis";
import _ from "lodash";

const Option = Select.Option;
const { TextArea } = Input;


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
  handleMultiSelectChange = (value) => {

    this.setState({ value:_.map(value,(e)=>(e.key)), text:_.map(value,(e)=>(e.label)) });
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
          <Select onBlur={this.check} dropdownMatchSelectWidth={false} labelInValue defaultValue={{ key: value }} autoFocus onChange={this.handleSelectChange} style={{width: '100%'}}>
            {this.getSelectOption()}
          </Select>
        );
      case 'multiselect':
        console.log(value);
        var _formatvalue = _.map(value,(e)=>({key:e}))
        return (
          <Select onBlur={this.check} mode="multiple" dropdownMatchSelectWidth={false}
            labelInValue defaultValue={_formatvalue} autoFocus onChange={this.handleMultiSelectChange} style={{width: '100%',minWidth:"80px"}}>
            {this.getSelectOption()}
          </Select>
        );
      case 'checkbox':
        return (
          <Checkbox onBlur={this.check} labelInValue checked={value} autoFocus onChange={(e)=>{this._handleChange(e.target.checked)}}/>
        );
      case 'textarea':
        return (
          <TextArea onBlur={this.check} autoFocus value={value} onChange={this.handleChange} onPressEnter={this.check} />
        );
      default:
        return <Input onBlur={this.check} autoFocus value={value} onChange={this.handleChange} onPressEnter={this.check} />
    }
  }
  renderLabel =() => {
    const { type ,option=[]} = this.props;
    const { value,text, editable } = this.state;
    switch (type) {
      case 'checkbox':
        return value?<Icon type="check-circle-o" style={{color:"green"}}/>:<Icon type="close-circle-o" style={{color:"red"}}/>
      case 'select':

        var _str = text;
        if(!_str){
          var _obj = _.find(option,(e)=>(e.value === value))||{};
          _str = _obj.label;
        }
        return _str
      case 'multiselect':
        var _arr = text||[];
        if(!_arr.length){
          option.map(function(_q){
            if(value.indexOf(_q.value) !== -1){
              _arr.push(_q.label)
            }
          })
        }
        return _.map(_arr,(e,ii)=>(<Tag key={ii} color="blue">{e}</Tag>))
      default:
        return <Ellipsis length={20} tooltip>{text ? text : value || ' '}</Ellipsis>
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
