Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _popconfirm = require('antd/lib/popconfirm');

var _popconfirm2 = _interopRequireDefault(_popconfirm);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/popconfirm/style');

require('antd/lib/button/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopconfirmButton = function (_Component) {
  _inherits(PopconfirmButton, _Component);

  function PopconfirmButton() {
    _classCallCheck(this, PopconfirmButton);

    return _possibleConstructorReturn(this, (PopconfirmButton.__proto__ || Object.getPrototypeOf(PopconfirmButton)).apply(this, arguments));
  }

  _createClass(PopconfirmButton, [{
    key: 'confirm',
    value: function confirm() {
      if (this.props.onConfirm) {
        return this.props.onConfirm();
      }
      console.log("请添加onConfirm方法");
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      if (this.props.onCancel) {
        return this.props.onCancel();
      }
      console.log("请添加onCancel方法");
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          label = _props.label;

      return _react2.default.createElement(
        _popconfirm2.default,
        _extends({ title: '\u786E\u8BA4\u5220\u9664\u6B64\u9879\uFF1F', onConfirm: this.confirm, onCancel: this.cancel, okText: '\u786E\u5B9A', cancelText: '\u53D6\u6D88' }, this.props),
        children ? children : _react2.default.createElement(
          _button2.default,
          null,
          label ? lable : "请添加label或者children"
        )
      );
    }
  }]);

  return PopconfirmButton;
}(_react.Component);

exports.default = PopconfirmButton;
module.exports = exports['default'];