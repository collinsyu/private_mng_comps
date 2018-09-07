var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

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

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
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

function generator(_ref) {
  var defaultProps = _ref.defaultProps,
      defaultRules = _ref.defaultRules,
      type = _ref.type;

  return function (WrappedComponent) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
      _inherits(BasicComponent, _Component);

      function BasicComponent(props) {
        _classCallCheck(this, BasicComponent);

        var _this = _possibleConstructorReturn(this, (BasicComponent.__proto__ || Object.getPrototypeOf(BasicComponent)).call(this, props));

        _this.onGetCaptcha = function () {
          var count = 59;
          _this.setState({ count: count });
          if (_this.props.onGetCaptcha) {
            _this.props.onGetCaptcha();
          }
          _this.interval = setInterval(function () {
            count -= 1;
            _this.setState({ count: count });
            if (count === 0) {
              clearInterval(_this.interval);
            }
          }, 1000);
        };

        _this.state = {
          count: 0
        };
        return _this;
      }

      _createClass(BasicComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.context.updateActive) {
            this.context.updateActive(this.props.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          clearInterval(this.interval);
        }
      }, {
        key: 'render',
        value: function render() {
          var getFieldDecorator = this.context.form.getFieldDecorator;

          var options = {};
          var otherProps = {};

          var _props = this.props,
              onChange = _props.onChange,
              defaultValue = _props.defaultValue,
              rules = _props.rules,
              name = _props.name,
              restProps = _objectWithoutProperties(_props, ['onChange', 'defaultValue', 'rules', 'name']);

          var count = this.state.count;

          options.rules = rules || defaultRules;
          if (onChange) {
            options.onChange = onChange;
          }
          if (defaultValue) {
            options.initialValue = defaultValue;
          }
          otherProps = restProps || otherProps;
          if (type === 'Captcha') {
            var inputProps = (0, _omit2.default)(otherProps, ['onGetCaptcha']);
            return _react2.default.createElement(FormItem, null, _react2.default.createElement(_row2.default, { gutter: 8 }, _react2.default.createElement(_col2.default, { span: 16 }, getFieldDecorator(name, options)(_react2.default.createElement(WrappedComponent, _extends({}, defaultProps, inputProps)))), _react2.default.createElement(_col2.default, { span: 8 }, _react2.default.createElement(_button2.default, {
              disabled: count,
              className: styles.getCaptcha,
              size: 'large',
              onClick: this.onGetCaptcha
            }, count ? count + ' s' : '获取验证码'))));
          }
          return _react2.default.createElement(FormItem, null, getFieldDecorator(name, options)(_react2.default.createElement(WrappedComponent, _extends({}, defaultProps, otherProps))));
        }
      }]);

      return BasicComponent;
    }(_react.Component), _class.contextTypes = {
      form: _propTypes2.default.object,
      updateActive: _propTypes2.default.func
    }, _temp;
  };
}

var LoginItem = {};
Object.keys(_map2.default).forEach(function (item) {
  LoginItem[item] = generator({
    defaultProps: _map2.default[item].props,
    defaultRules: _map2.default[item].rules,
    type: item
  })(_map2.default[item].component);
});

exports.default = LoginItem;
module.exports = exports['default'];