var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { getAuth } from '../tool';

var AuthA = function AuthA(props) {

  var allprops = _extends({}, props);
  delete allprops.auth;
  // 如果没有权限，需要不同的提示方式
  if (getAuth(props.auth)) {
    return React.createElement('a', allprops);
  } else {
    return null;
  }
};

export default AuthA;
module.exports = exports['default'];