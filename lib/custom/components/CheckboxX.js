Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox = require('antd/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/checkbox/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxGroup = _checkbox2.default.Group;

var CheckboxX = function (_Component) {
  _inherits(CheckboxX, _Component);

  function CheckboxX() {
    _classCallCheck(this, CheckboxX);

    return _possibleConstructorReturn(this, (CheckboxX.__proto__ || Object.getPrototypeOf(CheckboxX)).apply(this, arguments));
  }

  _createClass(CheckboxX, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          typeName = _props.typeName,
          restProps = _objectWithoutProperties(_props, ['data', 'typeName']);

      var options = [];
      if (data[typeName] instanceof Array) {
        options = data[typeName];
      }
      delete restProps.all;
      delete restProps.style;
      return _react2.default.createElement(CheckboxGroup, _extends({ options: options }, restProps));
    }
  }]);

  return CheckboxX;
}(_react.Component);

;

exports.default = CheckboxX;
module.exports = exports['default'];