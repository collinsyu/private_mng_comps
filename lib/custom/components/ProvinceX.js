Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cascader = require('antd/lib/cascader');

var _cascader2 = _interopRequireDefault(_cascader);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/cascader/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProvinceX = function (_Component) {
  _inherits(ProvinceX, _Component);

  function ProvinceX() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProvinceX);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProvinceX.__proto__ || Object.getPrototypeOf(ProvinceX)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (value) {
      console.log(value);
    }, _this.displayRender = function (label) {
      return label[label.length - 1];
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // 只展示最后一项


  _createClass(ProvinceX, [{
    key: 'render',
    value: function render() {
      var options = window.areaAll;
      if (this.props.treeData) {
        options = this.props.treeData;
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_cascader2.default, { options: options, onChange: this.onChange, placeholder: '\u8BF7\u9009\u62E9\u5730\u533A'
        })
      );
    }
  }]);

  return ProvinceX;
}(_react.Component);

;

exports.default = ProvinceX;
module.exports = exports['default'];