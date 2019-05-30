Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('rc-drawer-menu/assets/index.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcDrawerMenu = require('rc-drawer-menu');

var _rcDrawerMenu2 = _interopRequireDefault(_rcDrawerMenu);

var _SiderMenu = require('./SiderMenu');

var _SiderMenu2 = _interopRequireDefault(_SiderMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return props.isMobile ? _react2.default.createElement(
    _rcDrawerMenu2.default,
    {
      parent: null,
      level: null,
      iconChild: null,
      open: !props.collapsed,
      onMaskClick: function onMaskClick() {
        props.onCollapse(true);
      },
      width: '226px'
    },
    _react2.default.createElement(_SiderMenu2.default, _extends({}, props, { collapsed: props.isMobile ? false : props.collapsed }))
  ) : _react2.default.createElement(_SiderMenu2.default, props);
};

module.exports = exports['default'];