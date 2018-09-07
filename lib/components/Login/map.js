import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';
import 'antd/lib/input/style';
import _Input from 'antd/lib/input';
import React from 'react';
var styles = {
  'main': '_--css-module-js',
  'tabs': '_--css-module-js',
  'ant-tabs-tab': '_--css-module-js',
  'ant-input-affix-wrapper': '_--css-module-js',
  'ant-input': '_--css-module-js',
  'ant-tabs': '_--css-module-js',
  'ant-tabs-bar': '_--css-module-js',
  'ant-form-item': '_--css-module-js',
  'prefixIcon': '_--css-module-js',
  'getCaptcha': '_--css-module-js',
  'submit': '_--css-module-js'
};


var map = {
  UserName: {
    component: _Input,
    props: {
      size: 'large',
      prefix: React.createElement(_Icon, { type: 'user', className: styles.prefixIcon }),
      placeholder: 'admin'
    },
    rules: [{
      required: true, message: '请输入账户名！'
    }]
  },
  Password: {
    component: _Input,
    props: {
      size: 'large',
      prefix: React.createElement(_Icon, { type: 'lock', className: styles.prefixIcon }),
      type: 'password',
      placeholder: '888888'
    },
    rules: [{
      required: true, message: '请输入密码！'
    }]
  },
  Mobile: {
    component: _Input,
    props: {
      size: 'large',
      prefix: React.createElement(_Icon, { type: 'mobile', className: styles.prefixIcon }),
      placeholder: '手机号'
    },
    rules: [{
      required: true, message: '请输入手机号！'
    }, {
      pattern: /^1\d{10}$/, message: '手机号格式错误！'
    }]
  },
  Captcha: {
    component: _Input,
    props: {
      size: 'large',
      prefix: React.createElement(_Icon, { type: 'mail', className: styles.prefixIcon }),
      placeholder: '验证码'
    },
    rules: [{
      required: true, message: '请输入验证码！'
    }]
  }
};

export default map;
module.exports = exports['default'];