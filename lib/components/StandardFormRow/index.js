var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import classNames from 'classnames';
var styles = {
  'standardFormRow': '_--css-module-js',
  'ant-form-item': '_--css-module-js',
  'ant-form-item-label': '_--css-module-js',
  'ant-form-item-control': '_--css-module-js',
  'label': '_--css-module-js',
  'content': '_--css-module-js',
  'standardFormRowLast': '_--css-module-js',
  'standardFormRowBlock': '_--css-module-js',
  'ant-form-item-control-wrapper': '_--css-module-js',
  'standardFormRowGrid': '_--css-module-js'
};


export default (function (_ref) {
  var _classNames;

  var title = _ref.title,
      children = _ref.children,
      last = _ref.last,
      block = _ref.block,
      grid = _ref.grid,
      rest = _objectWithoutProperties(_ref, ['title', 'children', 'last', 'block', 'grid']);

  var cls = classNames(styles.standardFormRow, (_classNames = {}, _defineProperty(_classNames, styles.standardFormRowBlock, block), _defineProperty(_classNames, styles.standardFormRowLast, last), _defineProperty(_classNames, styles.standardFormRowGrid, grid), _classNames));

  return React.createElement(
    'div',
    _extends({ className: cls }, rest),
    title && React.createElement(
      'div',
      { className: styles.label },
      React.createElement(
        'span',
        null,
        title
      )
    ),
    React.createElement(
      'div',
      { className: styles.content },
      children
    )
  );
});
module.exports = exports['default'];