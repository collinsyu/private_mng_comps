Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var _classNames;

  var title = _ref.title,
      children = _ref.children,
      last = _ref.last,
      block = _ref.block,
      grid = _ref.grid,
      rest = _objectWithoutProperties(_ref, ['title', 'children', 'last', 'block', 'grid']);

  var cls = (0, _classnames2.default)(_index2.default.standardFormRow, (_classNames = {}, _defineProperty(_classNames, _index2.default.standardFormRowBlock, block), _defineProperty(_classNames, _index2.default.standardFormRowLast, last), _defineProperty(_classNames, _index2.default.standardFormRowGrid, grid), _classNames));

  return _react2.default.createElement(
    'div',
    _extends({ className: cls }, rest),
    title && _react2.default.createElement(
      'div',
      { className: _index2.default.label },
      _react2.default.createElement(
        'span',
        null,
        title
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _index2.default.content },
      children
    )
  );
};

module.exports = exports['default'];