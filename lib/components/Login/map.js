Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

require('antd/lib/icon/style');

require('antd/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var map = {
  UserName: {
    component: _input2.default,
    props: {
      size: 'large',
      prefix: _react2.default.createElement(_icon2.default, { type: 'user', className: _index2.default.prefixIcon }),
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
      prefix: _react2.default.createElement(_icon2.default, { type: 'lock', className: _index2.default.prefixIcon }),
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
      prefix: _react2.default.createElement(_icon2.default, { type: 'mobile', className: _index2.default.prefixIcon }),
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
      prefix: _react2.default.createElement(_icon2.default, { type: 'mail', className: _index2.default.prefixIcon }),
      placeholder: '验证码'
    },
    rules: [{
      required: true, message: '请输入验证码！'
    }]
  }
};

exports.default = map;
module.exports = exports['default'];