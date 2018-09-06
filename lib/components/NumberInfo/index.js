import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import classNames from 'classnames';
import styles from './index.less';

export default (function (_ref) {
  var theme = _ref.theme,
      title = _ref.title,
      subTitle = _ref.subTitle,
      total = _ref.total,
      subTotal = _ref.subTotal,
      status = _ref.status,
      suffix = _ref.suffix,
      gap = _ref.gap,
      rest = _objectWithoutProperties(_ref, ['theme', 'title', 'subTitle', 'total', 'subTotal', 'status', 'suffix', 'gap']);

  return React.createElement(
    'div',
    _extends({
      className: classNames(styles.numberInfo, _defineProperty({}, styles['numberInfo' + theme], theme))
    }, rest),
    title && React.createElement(
      'div',
      { className: styles.numberInfoTitle },
      title
    ),
    subTitle && React.createElement(
      'div',
      { className: styles.numberInfoSubTitle },
      subTitle
    ),
    React.createElement(
      'div',
      { className: styles.numberInfoValue, style: gap ? { marginTop: gap } : null },
      React.createElement(
        'span',
        null,
        total,
        suffix && React.createElement(
          'em',
          { className: styles.suffix },
          suffix
        )
      ),
      (status || subTotal) && React.createElement(
        'span',
        { className: styles.subTotal },
        subTotal,
        status && React.createElement(_Icon, { type: 'caret-' + status })
      )
    )
  );
});