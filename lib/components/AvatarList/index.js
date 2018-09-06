import 'antd/lib/tooltip/style';
import _Tooltip from 'antd/lib/tooltip';
import 'antd/lib/avatar/style';
import _Avatar from 'antd/lib/avatar';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import classNames from 'classnames';

import styles from './index.less';

var AvatarList = function AvatarList(_ref) {
  var children = _ref.children,
      size = _ref.size,
      other = _objectWithoutProperties(_ref, ['children', 'size']);

  var childrenWithProps = React.Children.map(children, function (child) {
    return React.cloneElement(child, {
      size: size
    });
  });

  return React.createElement(
    'div',
    _extends({}, other, { className: styles.avatarList }),
    React.createElement(
      'ul',
      null,
      ' ',
      childrenWithProps,
      ' '
    )
  );
};

var Item = function Item(_ref2) {
  var _classNames;

  var src = _ref2.src,
      size = _ref2.size,
      tips = _ref2.tips,
      _ref2$onClick = _ref2.onClick,
      onClick = _ref2$onClick === undefined ? function () {} : _ref2$onClick;

  var cls = classNames(styles.avatarItem, (_classNames = {}, _defineProperty(_classNames, styles.avatarItemLarge, size === 'large'), _defineProperty(_classNames, styles.avatarItemSmall, size === 'small'), _defineProperty(_classNames, styles.avatarItemMini, size === 'mini'), _classNames));

  return React.createElement(
    'li',
    { className: cls, onClick: onClick },
    tips ? React.createElement(
      _Tooltip,
      { title: tips },
      React.createElement(_Avatar, { src: src, size: size, style: { cursor: 'pointer' } })
    ) : React.createElement(_Avatar, { src: src, size: size })
  );
};

AvatarList.Item = Item;

export default AvatarList;