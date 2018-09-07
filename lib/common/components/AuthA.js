Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tool = require('../tool');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthA = function AuthA(props) {

  var allprops = _extends({}, props);
  delete allprops.auth;
  // 如果没有权限，需要不同的提示方式
  if ((0, _tool.getAuth)(props.auth)) {
    return _react2.default.createElement('a', allprops);
  } else {
    return null;
  }
};

exports.default = AuthA;
module.exports = exports['default'];