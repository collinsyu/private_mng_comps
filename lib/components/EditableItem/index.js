Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/icon/style');

require('antd/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableItem = function (_PureComponent) {
  _inherits(EditableItem, _PureComponent);

  function EditableItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditableItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditableItem.__proto__ || Object.getPrototypeOf(EditableItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: _this.props.value,
      editable: false
    }, _this.handleChange = function (e) {
      var value = e.target.value;

      _this.setState({ value: value });
    }, _this.check = function () {
      _this.setState({ editable: false });
      if (_this.props.onChange) {
        _this.props.onChange(_this.state.value);
      }
    }, _this.edit = function () {
      _this.setState({ editable: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditableItem, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          value = _state.value,
          editable = _state.editable;

      return _react2.default.createElement(
        'div',
        { className: _index2.default.editableItem },
        editable ? _react2.default.createElement(
          'div',
          { className: _index2.default.wrapper },
          _react2.default.createElement(_input2.default, {
            value: value,
            onChange: this.handleChange,
            onPressEnter: this.check
          }),
          _react2.default.createElement(_icon2.default, {
            type: 'check',
            className: _index2.default.icon,
            onClick: this.check
          })
        ) : _react2.default.createElement(
          'div',
          { className: _index2.default.wrapper },
          _react2.default.createElement(
            'span',
            null,
            value || ' '
          ),
          _react2.default.createElement(_icon2.default, {
            type: 'edit',
            className: _index2.default.icon,
            onClick: this.edit
          })
        )
      );
    }
  }]);

  return EditableItem;
}(_react.PureComponent);

exports.default = EditableItem;
module.exports = exports['default'];