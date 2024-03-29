Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Result;

require('antd/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Result(_ref) {
  var className = _ref.className,
      type = _ref.type,
      title = _ref.title,
      description = _ref.description,
      extra = _ref.extra,
      actions = _ref.actions,
      restProps = _objectWithoutProperties(_ref, ['className', 'type', 'title', 'description', 'extra', 'actions']);

  var iconMap = {
    error: _react2.default.createElement(_icon2.default, { className: _index2.default.error, type: 'close-circle' }),
    success: _react2.default.createElement(_icon2.default, { className: _index2.default.success, type: 'check-circle' })
  };
  var clsString = (0, _classnames2.default)(_index2.default.result, className);
  return _react2.default.createElement(
    'div',
    _extends({ className: clsString }, restProps),
    _react2.default.createElement(
      'div',
      { className: _index2.default.icon },
      iconMap[type]
    ),
    _react2.default.createElement(
      'div',
      { className: _index2.default.title },
      title
    ),
    description && _react2.default.createElement(
      'div',
      { className: _index2.default.description },
      description
    ),
    extra && _react2.default.createElement(
      'div',
      { className: _index2.default.extra },
      extra
    ),
    actions && _react2.default.createElement(
      'div',
      { className: _index2.default.actions },
      actions
    )
  );
}
module.exports = exports['default'];