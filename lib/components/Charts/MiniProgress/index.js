Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

require('antd/lib/tooltip/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MiniProgress = function MiniProgress(_ref) {
  var target = _ref.target,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'rgb(19, 194, 194)' : _ref$color,
      strokeWidth = _ref.strokeWidth,
      percent = _ref.percent;
  return _react2.default.createElement(
    'div',
    { className: _index2.default.miniProgress },
    _react2.default.createElement(
      _tooltip2.default,
      { title: '\u76EE\u6807\u503C: ' + target + '%' },
      _react2.default.createElement(
        'div',
        {
          className: _index2.default.target,
          style: { left: target ? target + '%' : null }
        },
        _react2.default.createElement('span', { style: { backgroundColor: color || null } }),
        _react2.default.createElement('span', { style: { backgroundColor: color || null } })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _index2.default.progressWrap },
      _react2.default.createElement('div', {
        className: _index2.default.progress,
        style: {
          backgroundColor: color || null,
          width: percent ? percent + '%' : null,
          height: strokeWidth || null
        }
      })
    )
  );
};

exports.default = MiniProgress;
module.exports = exports['default'];