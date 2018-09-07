import 'antd/lib/row/style';
import _Row from 'antd/lib/row';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import classNames from 'classnames';
var styles = {
  'descriptionList': '_--css-module-js',
  'ant-row': '_--css-module-js',
  'title': '_--css-module-js',
  'term': '_--css-module-js',
  'detail': '_--css-module-js',
  'small': '_--css-module-js',
  'large': '_--css-module-js',
  'vertical': '_--css-module-js'
};


export default (function (_ref) {
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

  var clsString = classNames(styles.descriptionList, styles[layout], className, (_classNames = {}, _defineProperty(_classNames, styles.small, size === 'small'), _defineProperty(_classNames, styles.large, size === 'large'), _classNames));
  var column = col > 4 ? 4 : col;
  return React.createElement(
    'div',
    _extends({ className: clsString }, restProps),
    title ? React.createElement(
      'div',
      { className: styles.title },
      title
    ) : null,
    React.createElement(
      _Row,
      { gutter: gutter },
      React.Children.map(children, function (child) {
        return React.cloneElement(child, { column: column });
      })
    )
  );
});
module.exports = exports['default'];