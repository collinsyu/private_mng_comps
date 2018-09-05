var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

var Trend = function Trend(_ref) {
  var _ref$colorful = _ref.colorful,
      colorful = _ref$colorful === undefined ? true : _ref$colorful,
      flag = _ref.flag,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['colorful', 'flag', 'children', 'className']);

  var classString = classNames(styles.trendItem, _defineProperty({}, styles.trendItemGrey, !colorful), className);
  return React.createElement(
    'div',
    _extends({}, rest, {
      className: classString,
      title: typeof children === 'string' ? children : ''
    }),
    React.createElement(
      'span',
      { className: styles.value },
      children
    ),
    flag && React.createElement(
      'span',
      { className: styles[flag] },
      React.createElement(Icon, { type: 'caret-' + flag })
    )
  );
};

export default Trend;