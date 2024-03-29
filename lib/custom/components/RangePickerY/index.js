Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/date-picker/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangePicker = _datePicker2.default.RangePicker;

var RangePickerX = function (_Component) {
  _inherits(RangePickerX, _Component);

  function RangePickerX() {
    _classCallCheck(this, RangePickerX);

    return _possibleConstructorReturn(this, (RangePickerX.__proto__ || Object.getPrototypeOf(RangePickerX)).apply(this, arguments));
  }

  _createClass(RangePickerX, [{
    key: 'render',
    value: function render() {
      var ranges = {
        '今天': [(0, _moment2.default)(), (0, _moment2.default)()],
        '昨天': [(0, _moment2.default)().add(-1, 'days'), (0, _moment2.default)().add(-1, 'days')],
        '前7天': [(0, _moment2.default)().add(-7, 'days'), (0, _moment2.default)()],
        '本月': [(0, _moment2.default)().startOf('month'), (0, _moment2.default)()]
      };

      var _props = _extends({
        ranges: ranges,
        style: { width: "100%" }
      }, this.props);
      // console.log(this.props);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(RangePicker, _props)
      );
    }
  }]);

  return RangePickerX;
}(_react.Component);

exports.default = RangePickerX;
module.exports = exports['default'];