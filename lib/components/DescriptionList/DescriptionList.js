Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = require('antd/lib/row');

var _row2 = _interopRequireDefault(_row);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('antd/lib/row/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var _classNames;

  var className = _ref.className,
      title = _ref.title,
      _ref$col = _ref.col,
      col = _ref$col === undefined ? 3 : _ref$col,
      _ref$layout = _ref.layout,
      layout = _ref$layout === undefined ? 'horizontal' : _ref$layout,
      _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === undefined ? 32 : _ref$gutter,
      children = _ref.children,
      size = _ref.size,
      restProps = _objectWithoutProperties(_ref, ['className', 'title', 'col', 'layout', 'gutter', 'children', 'size']);

  var clsString = (0, _classnames2.default)("_yhq_descriptionList", layout, className, (_classNames = {}, _defineProperty(_classNames, "_yhq_small", size === 'small'), _defineProperty(_classNames, "_yhq_large", size === 'large'), _classNames));
  var column = col > 4 ? 4 : col;
  return _react2.default.createElement(
    'div',
    _extends({ className: clsString }, restProps),
    title ? _react2.default.createElement(
      'div',
      { className: "_yhq_title" },
      title
    ) : null,
    _react2.default.createElement(
      _row2.default,
      { gutter: gutter },
      _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, { column: column });
      })
    ),
    _react2.default.createElement(
      'style',
      null,
      '\n        ._yhq_descriptionList .ant-row {\n          margin-bottom: -16px;\n          overflow: hidden;\n        }\n        ._yhq_descriptionList ._yhq_title {\n          font-size: 14px;\n          color: fade(#000, 85%);\n          font-weight: 500;\n          margin-bottom: 16px;\n        }\n        ._yhq_descriptionList ._yhq_draw_term:after {\n          content: ":";\n          margin: 0 8px 0 2px;\n          position: relative;\n          top: -.5px;\n        }\n        ._yhq_descriptionList ._yhq_draw_term {\n          line-height: 22px;\n          padding-bottom: 16px;\n          margin-right: 8px;\n          color: fade(#000, 85%);\n          white-space: nowrap;\n          display: table-cell;\n        }\n        ._yhq_descriptionList ._yhq_draw_detail {\n          line-height: 22px;\n          width: 100%;\n          padding-bottom: 16px;\n          color: fade(#000, 65%);\n          display: table-cell;\n        }\n        ._yhq_descriptionList._yhq_small .ant-row {\n          margin-bottom: -8px;\n        }\n        ._yhq_descriptionList._yhq_small ._yhq_title {\n          margin-bottom: 12px;\n          color: fade(#000, 65%);\n        }\n        ._yhq_descriptionList._yhq_small ._yhq_draw_term,\n        ._yhq_descriptionList._yhq_small ._yhq_draw_detail {\n          padding-bottom: 8px;\n        }\n        ._yhq_descriptionList_yhq_large ._yhq_title {\n          font-size: 16px;\n        }\n        ._yhq_descriptionList.vertical ._yhq_draw_term {\n          padding-bottom: 8px;\n          display: block;\n        }\n        ._yhq_descriptionList.vertical ._yhq_draw_detail {\n          display: block;\n        }\n\n      '
    )
  );
};

module.exports = exports['default'];