Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cascader = require('antd/lib/cascader');

var _cascader2 = _interopRequireDefault(_cascader);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/cascader/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CascaderX = function (_Component) {
  _inherits(CascaderX, _Component);

  function CascaderX() {
    _classCallCheck(this, CascaderX);

    return _possibleConstructorReturn(this, (CascaderX.__proto__ || Object.getPrototypeOf(CascaderX)).apply(this, arguments));
  }

  _createClass(CascaderX, [{
    key: 'handleChange',
    value: function handleChange(value) {
      // 这里主要是处理选择all后，清空选择内容
      console.log('selected ' + value);
      if (value === 'all') {
        //console.log("=============")
        this.setState({ value: '' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$data = this.props.data,
          data = _props$data === undefined ? {} : _props$data;

      var options = [];
      options = data[this.props.typeName];
      return _react2.default.createElement(_cascader2.default, _extends({ onChange: this.handleChange, placeholder: '\u8BF7\u9009\u62E9' }, this.props, { options: options }));
    }
  }]);

  return CascaderX;
}(_react.Component);

;

exports.default = CascaderX;
module.exports = exports['default'];