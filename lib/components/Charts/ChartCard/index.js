Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = require('antd/lib/card');

var _card2 = _interopRequireDefault(_card);

var _spin = require('antd/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/card/style');

require('antd/lib/spin/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ChartCard = function ChartCard(_ref) {
  var _ref$loading = _ref.loading,
      loading = _ref$loading === undefined ? false : _ref$loading,
      contentHeight = _ref.contentHeight,
      title = _ref.title,
      avatar = _ref.avatar,
      action = _ref.action,
      total = _ref.total,
      footer = _ref.footer,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['loading', 'contentHeight', 'title', 'avatar', 'action', 'total', 'footer', 'children']);

  var content = _react2.default.createElement(
    'div',
    { className: _index2.default.chartCard },
    _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)(_index2.default.chartTop, _defineProperty({}, _index2.default.chartTopMargin, !children && !footer))
      },
      _react2.default.createElement(
        'div',
        { className: _index2.default.avatar },
        avatar
      ),
      _react2.default.createElement(
        'div',
        { className: _index2.default.metaWrap },
        _react2.default.createElement(
          'div',
          { className: _index2.default.meta },
          _react2.default.createElement(
            'span',
            { className: _index2.default.title },
            title
          ),
          _react2.default.createElement(
            'span',
            { className: _index2.default.action },
            action
          )
        ),

        // eslint-disable-next-line
        total !== undefined && _react2.default.createElement('div', { className: _index2.default.total, dangerouslySetInnerHTML: { __html: total } })
      )
    ),
    children && _react2.default.createElement(
      'div',
      { className: _index2.default.content, style: { height: contentHeight || 'auto' } },
      _react2.default.createElement(
        'div',
        { className: contentHeight && _index2.default.contentFixed },
        children
      )
    ),
    footer && _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_index2.default.footer, _defineProperty({}, _index2.default.footerMargin, !children)) },
      footer
    )
  );

  return _react2.default.createElement(
    _card2.default,
    _extends({
      bodyStyle: { padding: '20px 24px 8px 24px' }
    }, rest),
    _react2.default.createElement(
      _spin2.default,
      { spinning: loading, wrapperClassName: _index2.default.spin },
      content
    )
  );
};

exports.default = ChartCard;
module.exports = exports['default'];