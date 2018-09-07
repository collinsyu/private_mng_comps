

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkPermissions = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PromiseRender = require('./PromiseRender');

var _PromiseRender2 = _interopRequireDefault(_PromiseRender);

var _index = require('./index');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * 通用权限检查方法
 * Common check permissions method
 * @param { 权限判定 Permission judgment type string |array | Promise | Function } authority
 * @param { 你的权限 Your permission description  type:string} currentAuthority
 * @param { 通过的组件 Passing components } target
 * @param { 未通过的组件 no pass components } Exception
 */
var checkPermissions = function checkPermissions(authority, currentAuthority, target, Exception) {
  // 没有判定权限.默认查看所有
  // Retirement authority, return target;
  if (!authority) {
    return target;
  }
  // 数组处理
  if (authority.constructor.name === 'Array') {
    if (authority.includes(currentAuthority)) {
      return target;
    }
    return Exception;
  }

  // string 处理
  if (authority.constructor.name === 'String') {
    if (authority === currentAuthority) {
      return target;
    }
    return Exception;
  }

  // Promise 处理
  if (authority.constructor.name === 'Promise') {
    return function () {
      return _react2.default.createElement(_PromiseRender2.default, { ok: target, error: Exception, promise: authority });
    };
  }

  // Function 处理
  if (authority.constructor.name === 'Function') {
    try {
      var bool = authority();
      if (bool) {
        return target;
      }
      return Exception;
    } catch (error) {
      throw error;
    }
  }
  throw new Error('unsupported parameters');
};

exports.checkPermissions = checkPermissions;

var check = function check(authority, target, Exception) {
  return checkPermissions(authority, _index.CURRENT, target, Exception);
};

exports.default = check;