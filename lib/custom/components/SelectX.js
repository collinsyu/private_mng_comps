Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var SelectX = function (_Component) {
  _inherits(SelectX, _Component);

  function SelectX() {
    _classCallCheck(this, SelectX);

    return _possibleConstructorReturn(this, (SelectX.__proto__ || Object.getPrototypeOf(SelectX)).apply(this, arguments));
  }

  _createClass(SelectX, [{
    key: 'getUserType',
    value: function getUserType() {
      if (this.props.data[this.props.typeName] instanceof Array) {
        var dataType = [];
        if (this.props.all === 'true' || this.props.all) {
          var name = '所有';
          if (this.props.alllable) {
            name = this.props.alllable;
          }
          dataType = [{
            name: name,
            pinyin: 'all',
            value: 'all'
          }].concat(_toConsumableArray(this.props.data[this.props.typeName]));
        } else {
          dataType = this.props.data[this.props.typeName];
        }

        return dataType.map(function (type) {
          return _react2.default.createElement(
            Option,
            { key: type.value, pinyin: type.pinyin, value: type.value },
            type.name
          );
        });
      }
    }
  }, {
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
      var _extends2;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _select2.default,
          _extends((_extends2 = {
            dropdownMatchSelectWidth: false,
            style: { width: "100%", minWidth: "120px" } }, _defineProperty(_extends2, 'dropdownMatchSelectWidth', true), _defineProperty(_extends2, 'onChange', this.handleChange), _defineProperty(_extends2, 'placeholder', '\u8BF7\u9009\u62E9'), _defineProperty(_extends2, 'showSearch', true), _defineProperty(_extends2, 'optionFilterProp', 'pinyin'), _defineProperty(_extends2, 'notFoundContent', '\u65E0\u6CD5\u627E\u5230'), _extends2), this.props),
          this.getUserType()
        )
      );
    }
  }]);

  return SelectX;
}(_react.Component);

;

exports.default = SelectX;
module.exports = exports['default'];