Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Field = function Field(_ref) {
  var label = _ref.label,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ['label', 'value']);

  return _react2.default.createElement(
    'div',
    _extends({ className: _index2.default.field }, rest),
    _react2.default.createElement(
      'span',
      null,
      label
    ),
    _react2.default.createElement(
      'span',
      null,
      value
    )
  );
};

exports.default = Field;
module.exports = exports['default'];