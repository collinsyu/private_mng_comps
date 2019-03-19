Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dva = require('dva');

var _GridContent = require('./GridContent.less');

var _GridContent2 = _interopRequireDefault(_GridContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridContent = function (_PureComponent) {
  _inherits(GridContent, _PureComponent);

  function GridContent() {
    _classCallCheck(this, GridContent);

    return _possibleConstructorReturn(this, (GridContent.__proto__ || Object.getPrototypeOf(GridContent)).apply(this, arguments));
  }

  _createClass(GridContent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          contentWidth = _props.contentWidth,
          children = _props.children;

      var className = '' + _GridContent2.default.main;
      if (contentWidth === 'Fixed') {
        className = _GridContent2.default.main + ' ' + _GridContent2.default.wide;
      }
      return _react2.default.createElement(
        'div',
        { className: className },
        children
      );
    }
  }]);

  return GridContent;
}(_react.PureComponent);

exports.default = (0, _dva.connect)(function (_ref) {
  var setting = _ref.setting;
  return {
    contentWidth: setting.contentWidth
  };
})(GridContent);
module.exports = exports['default'];