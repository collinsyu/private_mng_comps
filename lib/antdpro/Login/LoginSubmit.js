

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

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

var FormItem = _form2.default.Item;

exports.default = function (_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['className']);

  var clsString = (0, _classnames2.default)(styles.submit, className);
  return _react2.default.createElement(FormItem, null, _react2.default.createElement(_button2.default, _extends({ size: 'large', className: clsString, type: 'primary', htmlType: 'submit' }, rest)));
};

module.exports = exports['default'];