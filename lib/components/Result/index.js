import 'antd/lib/icon/style';
import _Icon from 'antd/lib/icon';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import classNames from 'classnames';
var styles = {
  'result': '_--css-module-js',
  'icon': '_--css-module-js',
  'success': '_--css-module-js',
  'error': '_--css-module-js',
  'title': '_--css-module-js',
  'description': '_--css-module-js',
  'extra': '_--css-module-js',
  'actions': '_--css-module-js'
};


export default function Result(_ref) {
  var className = _ref.className,
      type = _ref.type,
      title = _ref.title,
      description = _ref.description,
      extra = _ref.extra,
      actions = _ref.actions,
      restProps = _objectWithoutProperties(_ref, ['className', 'type', 'title', 'description', 'extra', 'actions']);

  var iconMap = {
    error: React.createElement(_Icon, { className: styles.error, type: 'close-circle' }),
    success: React.createElement(_Icon, { className: styles.success, type: 'check-circle' })
  };
  var clsString = classNames(styles.result, className);
  return React.createElement(
    'div',
    _extends({ className: clsString }, restProps),
    React.createElement(
      'div',
      { className: styles.icon },
      iconMap[type]
    ),
    React.createElement(
      'div',
      { className: styles.title },
      title
    ),
    description && React.createElement(
      'div',
      { className: styles.description },
      description
    ),
    extra && React.createElement(
      'div',
      { className: styles.extra },
      extra
    ),
    actions && React.createElement(
      'div',
      { className: styles.actions },
      actions
    )
  );
}
module.exports = exports['default'];