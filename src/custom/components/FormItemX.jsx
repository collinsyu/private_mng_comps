import React, {Component} from 'react';
import {Form,Input,InputNumber,DatePicker,Upload, Button, Icon,TreeSelect,Checkbox} from 'antd';
import SelectX from './SelectX';
import CascaderX from './CascaderX';
import CheckboxX from './CheckboxX';
import CheckboxNoLabel from './CheckboxNoLabel';
import RadioX from './RadioX';
import RangePickerX from './RangePickerX';
import {formItemLayout} from '../constants'
import {getAuth,getAuthColumn,getAuthFormItem} from '../tool';
import moment from 'moment';
import UploadImageX from './UploadImageX';
import UploadImageOrOnline from './UploadImageOrOnline';
import UploadX from './UploadX';
import _ from "lodash"
import { query } from '../../utils/request';

const { TextArea } = Input;
const FormItem = Form.Item;


class FormItemX extends Component {
  //获取校验规则
  getRules = () => {
    let rules = [];
    if(this.props.required) {
      rules.push({
        required: true,
        message: `请输入正确的${this.props.label}`
      });
    }
    if(this.props.rules) {
      // 合并
      rules = rules.concat(this.props.rules);
    }
    if(this.props.ruleType) {
      let ruleList = [];
      if(this.props.ruleType instanceof Array) {
        ruleList = this.props.ruleType;
      } else {
        ruleList.push(this.props.ruleType);
      }
      ruleList.map((rule)=>{
        switch(rule) {
          case 'email':
            rules.push({
              type: 'email',
              message: '请输入正确的邮箱地址！'
            });
            break;
          case 'mobile':
            const mobileRegex='^[1][3,4,5,6,7,8,9][0-9]{9}$';
            rules.push({
              pattern: new RegExp(mobileRegex),
              message: '请输入正确的手机号码！'
            });
            break;
          case 'phone':
            const phoneRegex='^[1][3,4,5,7,8][0-9]{9}$';
            rules.push({
              pattern: new RegExp(phoneRegex),
              message: '请输入正确的手机号码！'
            });
            break;
          default:
        }
        return '';
      })
    }

    if(this.props.exists) {
      rules.push({
        validator: this.handleFieldExists,
        trigger: 'blur',
        message: '呃，你输入的内容已存在，请重新输入！'
      });
    }

    return rules;
  }

  handleFieldExists = (rule, value, callback) => {
    if (this.props.modalType !== 'create') {
      if(this.props.formItem[rule.field] === value) {
        callback();
        return;
      }
    }

    if (!value) {
      callback();
    } else {
      const reqData = {
        fieldName: this.props.name,
        value: value
      };
      var pathname = this.props.pathname;
      if(pathname.substr(0, 1) === "/"){
        pathname = pathname.replace(/^\/*/ig,"");
      }
      query(`${pathname}/exists`,reqData).then((data) => {
        if(!data || !data.success){
          return callback("查询接口报错")
        }
        if(!data.success){
          return callback("查询接口报错")
        }
        if(data.exist){
          return callback(data.resultView||"已存在");
        }
        callback();
      })
    }
  }
  transformCascaderX = (props) => {
    let opts = JSON.parse(JSON.stringify(props.typeOpts));

    if(this.props.modalType === 'update') {
      const { modifyDisabled=false } = this.props;
      if(modifyDisabled) {
        // debugger
        opts.disabled=true;
      }
    }

    if(!props.typeOpts['typeName']) {
      opts.typeName = this.props.name;
    }
    if(props.dataName) {
      opts.typeName = props.dataName;
    }
    if(props.mode) {
      opts.mode = props.mode;
    }
    // debugger;
    const placeholder = `请选择${props.label}`;
    return <CascaderX {...opts} placeholder={placeholder} onChange={(value)=>props.onChange&&props.onChange(props.name,value)} onBlur={(value)=>props.onBlur&&props.onBlur(props.name,value)} />;
  };
  transformSelectX = (props) => {
  //debugger
    // const obj2 = {...obj1}; 属于对象浅拷贝
    // let opts = {...props.typeOpts};
    let opts = JSON.parse(JSON.stringify(props.typeOpts));

    if(this.props.modalType === 'update') {
      const { modifyDisabled=false } = this.props;
      if(modifyDisabled) {
        // debugger
        opts.disabled=true;
      }
    }

    if(!props.typeOpts['typeName']) {
      opts.typeName = this.props.name;
    }
    if(props.dataName) {
      opts.typeName = props.dataName;
    }
    if(props.mode) {
      opts.mode = props.mode;
    }
    // debugger;
    const placeholder = `请选择${props.label}`;
    return <SelectX {...opts} placeholder={placeholder} onSelect={(value)=>props.onChange&&props.onChange(props.name,value)} onBlur={(value)=>props.onBlur&&props.onBlur(props.name,value)} />;
  };
  transformRangePickerX = (props) => {
    // const obj2 = {...obj1}; 属于对象浅拷贝
    let opts = {...props.typeOpts};
    if(this.props.search) {
      opts = {...props.typeOpts, style:{width: 210}}
    }
    return <RangePickerX {...opts} onChange={(value)=>props.onChange&&props.onChange(props.name,value)}/>;
  };

  getFormItem = () => {
    let type = this.props.type;
    if(!type) {
      //设置默认值
      type = 'input';
    }
    let typeOpts = JSON.parse(JSON.stringify(this.props.typeOpts));
    if(!typeOpts) {
      typeOpts = {};
    }
    if(this.props.modalType === 'update') {
      const { modifyDisabled=false } = this.props;
      if(modifyDisabled) {
        typeOpts.disabled=true;
      }
    }

    let placeholder = `请输入${this.props.label}`;
    if(this.props.placeholder) {
      placeholder = this.props.placeholder;
    }
    switch (type) {
      case 'input':
        let itOpts = {...typeOpts};
        delete itOpts.all;
        delete itOpts.typeName;
        return <Input {...itOpts} placeholder={placeholder}/>;

      case 'select':
        let stOpts = {...typeOpts};
        delete stOpts.all;
        delete stOpts.typeName;
        placeholder = `请选择${this.props.label}`;
        return <Input {...stOpts} placeholder={placeholder} onBlur={(value)=>this.props.onBlur&&this.props.onBlur(this.props.name,value.target.value)} onChange={(value)=>this.props.onChange&&this.props.onChange(this.props.name,value.target.value)}/>;

      case 'selectx':
        return this.transformSelectX(this.props);
      case 'cascaderx':
        return this.transformCascaderX(this.props);
      case 'number':
        let inOpts = {...typeOpts};
        delete inOpts.all;
        delete inOpts.typeName;
        placeholder = `请输入${this.props.label}`;
        return <InputNumber {...inOpts} placeholder={placeholder} />;
      case 'checkboxnolabel':
        return <CheckboxNoLabel {...typeOpts} onChange={(value)=>this.props.onChange&&this.props.onChange(this.props.name,value)}/>;
      case 'checkboxx':
        placeholder = `请选择${this.props.label}`;
        typeOpts.typeName = this.props.name;
        if(this.props.dataName) {
          typeOpts.typeName = this.props.dataName;
        }
        return <CheckboxX {...typeOpts} onChange={(value)=>this.props.onChange&&this.props.onChange(this.props.name,value)}/>;
      case 'radiox':
        placeholder = `请选择${this.props.label}`;
        typeOpts.typeName = this.props.name;
        if(this.props.dataName) {
          typeOpts.typeName = this.props.dataName;
        }
        return <RadioX {...typeOpts} onChange={(value)=>this.props.onChange&&this.props.onChange(this.props.name,value.target.value)}/>;
      case 'rangepickerx':
        return this.transformRangePickerX(this.props);
      case 'datepicker':
        return <DatePicker {...typeOpts}  placeholder={placeholder}/>;
      case 'textarea':
        let {rows} = this.props;
        return <TextArea rows={rows}  placeholder={placeholder}/>;
      case 'upload':
        const uploadFileprops = {
          action: window.path+'upload',
          multiple: false,
          onChange: this.props.uploadCallbak,
          data: {type: this.props.uploadType},
          showUploadList:false,
          accept:'',
          ...this.props.uploadProps
        };
        return <Upload {...uploadFileprops}><Button type="ghost"><Icon type="upload" />点击上传文件</Button></Upload>;
      case 'uploadx':
        const uploadxFileprops = {
          action: window.path+'upload',
          multiple: false,
          onChange: this.props.uploadCallbak,
          data: {type: this.props.uploadType},
          showUploadList:false,
          accept:'',
          ...this.props.uploadProps
        };
        return <UploadX {...uploadxFileprops}/>;

      case 'treeselect':
        let treeData = [];
        const {data={}} = this.props.typeOpts;
        if (data[this.props.name] instanceof Array) {
          treeData=data[this.props.name];
        }
        const treeProps = {
          dropdownStyle:{ maxHeight: 400, overflow: 'auto' },
          treeData,
          allowClear:true,
          placeholder,
          ...this.props.treeProps
        };
        return <TreeSelect showSearch treeNodeFilterProp="pinyin"  {...treeProps} onChange={(value)=>this.props.onChange&&this.props.onChange(this.props.name,value)} />;


      case 'uploadimagex':
        let uiOpts = {...typeOpts};
        delete uiOpts.all;
        delete uiOpts.typeName;
        return <UploadImageX {...uiOpts}/>;

      case 'uploadimageonmodal':
        let uimOpts = {...typeOpts};
        delete uimOpts.all;
        delete uimOpts.typeName;
        return <UploadImageOrOnline {...uimOpts}/>;

      case 'null':
        return [];
        break;
      default:
        let ooOpts = {...typeOpts};
        delete ooOpts.all;
        delete ooOpts.typeName;


        return <Input {...ooOpts} placeholder={placeholder} onBlur={(value)=>this.props.onBlur&&this.props.onBlur(this.props.name,value.target.value)} onChange={(value)=>this.props.onChange&&this.props.onChange(this.props.name,value.target.value)} onKeyUp={(value)=>this.props.onKeyUp&&this.props.onKeyUp(this.props.name,value.target.value)}/>;
    }
  }
  renderInitValue = ()=>{
    var {initValue,formItem ,name,type,start,end} = this.props;

    if (this.props.modalType === 'create') {
      if(this.props.newData){
        if (this.props.newData['initData']) {
          formItem = this.props.newData['initData'];
        }
      }
    }


    if(initValue === undefined && formItem) {
      //从item中取
      initValue = formItem[name];
    }
    // 时间类型的需要处理
    if(type === 'rangepickerx') {
      let rangePickerData = [];
      if(formItem) {
        if (formItem[start] && formItem[end]) {
          rangePickerData.push(moment(formItem[start], 'YYYY-MM-DD'));
          rangePickerData.push(moment(formItem[end], 'YYYY-MM-DD'));
        }
      }

      initValue = rangePickerData;
    }

    if(type === 'datepicker') {
      if (formItem[name]) {
        try {
          initValue = moment(formItem[name], 'YYYY-MM-DD');
        } catch (e) {
          initValue = formItem[name];
        }

      }
    }
    return initValue;
  }
  renderInitValueToText = (_intValue)=>{
    var {formItem ,name,type,newData} = this.props;
    if(type === "selectx"||type === "select"||type === "selectx"){
      if(!newData){
        return _intValue
      }
      if(!newData[name]){
        return _intValue
      }
      // 获取汉字
      var _obj = _.find(newData[name],(o)=>(o.value === _intValue))||{};
      return _obj.name|| _intValue;

    }else{
      return _intValue
    }

  }
  render() {






    let defaultOpts = {}
    if(this.props.search) {
      if(this.props.formItemLayout) {
        defaultOpts={...this.props.formItemLayout}
      }
    } else {
      let _formItemLayout = formItemLayout;
      if(this.props.formItemLayout) {
        _formItemLayout = this.props.formItemLayout
      }
      defaultOpts = {
        hasFeedback: true,
        ..._formItemLayout
      }
    }

    const { modifyDisplay = true,modifyText=false, modifyDisabled=false } = this.props;
    const authCode = this.props.useName + '.' + this.props.name;
    // let display = true;
    let display = getAuthFormItem(this.props.name,this.props.useName);
    if(!display) {
      if(this.props.modalType === 'update') {
        display =  modifyDisplay;
      }
    }
    let isText = this.props.type==='text';
    if(this.props.modalType === 'update') {

        isText =  modifyText;
    }

    // console.log(initValue);
    const _intValue = this.renderInitValue();
    return (display ?
      <FormItem {...defaultOpts} {...this.props}>
        {isText?this.renderInitValueToText(_intValue):
          (this.props.type==='null'?
          this.props.children:
          this.props.getFieldDecorator(this.props.name, {
              rules: this.getRules(),
              validateTrigger:this.props.validateTrigger,
              initialValue: _intValue
          })(this.getFormItem())
        )

        }

      </FormItem>
      :<span/>
    );
  }
};

export default FormItemX;
