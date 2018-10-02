import React, {Component} from 'react';
import {Form,Input,InputNumber,DatePicker,Upload, Button, Icon,TreeSelect} from 'antd';
import SelectX from './SelectX';
import CheckboxX from './CheckboxX';
import RadioX from './RadioX';
import RangePickerX from './RangePickerX';
import {formItemLayout} from '../constants'
import {getAuth} from '../tool';
import moment from 'moment';
import UploadImageX from './UploadImageX';
import { query } from '../utils/request';

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
      })
    }

    if(this.props.exists) {
      rules.push({
        validator: this.handleFieldExists,
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
      query('companys/exists',reqData).then((data) => {
        if (data && !data.data.success) {
          callback(data.data.resultView);
        } else {
          if(data.data.exist) {
            callback("1");
          } else {
            callback();
          }
        }
      })
    }
  }

  transformSelectX = (props) => {
    // const obj2 = {...obj1}; 属于对象浅拷贝
    let opts = {...props.typeOpts};

    if(!props.typeOpts['typeName']) {
      opts.typeName = this.props.name;
    }
    if(props.dataName) {
      opts.typeName = props.dataName;
    }
    if(props.mode) {
      opts.mode = props.mode;
    }
    const placeholder = `请选择${props.label}`;
    return <SelectX {...opts} placeholder={placeholder} onSelect={(value)=>props.onChange&&props.onChange(props.name,value)}/>;
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
    let typeOpts = this.props.typeOpts;
    if(!typeOpts) {
      typeOpts = {};
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
        break;
      case 'select':
        let stOpts = {...typeOpts};
        delete stOpts.all;
        delete stOpts.typeName;
        placeholder = `请选择${this.props.label}`;
        return <Input {...stOpts} placeholder={placeholder}/>;
        break;
      case 'selectx':
        return this.transformSelectX(this.props);
        break;
      case 'number':
        let inOpts = {...typeOpts};
        delete inOpts.all;
        delete inOpts.typeName;
        placeholder = `请输入${this.props.label}`;
        return <InputNumber {...inOpts} placeholder={placeholder} />;
        break;
      case 'checkboxx':
        placeholder = `请选择${this.props.label}`;
        typeOpts.typeName = this.props.name;
        return <CheckboxX {...typeOpts} onChange={(value)=>this.props.onChange&&this.props.onChange(this.props.name,value)}/>;
        break;
      case 'radiox':
        placeholder = `请选择${this.props.label}`;
        typeOpts.typeName = this.props.name;
        return <RadioX {...typeOpts} onChange={(value)=>this.props.onChange&&this.props.onChange(this.props.name,value.target.value)}/>;
        break;
      case 'rangepickerx':
        return this.transformRangePickerX(this.props);
        break;
      case 'datepicker':
        return <DatePicker {...typeOpts}  placeholder={placeholder}/>;
        break;
      case 'textarea':
        let {rows} = this.props;
        return <TextArea rows={rows}  placeholder={placeholder}/>;
        break;
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
        {/*<p><a href={tempFile}>下载模板文件</a> 仅支持xlsx,xls格式的文件.</p>*/}
        return <Upload {...uploadFileprops}><Button type="ghost"><Icon type="upload" />点击上传文件</Button></Upload>;
        break;
      case 'treeselect':
        let treeData = [];
        const {data} = this.props.typeOpts;
        if (data[this.props.name] instanceof Array) {
          treeData=data[this.props.name];
        }
        const treeProps = {
          dropdownStyle:{ maxHeight: 400, overflow: 'auto' },
          treeData,
          placeholder,
          ...this.props.treeProps
        };
        return <TreeSelect showSearch treeNodeFilterProp="pinyin"  {...treeProps} />;
        break;

      case 'uploadimagex':
        return <UploadImageX />;
        break;

      default:
        let ooOpts = {...typeOpts};
        delete ooOpts.all;
        delete ooOpts.typeName;
        return <Input {...ooOpts} placeholder={placeholder} onKeyUp={(value)=>this.props.onKeyUp&&this.props.onKeyUp(this.props.name,value.target.value)}/>;
    }
  }

  render() {
    let initValue = this.props.initValue;
    let formItem = this.props.formItem;
    if (this.props.modalType === 'create') {
      if (this.props.newData['initData']) {
        formItem = this.props.newData['initData'];
      }
    }

    if(initValue === undefined && formItem) {
      //从item中取
      initValue = formItem[this.props.name];
    }
    // 时间类型的需要处理
    if(this.props.type === 'rangepickerx') {
      let rangePickerData = [];
      if(formItem) {
        if (formItem[this.props.start] && formItem[this.props.end]) {
          rangePickerData.push(moment(formItem[this.props.start], 'YYYY-MM-DD'));
          rangePickerData.push(moment(formItem[this.props.end], 'YYYY-MM-DD'));
        }
      }

      initValue = rangePickerData;
    }

    if(this.props.type === 'datepicker') {
      if (formItem[this.props.name]) {
        initValue = moment(formItem[this.props.name], 'YYYY-MM-DD');
      }
    }


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
    const { modifyDisplay = true, } = this.props;
    const authCode = this.props.useName + '.' + this.props.name;
    let display = getAuth(authCode);
    if(display) {
      if(this.props.modalType === 'update') {
        display =  modifyDisplay;
      }

    }
    return (display ?
      <FormItem {...defaultOpts} {...this.props}>
      {this.props.type==='text'?initValue:
        this.props.getFieldDecorator(this.props.name, {
            rules: this.getRules(),
            initialValue: initValue || undefined
        })(this.getFormItem())
      }
      </FormItem>
      :<span/>
    );
  }
};

export default FormItemX;
