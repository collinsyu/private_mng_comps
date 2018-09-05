var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import styles from './index.less';

var Field = function Field(_ref) {
  var label = _ref.label,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ['label', 'value']);

  return React.createElement(
    'div',
    _extends({ className: styles.field }, rest),
    React.createElement(
      'span',
      null,
      label
    ),
    React.createElement(
      'span',
      null,
      value
    )
  );
};

export default Field;