import 'antd/lib/button/style';
import _Button from 'antd/lib/button';
import 'antd/lib/form/style';
import _Form from 'antd/lib/form';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import classNames from 'classnames';

import styles from './index.less';

var FormItem = _Form.Item;

export default (function (_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['className']);

  var clsString = classNames(styles.submit, className);
  return React.createElement(
    FormItem,
    null,
    React.createElement(_Button, _extends({ size: 'large', className: clsString, type: 'primary', htmlType: 'submit' }, rest))
  );
});