import React, {Component} from 'react';
import {Form, Input, Modal, message} from 'antd';
const FormItem = Form.Item;


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
    //const {dispatch, modalType} = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const reqData = {
          ...values
        };

        // service.password(reqData).then((data) => {
        //   if (data && !data.data.success) {
        //     message.error(data.data.resultView);
        //   } else {
        //     this.props.hideModelHandler();
        //     message.info('修改密码成功！');
        //     window.location.href = window.path + "logout"
        //   }
        // })

        //dispatch({type: `accounts/${modalType}`, payload: data});

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
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }

    let re = /(?=^.{6,32}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (value&&!re.test(value)) {
      callback('密码必须同时包含大写字母、小写字母、符号、数字且不低于6位!');
    }else{
      callback();
    }
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({
      confirmDirty: this.state.confirmDirty || !!value
    });
  }

  render() {
    const modalOpts = {
      title: '修改密码',
      visible: this.props.visible,
      onOk: this.okHandler,
      onCancel: this.props.hideModelHandler
    };
    const {children} = this.props;
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
                    validator: this.checkConfirm
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
