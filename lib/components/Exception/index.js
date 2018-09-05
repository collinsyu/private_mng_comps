var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { createElement } from 'react';
import classNames from 'classnames';
import { Button } from 'antd';
import config from './typeConfig';
import styles from './index.less';

export default (function (_ref) {
  var className = _ref.className,
      _ref$linkElement = _ref.linkElement,
      linkElement = _ref$linkElement === undefined ? 'a' : _ref$linkElement,
      type = _ref.type,
      title = _ref.title,
      desc = _ref.desc,
      img = _ref.img,
      actions = _ref.actions,
      rest = _objectWithoutProperties(_ref, ['className', 'linkElement', 'type', 'title', 'desc', 'img', 'actions']);

  var pageType = type in config ? type : '404';
  var clsString = classNames(styles.exception, className);
  return React.createElement(
    'div',
    _extends({ className: clsString }, rest),
    React.createElement(
      'div',
      { className: styles.imgBlock },
      React.createElement('div', {
        className: styles.imgEle,
        style: { backgroundImage: 'url(' + (img || config[pageType].img) + ')' }
      })
    ),
    React.createElement(
      'div',
      { className: styles.content },
      React.createElement(
        'h1',
        null,
        title || config[pageType].title
      ),
      React.createElement(
        'div',
        { className: styles.desc },
        desc || config[pageType].desc
      ),
      React.createElement(
        'div',
        { className: styles.actions },
        actions || createElement(linkElement, {
          to: '/',
          href: '/'
        }, React.createElement(
          Button,
          { type: 'primary' },
          '\u8FD4\u56DE\u9996\u9875'
        ))
      )
    )
  );
});