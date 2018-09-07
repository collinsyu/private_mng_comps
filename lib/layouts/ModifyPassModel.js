import 'antd/lib/modal/style';
import _Modal from 'antd/lib/modal';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import 'antd/lib/message/style';
import _message from 'antd/lib/message';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import * as service from '../services/users';
var FormItem = _Form.Item;

var ModifyPassModel = function (_Component) {
  _inherits(ModifyPassModel, _Component);

  function ModifyPassModel(props) {
    _classCallCheck(this, ModifyPassModel);

    var _this = _possibleConstructorReturn(this, (ModifyPassModel.__proto__ || Object.getPrototypeOf(ModifyPassModel)).call(this, props));

    _this.showModelHandler = function (e) {
      if (e) e.stopPropagation();
      _this.setState({ visible: true });
    };

    _this.okHandler = function () {
      //const {dispatch, modalType} = this.props;
      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          var reqData = _extends({}, values);

          service.password(reqData).then(function (data) {
            if (data && !data.data.success) {
              _message.error(data.data.resultView);
            } else {
              _this.props.hideModelHandler();
              _message.info('修改密码成功！');
              window.location.href = window.path + "logout";
            }
          });

          //dispatch({type: `accounts/${modalType}`, payload: data});
        }
      });
    };

    _this.checkPassword = function (rule, value, callback) {
      var form = _this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('两次输入的密码必须一致!');
      } else {
        callback();
      }
    };

    _this.checkConfirm = function (rule, value, callback) {
      var form = _this.props.form;
      if (value && _this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }

      var re = /(?=^.{6,32}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
      if (value && !re.test(value)) {
        callback('密码必须同时包含大写字母、小写字母、符号、数字且不低于6位!');
      } else {
        callback();
      }
    };

    _this.handleConfirmBlur = function (e) {
      var value = e.target.value;
      _this.setState({
        confirmDirty: _this.state.confirmDirty || !!value
      });
    };

    _this.state = {
      visible: _this.props.visible,
      confirmDirty: false
    };
    return _this;
  }

  _createClass(ModifyPassModel, [{
    key: 'render',
    value: function render() {
      var modalOpts = {
        title: '修改密码',
        visible: this.props.visible,
        onOk: this.okHandler,
        onCancel: this.props.hideModelHandler
      };
      var children = this.props.children;
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var formItem = this.props.formItem;
      if (this.props.modalType === 'create') {
        if (this.props.newData['initData']) {
          formItem = this.props.newData['initData'];
        }
      }
      var formItemLayout = {
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

      return React.createElement(
        'span',
        null,
        React.createElement(
          'span',
          { onClick: this.showModelHandler },
          children
        ),
        React.createElement(
          _Modal,
          modalOpts,
          React.createElement(
            _Form,
            { layout: 'horizontal' },
            React.createElement(
              FormItem,
              _extends({}, formItemLayout, { label: '\u65E7\u5BC6\u7801', hasFeedback: true }),
              getFieldDecorator('oldpassword', {
                rules: [{
                  required: true,
                  message: '请输入旧的登录密码'
                }]
              })(React.createElement(_Input, { type: 'password' }))
            ),
            React.createElement(
              FormItem,
              _extends({}, formItemLayout, { label: '\u65B0\u5BC6\u7801', hasFeedback: true }),
              getFieldDecorator('password', {
                rules: [{
                  required: true,
                  message: '请输入登录密码'
                }, {
                  validator: this.checkConfirm
                }]
              })(React.createElement(_Input, { type: 'password' }))
            ),
            React.createElement(
              FormItem,
              _extends({}, formItemLayout, { label: '\u786E\u8BA4\u65B0\u5BC6\u7801', hasFeedback: true }),
              getFieldDecorator('confirm', {
                rules: [{
                  required: true,
                  message: '请两次输入新密码!'
                }, {
                  validator: this.checkPassword
                }]
              })(React.createElement(_Input, { type: 'password', onBlur: this.handleConfirmBlur }))
            )
          )
        )
      );
    }
  }]);

  return ModifyPassModel;
}(Component);

export default _Form.create()(ModifyPassModel);