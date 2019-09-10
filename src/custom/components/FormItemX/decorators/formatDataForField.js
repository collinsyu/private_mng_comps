import React from "react"
import { query } from '../../../../utils/request';

const formatdata = () => (WrappedComponent) => {
    return class extends React.Component {
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
           
        
            return initValue;
          }
        render() {
            // NOTE: 2019-09-05 22:25:00 构造ruetype data
            var _rules = this.getRules();
            const _intValue = this.renderInitValue();
            
            return <WrappedComponent {...this.props} _rules={_rules} _intValue={_intValue}/>

        }
    }
}

export default formatdata