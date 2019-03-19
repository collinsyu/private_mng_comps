import React, {Component} from 'react';
import {Form, Input, Modal, message,Alert} from 'antd';
import request from '../utils/request';
import qs from 'qs';

const FormItem = Form.Item;


var testP = {
  regex: {
    illegal: /[^-+=|,0-9a-zA-Z!@#$%^&*?_.~+\/\\(){}\[\]<>]/,
    allNumber: /^\d+$/,
    allLetter: /^[a-zA-Z]+$/,
    allCharacter: /^[-+=|,!@#$%^&*?_.~+\/\\(){}\[\]<>]+$/,
    allSame: /^([\s\S])\1*$/,
    upperLetter: /[A-Z]/,
    lowerLetter: /[a-z]/,
    number: /\d/g,
    character: /[-+=|,!@#$%^&*?_.~+\/\\()|{}\[\]<>]/
  },
  score: function(e) {
    var t = 0;
    if (this.isIllegal(e)) return t;
    var n = this.size(e);
    n <= 4 ? t += 5 : n > 4 && n < 8 ? t += 10 : n >= 8 && (t += 25);
    var r = this.hasLowerAndUpperLetter(e),
      o = this.hasLetter(e);
    r ? t += 20 : o && (t += 10);
    var i = this.hasNumber(e);
    i >= 3 ? t += 20 : i && (t += 10);
    var s = this.hasCharacter(e);
    return s >= 3 ? t += 25 : s && (t += 10), r && i && s ? t += 10 : o && i && s ? t += 5 : (o && i || o && s || i && s) && (t += 2), t
  },
  level: function(e) {
    return Math.floor(this.score(e) / 10)
  },
  size: function(e) {
    return e.length
  },
  isIllegal: function(e) {
    return !!e.match(this.regex.illegal)
  },
  isAllNumber: function(e) {
    return !!e.match(this.regex.allNumber)
  },
  isAllLetter: function(e) {
    return !!e.match(this.regex.allLetter)
  },
  isAllSame: function(e) {
    return !!e.match(this.regex.allSame)
  },
  hasNumber: function(e) {
    return (e.match(this.regex.number) || []).length
  },
  hasLetter: function(e) {
    return !!e.match(this.regex.lowerLetter) || !!e.match(this.regex.upperLetter)
  },
  hasLowerAndUpperLetter: function(e) {
    return !!e.match(this.regex.lowerLetter) && !!e.match(this.regex.upperLetter)
  },
  hasNumberAndLetter: function(e) {
    return !(!e.match(this.regex.number) || !e.match(this.regex.lowerLetter) && !e.match(this.regexp.upperLetter))
  },
  hasCharacter: function(e) {
    return (e.match(this.regex.character) || []).length
  }
}
class ModifyPassModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      confirmDirty: false
    };
  };

  showModelHandler = (e) => {
    if (e)
      e.stopPropagation();
    this.setState({visible: true});
  };

  okHandler = () => {
    const {resetPassword} = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const reqData = {
          ...values
        };
        if(resetPassword){
          return resetPassword(values,this.props.hideModelHandler)
        }
        // 没有配置走默认
        request('password/reset', {
          method: 'post',
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body: qs.stringify(values),
        }).then((data) => {
          if (data && !data.success) {
            message.error(data.resultView);
          } else {
            this.props.hideModelHandler();
            message.info('修改密码成功！');
            window.location.href = window.path + "logout"
          }
        });

      }
    });
  };

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码必须一致!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    if(value.length < 6){
      return callback("密码太短了")
    }
    if(testP.isIllegal(value)){
      return callback("密码不能含有特殊符号")
    }
    if(!(!!(testP.hasNumber(value) && testP.hasLetter(value) || testP.hasNumber(value) && testP.hasCharacter(value) || testP.hasLetter(value) && testP.hasCharacter(value)))){
      return callback("密码设置不符合要求，应包含数字大小写字母")
    }

    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({
      confirmDirty: this.state.confirmDirty || !!value
    });
  }

  render() {
    const {children,isNeedResetPassword} = this.props;
    const modalOpts = {
      title: '修改密码',
      visible: this.props.visible,
      onOk: this.okHandler,
      maskClosable:!isNeedResetPassword,
      onCancel: this.props.hideModelHandler
    };
    const {getFieldDecorator} = this.props.form;
    let formItem = this.props.formItem;
    if (this.props.modalType === 'create') {
      if (this.props.newData['initData']) {
        formItem = this.props.newData['initData'];
      }
    }
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 6
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 14
        }
      }
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>
          {children}
        </span>

        <Modal {...modalOpts}>
          {isNeedResetPassword?<Alert message="首次登陆请修改密码" type="warning" showIcon />:null}
          <Form layout="horizontal">

            <FormItem {...formItemLayout} label="旧密码" hasFeedback>
              {getFieldDecorator('oldpassword', {
                rules: [
                  {
                    required: true,
                    message: '请输入旧的登录密码'
                  }
                ]
              })(<Input type="password"/>)}
            </FormItem>

            <FormItem {...formItemLayout} label="新密码" hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请输入登录密码'
                  }, {
                    validator: this.checkConfirm,
                    trigger: "onBlur"
                  }
                ]
              })(<Input type="password"/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="确认新密码" hasFeedback>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: '请两次输入新密码!'
                  }, {
                    validator: this.checkPassword
                  }
                ]
              })(<Input type="password" onBlur={this.handleConfirmBlur}/>)}
            </FormItem>

          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(ModifyPassModel);
