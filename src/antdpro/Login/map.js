'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'main': 'antd-pro-login-main',
  'tabs': 'antd-pro-login-tabs',
  'ant-tabs-tab': 'antd-pro-login-ant-tabs-tab',
  'ant-input-affix-wrapper': 'antd-pro-login-ant-input-affix-wrapper',
  'ant-input': 'antd-pro-login-ant-input',
  'ant-tabs': 'antd-pro-login-ant-tabs',
  'ant-tabs-bar': 'antd-pro-login-ant-tabs-bar',
  'ant-form-item': 'antd-pro-login-ant-form-item',
  'prefixIcon': 'antd-pro-login-prefixIcon',
  'getCaptcha': 'antd-pro-login-getCaptcha',
  'submit': 'antd-pro-login-submit'
};


var map = {
  UserName: {
    component: _input2.default,
    props: {
      size: 'large',
      prefix: _react2.default.createElement(_icon2.default, { type: 'user', className: styles.prefixIcon }),
      placeholder: 'admin'
    },
    rules: [{
      required: true, message: '请输入账户名！'
    }]
  },
  Password: {
    component: _input2.default,
    props: {
      size: 'large',
      prefix: _react2.default.createElement(_icon2.default, { type: 'lock', className: styles.prefixIcon }),
      type: 'password',
      placeholder: '888888'
    },
    rules: [{
      required: true, message: '请输入密码！'
    }]
  },
  Mobile: {
    component: _input2.default,
    props: {
      size: 'large',
      prefix: _react2.default.createElement(_icon2.default, { type: 'mobile', className: styles.prefixIcon }),
      placeholder: '手机号'
    },
    rules: [{
      required: true, message: '请输入手机号！'
    }, {
      pattern: /^1\d{10}$/, message: '手机号格式错误！'
    }]
  },
  Captcha: {
    component: _input2.default,
    props: {
      size: 'large',
      prefix: _react2.default.createElement(_icon2.default, { type: 'mail', className: styles.prefixIcon }),
      placeholder: '验证码'
    },
    rules: [{
      required: true, message: '请输入验证码！'
    }]
  }
};

exports.default = map;
module.exports = exports['default'];