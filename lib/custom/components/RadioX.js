Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radio = require('antd/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/radio/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = _radio2.default.Group;
var RadioButton = _radio2.default.Button;

var RadioX = function (_PureComponent) {
  _inherits(RadioX, _PureComponent);

  function RadioX() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadioX);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioX.__proto__ || Object.getPrototypeOf(RadioX)).call.apply(_ref, [this].concat(args))), _this), _this.renderRadio = function (options) {
      var style = _this.props.style;

      if (style === "button") {
        return options.map(function (opt) {
          return _react2.default.createElement(
            RadioButton,
            { key: opt.value, value: opt.value },
            opt.name
          );
        });
      }
      return options.map(function (opt) {
        return _react2.default.createElement(
          _radio2.default,
          { key: opt.value, value: opt.value },
          opt.name
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadioX, [{
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
      return _react2.default.createElement(
        RadioGroup,
        restProps,
        this.renderRadio(options)
      );
    }
  }]);

  return RadioX;
}(_react.PureComponent);

;

exports.default = RadioX;
module.exports = exports['default'];