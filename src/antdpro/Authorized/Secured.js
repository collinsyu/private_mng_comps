'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../Exception/index');

var _index2 = _interopRequireDefault(_index);

var _CheckPermissions = require('./CheckPermissions');

var _CheckPermissions2 = _interopRequireDefault(_CheckPermissions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 默认不能访问任何页面
 * default is "NULL"
 */
var Exception403 = function Exception403() {
  return _react2.default.createElement(_index2.default, { type: '403', style: { minHeight: 500, height: '80%' } });
};

/**
 * 用于判断是否拥有权限访问此view权限
 * authority 支持传入  string ,funtion:()=>boolean|Promise
 * e.g. 'user' 只有user用户能访问
 * e.g. 'user,admin' user和 admin 都能访问
 * e.g. ()=>boolean 返回true能访问,返回false不能访问
 * e.g. Promise  then 能访问   catch不能访问
 * e.g. authority support incoming string, funtion: () => boolean | Promise
 * e.g. 'user' only user user can access
 * e.g. 'user, admin' user and admin can access
 * e.g. () => boolean true to be able to visit, return false can not be accessed
 * e.g. Promise then can not access the visit to catch
 * @param {string | function | Promise} authority
 * @param {ReactNode} error 非必需参数
 */
var authorize = function authorize(authority, error) {
  /**
   * conversion into a class
   * 防止传入字符串时找不到staticContext造成报错
   * String parameters can cause staticContext not found error
   */
  var classError = false;
  if (error) {
    classError = function classError() {
      return error;
    };
  }
  if (!authority) {
    throw new Error('authority is required');
  }
  return function decideAuthority(targer) {
    return (0, _CheckPermissions2.default)(authority, targer, classError || Exception403);
  };
};

exports.default = authorize;
module.exports = exports['default'];